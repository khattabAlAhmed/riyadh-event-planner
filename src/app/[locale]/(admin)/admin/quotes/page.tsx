'use client';

import { useState, useEffect } from 'react';
import { QuoteRequestTable } from '@/components/admin/QuoteRequestTable';
import { getQuoteRequests } from '@/server/admin';

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const pageSize = 20;

  useEffect(() => {
    fetchQuotes();
  }, [currentPage, statusFilter, searchQuery]);

  async function fetchQuotes() {
    setLoading(true);
    try {
      const result = await getQuoteRequests({
        status: statusFilter === 'all' ? undefined : statusFilter,
        search: searchQuery || undefined,
        limit: pageSize,
        offset: (currentPage - 1) * pageSize
      });

      setQuotes(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
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

  if (loading && quotes.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Quote Requests</h1>
        <p className="text-muted-foreground">
          Manage all quote requests from potential clients
        </p>
      </div>

      <QuoteRequestTable
        quotes={quotes}
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

