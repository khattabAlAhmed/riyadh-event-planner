'use server';

import { db } from '@/lib/db/drizzle';
import { quoteRequests, contactSubmissions, user } from '@/lib/db/schema';
import { eq, desc, and, or, like, sql } from 'drizzle-orm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function isAdmin(): Promise<boolean> {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session?.user) {
    return false;
  }

  const userRecord = await db.query.user.findFirst({
    where: eq(user.id, session.user.id)
  });

  return userRecord?.role === 'admin';
}

export async function requireAdmin() {
  const admin = await isAdmin();
  if (!admin) {
    throw new Error('Unauthorized: Admin access required');
  }
}

interface QuoteFilters {
  status?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

export async function getQuoteRequests(filters: QuoteFilters = {}) {
  await requireAdmin();

  const {
    status,
    search,
    limit = 50,
    offset = 0
  } = filters;

  // Build where conditions
  const conditions = [];
  
  if (status) {
    conditions.push(eq(quoteRequests.status, status));
  }

  if (search) {
    conditions.push(
      or(
        like(quoteRequests.fullName, `%${search}%`),
        like(quoteRequests.phone, `%${search}%`),
        like(quoteRequests.email, `%${search}%`),
        like(quoteRequests.eventType, `%${search}%`)
      )
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  // Get total count
  const countQuery = await db
    .select({ count: sql<number>`count(*)` })
    .from(quoteRequests)
    .where(whereClause);

  const total = Number(countQuery[0]?.count || 0);

  // Get paginated results
  const results = await db
    .select()
    .from(quoteRequests)
    .where(whereClause)
    .orderBy(desc(quoteRequests.createdAt))
    .limit(limit)
    .offset(offset);

  return {
    data: results,
    total,
    limit,
    offset
  };
}

export async function getQuoteRequestById(id: string) {
  await requireAdmin();

  const quote = await db.query.quoteRequests.findFirst({
    where: eq(quoteRequests.id, id)
  });

  if (!quote) {
    throw new Error('Quote request not found');
  }

  return quote;
}

interface UpdateQuoteStatusData {
  status?: string;
  adminNotes?: string;
}

export async function updateQuoteStatus(id: string, data: UpdateQuoteStatusData) {
  await requireAdmin();

  const result = await db
    .update(quoteRequests)
    .set({
      ...data,
      updatedAt: new Date()
    })
    .where(eq(quoteRequests.id, id))
    .returning();

  if (result.length === 0) {
    throw new Error('Quote request not found');
  }

  return result[0];
}

export async function deleteQuoteRequest(id: string) {
  await requireAdmin();

  const result = await db
    .delete(quoteRequests)
    .where(eq(quoteRequests.id, id))
    .returning();

  if (result.length === 0) {
    throw new Error('Quote request not found');
  }

  return result[0];
}

interface ContactFilters {
  status?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

export async function getContacts(filters: ContactFilters = {}) {
  await requireAdmin();

  const {
    status,
    search,
    limit = 50,
    offset = 0
  } = filters;

  // Build where conditions
  const conditions = [];
  
  if (status) {
    conditions.push(eq(contactSubmissions.status, status));
  }

  if (search) {
    conditions.push(
      or(
        like(contactSubmissions.name, `%${search}%`),
        like(contactSubmissions.email, `%${search}%`),
        like(contactSubmissions.phone, `%${search}%`),
        like(contactSubmissions.subject, `%${search}%`)
      )
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  // Get total count
  const countQuery = await db
    .select({ count: sql<number>`count(*)` })
    .from(contactSubmissions)
    .where(whereClause);

  const total = Number(countQuery[0]?.count || 0);

  // Get paginated results
  const results = await db
    .select()
    .from(contactSubmissions)
    .where(whereClause)
    .orderBy(desc(contactSubmissions.createdAt))
    .limit(limit)
    .offset(offset);

  return {
    data: results,
    total,
    limit,
    offset
  };
}

export async function getContactSubmissionById(id: string) {
  await requireAdmin();

  const contact = await db.query.contactSubmissions.findFirst({
    where: eq(contactSubmissions.id, id)
  });

  if (!contact) {
    throw new Error('Contact submission not found');
  }

  return contact;
}

interface UpdateContactStatusData {
  status?: string;
  adminNotes?: string;
}

export async function updateContactStatus(id: string, data: UpdateContactStatusData) {
  await requireAdmin();

  const result = await db
    .update(contactSubmissions)
    .set({
      ...data,
      updatedAt: new Date()
    })
    .where(eq(contactSubmissions.id, id))
    .returning();

  if (result.length === 0) {
    throw new Error('Contact submission not found');
  }

  return result[0];
}

export async function deleteContactSubmission(id: string) {
  await requireAdmin();

  const result = await db
    .delete(contactSubmissions)
    .where(eq(contactSubmissions.id, id))
    .returning();

  if (result.length === 0) {
    throw new Error('Contact submission not found');
  }

  return result[0];
}

export async function getAdminStats() {
  await requireAdmin();

  // Get quote counts by status
  const quoteStats = await db
    .select({
      status: quoteRequests.status,
      count: sql<number>`count(*)`
    })
    .from(quoteRequests)
    .groupBy(quoteRequests.status);

  // Get contact counts by status
  const contactStats = await db
    .select({
      status: contactSubmissions.status,
      count: sql<number>`count(*)`
    })
    .from(contactSubmissions)
    .groupBy(contactSubmissions.status);

  // Get recent quotes (last 5)
  const recentQuotes = await db
    .select()
    .from(quoteRequests)
    .orderBy(desc(quoteRequests.createdAt))
    .limit(5);

  // Get recent contacts (last 5)
  const recentContacts = await db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt))
    .limit(5);

  return {
    quotes: {
      total: quoteStats.reduce((acc, stat) => acc + Number(stat.count), 0),
      byStatus: Object.fromEntries(
        quoteStats.map(stat => [stat.status, Number(stat.count)])
      ),
      recent: recentQuotes
    },
    contacts: {
      total: contactStats.reduce((acc, stat) => acc + Number(stat.count), 0),
      byStatus: Object.fromEntries(
        contactStats.map(stat => [stat.status, Number(stat.count)])
      ),
      recent: recentContacts
    }
  };
}

