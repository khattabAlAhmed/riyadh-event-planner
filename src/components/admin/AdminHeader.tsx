'use client';

import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  ArrowLeft 
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function AdminHeader() {
  const pathname = usePathname();

  const navItems = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: LayoutDashboard
    },
    {
      title: 'Quote Requests',
      href: '/admin/quotes',
      icon: FileText
    },
    {
      title: 'Contact Submissions',
      href: '/admin/contacts',
      icon: MessageSquare
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 me-2" />
              Back to Site
            </Link>
          </Button>
          <div className="h-6 w-px bg-border" />
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        <nav className="flex items-center gap-2 ms-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            
            return (
              <Button
                key={item.href}
                asChild
                variant={isActive ? 'default' : 'ghost'}
                size="sm"
              >
                <Link href={item.href}>
                  <Icon className="h-4 w-4 me-2" />
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

