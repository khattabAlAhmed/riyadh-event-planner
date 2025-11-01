'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createQuoteRequestSchema, type QuoteRequestFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { CITIES, EVENT_TYPES, ATTENDANCE_RANGES, TIME_SLOTS, BUDGET_RANGES } from '@/lib/constants';
import arMessages from '../../../messages/ar.json';

const STEPS = 4;
const N8N_WEBHOOK_URL = 'https://n8n.alriyadah-medical.org/webhook/ab527808-6b24-415c-9fb9-1fe5931993df';

// Helper function to format form data into Arabic message
function formatArabicMessage(data: QuoteRequestFormData): string {
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = arMessages.QuoteRequest;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const formatDate = (date: Date | undefined): string => {
    if (!date) return '';
    const arabicMonths = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    const day = date.getDate();
    const month = arabicMonths[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const selectedServices = Object.entries(data.services)
    .filter(([_, selected]) => selected)
    .map(([key, _]) => t(key));

  let message = '📋 *طلب عرض سعر جديد*\n\n';
  
  // Contact Information
  message += '*معلومات التواصل:*\n';
  message += `${t('fullName')}: ${data.fullName}\n`;
  message += `${t('phone')}: ${data.phone}\n`;
  if (data.email) {
    message += `${t('email')}: ${data.email}\n`;
  }
  message += `${t('city')}: ${t(`cities.${data.city}`)}\n\n`;

  // Event Details
  message += '*تفاصيل المناسبة:*\n';
  message += `${t('eventType')}: ${t(data.eventType || '')}\n`;
  message += `${t('eventDate')}: ${formatDate(data.eventDate)}\n`;
  message += `${t('eventTime')}: ${t(data.eventTime || '')}\n`;
  message += `${t('attendance')}: ${t(data.attendance || '')}\n`;
  message += `${t('location')}: ${data.location}\n\n`;

  // Services
  message += '*الخدمات المطلوبة:*\n';
  if (selectedServices.length > 0) {
    selectedServices.forEach((service, index) => {
      message += `${index + 1}. ${service}\n`;
    });
  }
  message += '\n';

  // Budget
  if (data.budget) {
    message += `${t('budget')}: ${t(data.budget)}\n\n`;
  }

  // Additional Notes
  if (data.additionalNotes) {
    message += `${t('additionalNotes')}:\n${data.additionalNotes}\n`;
  }

  return message;
}

export function QuoteRequestForm() {
  const t = useTranslations('QuoteRequest');
  const tCommon = useTranslations('Common');
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create localized schema
  const quoteRequestSchema = useMemo(() => createQuoteRequestSchema((key: string) => t(key)), [t]);

  const form = useForm<QuoteRequestFormData>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      city: 'Riyadh',
      eventType: undefined,
      eventDate: undefined,
      eventTime: undefined,
      attendance: undefined,
      location: '',
      services: {
        fullPlanning: false,
        tentRental: false,
        chairRental: false,
        tableRental: false,
        decoration: false,
        audioEquipment: false,
        lighting: false,
        coolingHeating: false,
        additionalServices: false,
      },
      budget: undefined,
      additionalNotes: '',
    },
    mode: 'onChange',
  });

  const progress = (currentStep / STEPS) * 100;

  const nextStep = async () => {
    let fieldsToValidate: Array<keyof QuoteRequestFormData> = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ['fullName', 'phone', 'city'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['eventType', 'eventDate', 'eventTime', 'attendance', 'location'];
    } else if (currentStep === 3) {
      fieldsToValidate = ['services'];
    }

    const isValid = await form.trigger(fieldsToValidate as Array<keyof QuoteRequestFormData>);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: QuoteRequestFormData) => {
    // Prevent submission if not on the final step
    if (currentStep !== STEPS) {
      return;
    }

    // Validate budget before submitting
    const isValid = await form.trigger('budget');
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Format the message in Arabic
      const arabicMessage = formatArabicMessage(data);

      // Send to n8n webhook - message as plain string
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        body: arabicMessage,
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast.success(t('success'));
      form.reset();
      setCurrentStep(1);
    } catch {
      toast.error(t('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <Progress value={progress} className="mt-4" />
        <p className="text-sm text-muted-foreground mt-2">
          {t(`step${currentStep}`)} ({currentStep}/{STEPS})
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('fullName')}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('phone')}</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')} ({t('optional')})</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('city')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {CITIES.map((city) => (
                            <SelectItem key={city} value={city}>
                              {t(`cities.${city}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 2: Event Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('eventType')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {EVENT_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {t(type)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('eventDate')}</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                          onChange={(e) => field.onChange(new Date(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="eventTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('eventTime')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {TIME_SLOTS.map((time) => (
                            <SelectItem key={time} value={time}>
                              {t(time)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="attendance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('attendance')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ATTENDANCE_RANGES.map((range) => (
                            <SelectItem key={range} value={range}>
                              {t(range)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('location')}</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder={t('locationPlaceholder')} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 3: Services */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <div className="space-y-3">
                        {[
                          { key: 'fullPlanning', label: t('fullPlanning') },
                          { key: 'tentRental', label: t('tentRental') },
                          { key: 'chairRental', label: t('chairRental') },
                          { key: 'tableRental', label: t('tableRental') },
                          { key: 'decoration', label: t('decoration') },
                          { key: 'audioEquipment', label: t('audioEquipment') },
                          { key: 'lighting', label: t('lighting') },
                          { key: 'coolingHeating', label: t('coolingHeating') },
                          { key: 'additionalServices', label: t('additionalServices') },
                        ].map((service) => {
                          const fieldName = `services.${service.key}` as keyof QuoteRequestFormData | `services.${string}`;
                          return (
                          <FormField
                            key={service.key}
                            control={form.control}
                            name={fieldName as never}
                            render={({ field }) => (
                              <FormItem className="flex items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  {service.label}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          );
                        })}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 4: Budget & Notes */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('budget')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('selectBudgetRange')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {BUDGET_RANGES.map((range) => (
                            <SelectItem key={range} value={range}>
                              {t(range)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('additionalNotes')}</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          {...field}
                          placeholder={t('notesPlaceholder')}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                {tCommon('previous')}
              </Button>
              {currentStep === STEPS ? (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? tCommon('loading') : tCommon('submit')}
                </Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  {tCommon('next')}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

