'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StatusBadge, QuoteStatus } from './StatusBadge';
import { format } from 'date-fns';
import { Eye, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface QuoteRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string | null;
  eventType: string;
  eventDate: Date;
  attendance: string;
  status: QuoteStatus;
  createdAt: Date;
}

interface QuoteRequestTableProps {
  quotes: QuoteRequest[];
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onStatusFilter: (status: string) => void;
  onSearch: (query: string) => void;
}

export function QuoteRequestTable({
  quotes,
  total,
  currentPage,
  pageSize,
  onPageChange,
  onStatusFilter,
  onSearch
}: QuoteRequestTableProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const totalPages = Math.ceil(total / pageSize);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Quote Requests ({total})</CardTitle>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute start-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search quotes..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="ps-8 w-full sm:w-[200px]"
              />
            </div>
            <Select onValueChange={onStatusFilter}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="contacted">Contacted</SelectItem>
                <SelectItem value="quoted">Quoted</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-start p-3 font-medium">Name</th>
                <th className="text-start p-3 font-medium">Event Type</th>
                <th className="text-start p-3 font-medium">Event Date</th>
                <th className="text-start p-3 font-medium">Attendance</th>
                <th className="text-start p-3 font-medium">Status</th>
                <th className="text-start p-3 font-medium">Submitted</th>
                <th className="text-end p-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id} className="border-b hover:bg-muted/50">
                  <td className="p-3">
                    <div className="font-medium">{quote.fullName}</div>
                    <div className="text-sm text-muted-foreground">{quote.phone}</div>
                  </td>
                  <td className="p-3">{quote.eventType}</td>
                  <td className="p-3">{format(new Date(quote.eventDate), 'MMM dd, yyyy')}</td>
                  <td className="p-3">{quote.attendance}</td>
                  <td className="p-3">
                    <StatusBadge status={quote.status} />
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">
                    {format(new Date(quote.createdAt), 'MMM dd, yyyy')}
                  </td>
                  <td className="p-3 text-end">
                    <Button asChild size="sm" variant="ghost">
                      <Link href={`/admin/quotes/${quote.id}`}>
                        <Eye className="h-4 w-4 me-1" />
                        View
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {quotes.map((quote) => (
            <Card key={quote.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-medium">{quote.fullName}</div>
                    <div className="text-sm text-muted-foreground">{quote.phone}</div>
                  </div>
                  <StatusBadge status={quote.status} />
                </div>
                <div className="space-y-2 text-sm mb-3">
                  <div>
                    <span className="text-muted-foreground">Event:</span> {quote.eventType}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date:</span>{' '}
                    {format(new Date(quote.eventDate), 'MMM dd, yyyy')}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Attendance:</span> {quote.attendance}
                  </div>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href={`/admin/quotes/${quote.id}`}>
                    <Eye className="h-4 w-4 me-1" />
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {quotes.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No quote requests found
          </div>
        )}
      </CardContent>
    </Card>
  );
}

