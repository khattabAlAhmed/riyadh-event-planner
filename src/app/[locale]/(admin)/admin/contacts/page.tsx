'use client';

import { useState, useEffect } from 'react';
import { ContactSubmissionTable } from '@/components/admin/ContactSubmissionTable';
import { getContacts } from '@/server/admin';

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const pageSize = 20;

  useEffect(() => {
    fetchContacts();
  }, [currentPage, statusFilter, searchQuery]);

  async function fetchContacts() {
    setLoading(true);
    try {
      const result = await getContacts({
        status: statusFilter === 'all' ? undefined : statusFilter,
        search: searchQuery || undefined,
        limit: pageSize,
        offset: (currentPage - 1) * pageSize
      });

      setContacts(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  if (loading && contacts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Contact Submissions</h1>
        <p className="text-muted-foreground">
          Manage all contact form submissions
        </p>
      </div>

      <ContactSubmissionTable
        contacts={contacts}
        total={total}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onStatusFilter={handleStatusFilter}
        onSearch={handleSearch}
      />
    </div>
  );
}

