'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function ShareButtons({
  url,
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  className,
}: ShareButtonsProps) {
  const t = useTranslations('Common');
  const [copied, setCopied] = useState(false);

  const shareUrl = url || typeof window !== 'undefined' ? window.location.href : SITE_CONFIG.url;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={title} separator=" - ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopy}
        className="h-8 w-8 rounded-full"
        aria-label={t('copyLink')}
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

