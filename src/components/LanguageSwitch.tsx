'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { Button } from './ui/button';
import { GlobeIcon } from 'lucide-react';

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  
  const currentLocale = params.locale as string;
  
  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      onClick={toggleLanguage}
      className="cursor-pointer"
    >
        <GlobeIcon className="w-4 h-4" />
      {/* {currentLocale === 'en' ? 'ع' : 'En'} */}
    </Button>
  );
}
