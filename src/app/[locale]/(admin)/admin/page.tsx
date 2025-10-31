import { getAdminStats } from '@/server/admin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquare, TrendingUp, Clock } from 'lucide-react';
import { format } from 'date-fns';

export default async function AdminDashboardPage() {
  const stats = await getAdminStats();

  const quoteStats = [
    { label: 'Pending', value: stats.quotes.byStatus.pending || 0, status: 'pending' as const },
    { label: 'Contacted', value: stats.quotes.byStatus.contacted || 0, status: 'contacted' as const },
    { label: 'Quoted', value: stats.quotes.byStatus.quoted || 0, status: 'quoted' as const },
    { label: 'Converted', value: stats.quotes.byStatus.converted || 0, status: 'converted' as const },
  ];

  const contactStats = [
    { label: 'New', value: stats.contacts.byStatus.new || 0, status: 'new' as const },
    { label: 'Read', value: stats.contacts.byStatus.read || 0, status: 'read' as const },
    { label: 'Replied', value: stats.contacts.byStatus.replied || 0, status: 'replied' as const },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the admin panel. Here's an overview of your business.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Quotes
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.quotes.total}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All-time quote requests
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Contacts
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.contacts.total}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All-time contact submissions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Pending Quotes
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.quotes.byStatus.pending || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Awaiting response
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.quotes.total > 0
                ? Math.round(((stats.quotes.byStatus.converted || 0) / stats.quotes.total) * 100)
                : 0}%
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Quotes to clients
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quote Status Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Quote Requests by Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {quoteStats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{stat.label}</span>
                  <StatusBadge status={stat.status} />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href="/admin/quotes">View All Quotes</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Status Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Submissions by Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {contactStats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{stat.label}</span>
                  <StatusBadge status={stat.status} />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href="/admin/contacts">View All Contacts</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Quotes */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Quote Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.quotes.recent.map((quote) => (
                <div key={quote.id} className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{quote.fullName}</p>
                    <p className="text-xs text-muted-foreground">{quote.eventType}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(quote.createdAt), 'MMM dd, yyyy')}
                    </p>
                  </div>
                  <StatusBadge status={quote.status} />
                </div>
              ))}
              {stats.quotes.recent.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No recent quote requests
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Contact Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.contacts.recent.map((contact) => (
                <div key={contact.id} className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{contact.name}</p>
                    <p className="text-xs text-muted-foreground">{contact.subject}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(contact.createdAt), 'MMM dd, yyyy')}
                    </p>
                  </div>
                  <StatusBadge status={contact.status} />
                </div>
              ))}
              {stats.contacts.recent.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No recent contact submissions
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

