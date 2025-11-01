import { z } from 'zod';
import { EVENT_TYPES, CITIES, ATTENDANCE_RANGES, TIME_SLOTS, BUDGET_RANGES } from './constants';

// Function to create localized quote request schema
export const createQuoteRequestSchema = (t: (key: string) => string) => z.object({
  // Step 1: Contact Information
  fullName: z.string().min(2, t('errors.fullNameMin')),
  phone: z.string().min(10, t('errors.phoneMin')),
  email: z.string().email(t('errors.emailInvalid')).optional().or(z.literal('')),
  city: z.enum([...CITIES] as [string, ...string[]], {
    message: t('errors.cityRequired'),
  }),

  // Step 2: Event Details
  eventType: z.enum([...EVENT_TYPES] as [string, ...string[]], {
    message: t('errors.eventTypeRequired'),
  }),
  eventDate: z.date({
    message: t('errors.eventDateRequired'),
  }),
  eventTime: z.enum([...TIME_SLOTS] as [string, ...string[]], {
    message: t('errors.eventTimeRequired'),
  }),
  attendance: z.enum([...ATTENDANCE_RANGES] as [string, ...string[]], {
    message: t('errors.attendanceRequired'),
  }),
  location: z.string().min(3, t('errors.locationMin')),

  // Step 3: Services (optional, but at least one should be selected)
  services: z.object({
    fullPlanning: z.boolean(),
    tentRental: z.boolean(),
    chairRental: z.boolean(),
    tableRental: z.boolean(),
    decoration: z.boolean(),
    audioEquipment: z.boolean(),
    lighting: z.boolean(),
    coolingHeating: z.boolean(),
    additionalServices: z.boolean(),
  }).refine((data) => Object.values(data).some((value) => value === true), {
    message: t('errors.servicesRequired'),
  }),

  // Step 4: Budget & Notes
  budget: z.enum([...BUDGET_RANGES] as [string, ...string[]], {
    message: t('errors.budgetRequired'),
  }),
  additionalNotes: z.string().optional(),
});

// Default schema for backwards compatibility (English)
export const quoteRequestSchema = createQuoteRequestSchema((key: string) => {
  const messages: Record<string, string> = {
    'errors.fullNameMin': 'Full name must be at least 2 characters',
    'errors.phoneMin': 'Phone number must be at least 10 digits',
    'errors.emailInvalid': 'Invalid email address',
    'errors.cityRequired': 'Please select a city',
    'errors.eventTypeRequired': 'Please select an event type',
    'errors.eventDateRequired': 'Please select an event date',
    'errors.eventTimeRequired': 'Please select an event time',
    'errors.attendanceRequired': 'Please select expected attendance',
    'errors.locationMin': 'Location must be at least 3 characters',
    'errors.servicesRequired': 'Please select at least one service',
    'errors.budgetRequired': 'Please select a budget range',
  };
  return messages[key] || key;
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type QuoteRequestFormData = z.infer<typeof quoteRequestSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;

