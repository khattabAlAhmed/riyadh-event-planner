'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitch from '@/components/LanguageSwitch';
import ModeToggler from '@/components/mode-toggler';
import { cn } from '@/lib/utils';
import { Button } from '../animate-ui/components/buttons/button';
import { LiquidButton } from '../animate-ui/components/buttons/liquid';

export function Header() {
  const t = useTranslations('Header');
  const tServices = useTranslations('Header.servicesMenu');
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/blog', label: t('blog') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const serviceLinks = [
    { href: '/services/event-planning', label: tServices('eventPlanning') },
    { href: '/services/exhibitions-conferences', label: tServices('exhibitions') },
    { href: '/services/equipment-rental', label: tServices('equipmentRental') },
    { href: '/services/tent-rental', label: tServices('tentRental') },
    { href: '/services/furniture-rental', label: tServices('furnitureRental') },
    { href: '/services/audio-lighting-rental', label: tServices('audioLighting') },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close after 500ms
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 500);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

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
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
                pathname.startsWith('/services')
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {t('services')}
              <ChevronDown className={cn(
                "h-4 w-4 transition-transform",
                servicesOpen && "rotate-180"
              )} />
            </button>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.div 
                  className="absolute top-full start-0 pt-2 w-64 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'block px-4 py-2 text-sm transition-colors hover:bg-muted',
                          isActive(link.href)
                            ? 'text-primary font-medium'
                            : 'text-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Link href="/quote-request">
            <LiquidButton size="sm" className="hidden md:inline-flex cursor-pointer ">
              {t('quoteRequest')}
            </LiquidButton>
          </Link>
          <LanguageSwitch />
          <ModeToggler />

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <LiquidButton variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t('menu')}</span>
              </LiquidButton>
            </SheetTrigger>
            <SheetContent side={locale === 'ar' ? 'left' : 'right'} className="w-[300px]">
              <SheetHeader>
                <SheetTitle>{t('menu')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8 px-8">
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
                
                {/* Services Submenu */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      'flex items-center justify-between text-lg font-medium transition-colors hover:text-primary text-start',
                      pathname.startsWith('/services')
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    {t('services')}
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform",
                      servicesOpen && "rotate-180"
                    )} />
                  </button>
                  {servicesOpen && (
                    <div className="flex flex-col gap-2 ms-4 mt-2">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'text-base transition-colors hover:text-primary',
                            isActive(link.href)
                              ? 'text-primary font-medium'
                              : 'text-muted-foreground'
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
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

