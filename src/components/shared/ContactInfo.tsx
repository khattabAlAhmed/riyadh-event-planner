'use client';

import { useTranslations } from 'next-intl';
import { SITE_CONFIG } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactInfoProps {
  className?: string;
  showIcon?: boolean;
}

export function ContactInfo({ className, showIcon = true }: ContactInfoProps) {
  const t = useTranslations('Common');
  const tContact = useTranslations('Contact');

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-start gap-3">
        {showIcon && <Phone className="h-5 w-5 mt-0.5 text-primary" />}
        <div>
          <p className="text-sm font-medium">{t('phone')}</p>
          <a
            href={`tel:${SITE_CONFIG.contact.phone}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {SITE_CONFIG.contact.phone}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {showIcon && <MessageCircle className="h-5 w-5 mt-0.5 text-primary" />}
        <div>
          <p className="text-sm font-medium">{t('whatsapp')}</p>
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {SITE_CONFIG.contact.whatsapp}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {showIcon && <Mail className="h-5 w-5 mt-0.5 text-primary" />}
        <div>
          <p className="text-sm font-medium">{t('email')}</p>
          <a
            href={`mailto:${SITE_CONFIG.contact.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {SITE_CONFIG.contact.email}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {showIcon && <MapPin className="h-5 w-5 mt-0.5 text-primary" />}
        <div>
          <p className="text-sm font-medium">{t('address')}</p>
          <p className="text-muted-foreground">{tContact('address')}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {showIcon && <Clock className="h-5 w-5 mt-0.5 text-primary" />}
        <div>
          <p className="text-sm font-medium">{t('workingHours')}</p>
          <p className="text-muted-foreground">{tContact('workingHours')}</p>
        </div>
      </div>
    </div>
  );
}

