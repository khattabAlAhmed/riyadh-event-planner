'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations('LanguageSwitch');
  
  const currentLocale = params.locale as string;
  
  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
    >
      {currentLocale === 'en' ? 'ع' : 'En'}
    </button>
  );
}
