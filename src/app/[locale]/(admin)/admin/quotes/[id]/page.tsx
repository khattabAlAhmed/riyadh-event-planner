import { getQuoteRequestById, updateQuoteStatus } from '@/server/admin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Link } from '@/i18n/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, Calendar, Mail, MapPin, Phone, Users } from 'lucide-react';
import { format } from 'date-fns';
import { revalidatePath } from 'next/cache';

export default async function QuoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quote = await getQuoteRequestById(id);

  async function handleStatusUpdate(formData: FormData) {
    'use server';
    const status = formData.get('status') as string;
    const adminNotes = formData.get('adminNotes') as string;

    await updateQuoteStatus(id, { status, adminNotes });
    revalidatePath(`/admin/quotes/${id}`);
  }

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/quotes">
            <ArrowLeft className="h-4 w-4 me-2" />
            Back to Quotes
          </Link>
        </Button>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Quote Request Details</h1>
          <p className="text-muted-foreground">
            Submitted on {format(new Date(quote.createdAt), 'MMMM dd, yyyy')}
          </p>
        </div>
        <StatusBadge status={quote.status} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Full Name</div>
                <div className="font-medium">{quote.fullName}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="font-medium">{quote.phone}</div>
              </div>
            </div>
            {quote.email && (
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">{quote.email}</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">City</div>
                <div className="font-medium">{quote.city}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Details */}
        <Card>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Event Type</div>
              <div className="font-medium">{quote.eventType}</div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm text-muted-foreground">Event Date</div>
                <div className="font-medium">{format(new Date(quote.eventDate), 'MMMM dd, yyyy')}</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Event Time</div>
              <div className="font-medium">{quote.eventTime}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Expected Attendance</div>
              <div className="font-medium">{quote.attendance}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Location</div>
              <div className="font-medium">{quote.location}</div>
            </div>
            {quote.budget && (
              <div>
                <div className="text-sm text-muted-foreground mb-1">Budget</div>
                <div className="font-medium">{quote.budget}</div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Services Requested */}
      <Card>
        <CardHeader>
          <CardTitle>Services Requested</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(quote.services, null, 2)}
          </pre>
        </CardContent>
      </Card>

      {/* Additional Notes */}
      {quote.additionalNotes && (
        <Card>
          <CardHeader>
            <CardTitle>Additional Notes from Client</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{quote.additionalNotes}</p>
          </CardContent>
        </Card>
      )}

      {/* Admin Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleStatusUpdate} className="space-y-4">
            <div>
              <label htmlFor="status" className="text-sm font-medium mb-2 block">
                Update Status
              </label>
              <Select name="status" defaultValue={quote.status}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="quoted">Quoted</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="adminNotes" className="text-sm font-medium mb-2 block">
                Admin Notes
              </label>
              <Textarea
                id="adminNotes"
                name="adminNotes"
                placeholder="Add internal notes about this quote..."
                defaultValue={quote.adminNotes || ''}
                rows={4}
              />
            </div>

            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

