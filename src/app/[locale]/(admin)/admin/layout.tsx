import { redirect } from 'next/navigation';
import { isAdmin } from '@/server/admin';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await isAdmin();

  if (!admin) {
    redirect('/');
  }

  return (
    <div className="min-h-screen">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}

