'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitch from '@/components/LanguageSwitch';
import ModeToggler from '@/components/mode-toggler';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('Header');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/services/event-planning', label: t('services') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/blog', label: t('blog') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{t('logo')}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Link href="/quote-request">
            <Button size="sm" className="hidden md:inline-flex">
              {t('quoteRequest')}
            </Button>
          </Link>
          <LanguageSwitch />
          <ModeToggler />

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t('menu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={locale === 'ar' ? 'left' : 'right'} className="w-[300px]">
              <SheetHeader>
                <SheetTitle>{t('menu')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      isActive(link.href)
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/quote-request"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4"
                >
                  <Button className="w-full">{t('quoteRequest')}</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

