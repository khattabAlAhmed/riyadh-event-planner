'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StatusBadge, ContactStatus } from './StatusBadge';
import { format } from 'date-fns';
import { Eye, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: ContactStatus;
  createdAt: Date;
}

interface ContactSubmissionTableProps {
  contacts: ContactSubmission[];
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onStatusFilter: (status: string) => void;
  onSearch: (query: string) => void;
}

export function ContactSubmissionTable({
  contacts,
  total,
  currentPage,
  pageSize,
  onPageChange,
  onStatusFilter,
  onSearch
}: ContactSubmissionTableProps) {
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
          <CardTitle>Contact Submissions ({total})</CardTitle>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute start-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
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
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="replied">Replied</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
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
                <th className="text-start p-3 font-medium">Subject</th>
                <th className="text-start p-3 font-medium">Message Preview</th>
                <th className="text-start p-3 font-medium">Status</th>
                <th className="text-start p-3 font-medium">Submitted</th>
                <th className="text-end p-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b hover:bg-muted/50">
                  <td className="p-3">
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.email}</div>
                    <div className="text-sm text-muted-foreground">{contact.phone}</div>
                  </td>
                  <td className="p-3">{contact.subject}</td>
                  <td className="p-3">
                    <div className="max-w-xs truncate text-sm text-muted-foreground">
                      {contact.message}
                    </div>
                  </td>
                  <td className="p-3">
                    <StatusBadge status={contact.status} />
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">
                    {format(new Date(contact.createdAt), 'MMM dd, yyyy')}
                  </td>
                  <td className="p-3 text-end">
                    <Button asChild size="sm" variant="ghost">
                      <Link href={`/admin/contacts/${contact.id}`}>
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
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.email}</div>
                    <div className="text-sm text-muted-foreground">{contact.phone}</div>
                  </div>
                  <StatusBadge status={contact.status} />
                </div>
                <div className="space-y-2 text-sm mb-3">
                  <div>
                    <span className="text-muted-foreground">Subject:</span> {contact.subject}
                  </div>
                  <div className="text-muted-foreground line-clamp-2">{contact.message}</div>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href={`/admin/contacts/${contact.id}`}>
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

        {contacts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No contact submissions found
          </div>
        )}
      </CardContent>
    </Card>
  );
}

