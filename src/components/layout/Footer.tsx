'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { HexagonBackground } from '../animate-ui/components/backgrounds/hexagon';

export function Footer() {
  const t = useTranslations('Footer');
  const tContact = useTranslations('Contact');

  const serviceLinks = [
    { href: '/services/event-planning', label: t('eventPlanning') },
    { href: '/services/exhibitions-conferences', label: t('exhibitions') },
    { href: '/services/equipment-rental', label: t('equipmentRental') },
  ];

  const quickLinks = [
    { href: '/about', label: t('aboutUs') },
    { href: '/portfolio', label: t('testimonials') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <footer className="relative border-t border-border bg-muted/50">
      <HexagonBackground className="absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4 py-12 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pointer-events-auto">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt={t('company')}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t('instagram')}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t('twitter')}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t('facebook')}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('services')}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('contact')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.contact.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>{tContact('workingHours')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border pointer-events-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. {t('allRightsReserved')}.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                {t('privacyPolicy')}
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                {t('termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

