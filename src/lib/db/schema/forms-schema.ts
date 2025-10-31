import { pgTable, text, timestamp, jsonb, date } from 'drizzle-orm/pg-core';
import { user } from './auth-schema';

export const quoteRequests = pgTable('quote_requests', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => user.id),
  
  // Contact Information
  fullName: text('full_name').notNull(),
  phone: text('phone').notNull(),
  email: text('email'),
  city: text('city').notNull(),
  
  // Event Details
  eventType: text('event_type').notNull(),
  eventDate: date('event_date').notNull(),
  eventTime: text('event_time').notNull(),
  attendance: text('attendance').notNull(),
  location: text('location').notNull(),
  
  // Services (stored as JSON)
  services: jsonb('services').notNull(),
  
  // Budget & Notes
  budget: text('budget'),
  additionalNotes: text('additional_notes'),
  
  // Status tracking
  status: text('status').default('pending').notNull(), // pending, contacted, quoted, converted, cancelled
  adminNotes: text('admin_notes'),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const contactSubmissions = pgTable('contact_submissions', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => user.id),
  
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  
  // Status tracking
  status: text('status').default('new').notNull(), // new, read, replied, archived
  adminNotes: text('admin_notes'),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

