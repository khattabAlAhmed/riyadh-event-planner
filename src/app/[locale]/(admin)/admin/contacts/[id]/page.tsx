import { getContactSubmissionById, updateContactStatus } from '@/server/admin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatusBadge, ContactStatus } from '@/components/admin/StatusBadge';
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
import { ArrowLeft, Mail, Phone, User } from 'lucide-react';
import { format } from 'date-fns';
import { revalidatePath } from 'next/cache';

export default async function ContactDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const contact = await getContactSubmissionById(id);

  async function handleStatusUpdate(formData: FormData) {
    'use server';
    const status = formData.get('status') as string;
    const adminNotes = formData.get('adminNotes') as string;

    await updateContactStatus(id, { status, adminNotes });
    revalidatePath(`/admin/contacts/${id}`);
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/contacts">
            <ArrowLeft className="h-4 w-4 me-2" />
            Back to Contacts
          </Link>
        </Button>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Contact Submission Details</h1>
          <p className="text-muted-foreground">
            Submitted on {format(new Date(contact.createdAt), 'MMMM dd, yyyy')}
          </p>
        </div>
        <StatusBadge status={contact.status as ContactStatus} />
      </div>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Name</div>
              <div className="font-medium">{contact.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-medium">{contact.email}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <div className="font-medium">{contact.phone}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Message */}
      <Card>
        <CardHeader>
          <CardTitle>Subject: {contact.subject}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground mb-2">Message:</div>
          <div className="whitespace-pre-wrap rounded-md bg-muted p-4">
            {contact.message}
          </div>
        </CardContent>
      </Card>

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
              <Select name="status" defaultValue={contact.status}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="replied">Replied</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
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
                placeholder="Add internal notes about this contact..."
                defaultValue={contact.adminNotes || ''}
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

