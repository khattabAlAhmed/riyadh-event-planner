export const SITE_CONFIG = {
  name: 'Riyadh Event Planner',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://riyadheventplanner.com',
  description: 'Professional event planning, exhibitions, and equipment rental services in Riyadh',
  contact: {
    phone: '+966 55 224 8896',
    whatsapp: '+966 55 224 8896',
    email: 'info@riyadheventplanner.com',
    address: 'Riyadh, Saudi Arabia',
    workingHours: 'Saturday-Thursday, 9AM-6PM',
  },
  social: {
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    snapchat: 'https://snapchat.com',
  },
} as const;

export const EVENT_TYPES = [
  'wedding',
  'birthday',
  'graduation',
  'exhibition',
  'conference',
  'productLaunch',
  'familyEvent',
  'seasonal',
  'corporate',
  'other',
] as const;

export const CITIES = [
  'Riyadh',
  'Jeddah',
  'Dammam',
  'Khobar',
  'Mecca',
  'Medina',
  'Other',
] as const;

export const ATTENDANCE_RANGES = [
  'under50',
  '50to100',
  '100to200',
  '200to500',
  '500to1000',
  'over1000',
] as const;

export const TIME_SLOTS = [
  'morning',
  'afternoon',
  'evening',
  'night',
] as const;

export const BUDGET_RANGES = [
  'under5000',
  '5000to10000',
  '10000to20000',
  '20000to50000',
  'over50000',
  'open',
] as const;

