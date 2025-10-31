import { z } from 'zod';
import { EVENT_TYPES, CITIES, ATTENDANCE_RANGES, TIME_SLOTS, BUDGET_RANGES } from './constants';

export const quoteRequestSchema = z.object({
  // Step 1: Contact Information
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  city: z.enum([...CITIES] as [string, ...string[]], {
    message: 'Please select a city',
  }),

  // Step 2: Event Details
  eventType: z.enum([...EVENT_TYPES] as [string, ...string[]], {
    message: 'Please select an event type',
  }),
  eventDate: z.date({
    message: 'Please select an event date',
  }),
  eventTime: z.enum([...TIME_SLOTS] as [string, ...string[]], {
    message: 'Please select an event time',
  }),
  attendance: z.enum([...ATTENDANCE_RANGES] as [string, ...string[]], {
    message: 'Please select expected attendance',
  }),
  location: z.string().min(3, 'Location must be at least 3 characters'),

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
    message: 'Please select at least one service',
  }),

  // Step 4: Budget & Notes
  budget: z.enum([...BUDGET_RANGES] as [string, ...string[]]).optional(),
  additionalNotes: z.string().optional(),
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

