import { format as dateFnsFormat } from 'date-fns';
import { arSA, enUS } from 'date-fns/locale';

export const formatDate = (date: Date | string, locale: string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const localeObj = locale === 'ar' ? arSA : enUS;
  return dateFnsFormat(dateObj, 'PPP', { locale: localeObj });
};

export const formatPhone = (phone: string): string => {
  // Format phone number for display
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3');
};

export const formatCurrency = (amount: number, locale: string): string => {
  const currency = locale === 'ar' ? 'SAR' : 'SAR';
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const calculateReadTime = (content: string, locale: string): number => {
  const wordsPerMinute = locale === 'ar' ? 150 : 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

