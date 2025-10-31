'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Hero } from '@/components/shared/Hero';
import { ShareButtons } from '@/components/shared/ShareButtons';
import { CTASection } from '@/components/shared/CTASection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/motion-variants';
import { Link } from '@/i18n/navigation';
import { 
  Home as Tent, 
  Armchair, 
  Mic, 
  Flower2, 
  Wind,
  ArrowRight 
} from 'lucide-react';
import Image from 'next/image';

export default function EquipmentRentalPage() {
  const t = useTranslations('Services.equipmentRental');
  const tCommon = useTranslations('Common');
  const locale = useLocale();

  const equipmentCategories = [
    {
      icon: Tent,
      title: { en: 'Tent Rental', ar: 'تأجير الخيام' },
      description: { 
        en: 'European tents, traditional tents, and custom designs for all occasions', 
        ar: 'خيام أوروبية، خيام تقليدية، وتصاميم مخصصة لجميع المناسبات' 
      },
      image: '/placeholder-tent.jpg',
      href: '/services/tent-rental',
      features: [
        { en: 'Pyramid tents', ar: 'خيام هرمية' },
        { en: 'Polygon tents', ar: 'خيام البيلاجون' },
        { en: 'Dome tents', ar: 'خيام الدوم' },
        { en: 'Clear span tents', ar: 'خيام شفافة' }
      ]
    },
    {
      icon: Armchair,
      title: { en: 'Furniture Rental', ar: 'تأجير الكراسي والطاولات' },
      description: { 
        en: 'Elegant chairs and tables in various styles for weddings and events', 
        ar: 'كراسي وطاولات أنيقة بأنماط متنوعة للأعراس والمناسبات' 
      },
      image: '/placeholder-service-2.jpg',
      href: '/services/furniture-rental',
      features: [
        { en: 'Chiavari chairs', ar: 'كراسي شيفاري' },
        { en: 'Napoleon chairs', ar: 'كراسي نابليون' },
        { en: 'Round and rectangular tables', ar: 'طاولات مستديرة ومستطيلة' },
        { en: 'Table linens and covers', ar: 'أقمشة وأغطية الطاولات' }
      ]
    },
    {
      icon: Mic,
      title: { en: 'Audio & Lighting', ar: 'المعدات الصوتية والإضاءة' },
      description: { 
        en: 'Professional sound systems and lighting equipment for any event size', 
        ar: 'أنظمة صوتية احترافية ومعدات إضاءة لأي حجم من المناسبات' 
      },
      image: '/placeholder-service-3.jpg',
      href: '/services/audio-lighting-rental',
      features: [
        { en: 'Professional speakers', ar: 'سماعات احترافية' },
        { en: 'Wireless microphones', ar: 'ميكروفونات لاسلكية' },
        { en: 'LED lighting', ar: 'إضاءة LED' },
        { en: 'Stage lighting', ar: 'إضاءة المسرح' }
      ]
    },
    {
      icon: Flower2,
      title: { en: 'Decor Equipment', ar: 'معدات الديكور' },
      description: { 
        en: 'Beautiful decorative elements to enhance your event atmosphere', 
        ar: 'عناصر ديكور جميلة لتعزيز أجواء مناسبتك' 
      },
      image: '/placeholder-service-1.jpg',
      href: '/quote-request',
      features: [
        { en: 'Wedding stages (Kosha)', ar: 'منصات الأعراس (كوشة)' },
        { en: 'Entrance gates', ar: 'بوابات المداخل' },
        { en: 'Curtains and drapes', ar: 'ستائر وأقمشة' },
        { en: 'Fresh flowers and plants', ar: 'زهور ونباتات طبيعية' }
      ]
    },
    {
      icon: Wind,
      title: { en: 'Cooling & Heating', ar: 'التبريد والتدفئة' },
      description: { 
        en: 'Climate control equipment for outdoor events in any weather', 
        ar: 'معدات التحكم في المناخ للفعاليات الخارجية في أي طقس' 
      },
      image: '/placeholder-portfolio-3.jpg',
      href: '/quote-request',
      features: [
        { en: 'Evaporative coolers', ar: 'مبردات تبخيرية' },
        { en: 'Outdoor heaters', ar: 'مدفئات خارجية' },
        { en: 'Industrial fans', ar: 'مراوح صناعية' },
        { en: 'Air conditioning units', ar: 'وحدات تكييف' }
      ]
    }
  ];

  return (
    <>
      <Hero
        title={t('title')}
        subtitle={t('description')}
        ctaText={tCommon('getStarted')}
        ctaHref="/quote-request"
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t('categoriesTitle')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t('intro1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('intro2')}
            </p>
          </motion.div>
        </section>

        {/* Equipment Categories */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">{t('categoriesTitle')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('categoriesSubtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {equipmentCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image}
                        alt={category.title[locale as 'en' | 'ar']}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Icon className="h-8 w-8 text-primary mb-3" />
                      <CardTitle className="text-xl">{category.title[locale as 'en' | 'ar']}</CardTitle>
                      <CardDescription>{category.description[locale as 'en' | 'ar']}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {feature[locale as 'en' | 'ar']}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full group">
                        <Link href={category.href}>
                          {tCommon('viewDetails')}
                          <ArrowRight className="h-4 w-4 ms-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl">{t('additionalServicesTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('deliverySetup')}</h3>
                    <p className="text-muted-foreground">
                      {t('deliverySetupDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('takedownPickup')}</h3>
                    <p className="text-muted-foreground">
                      {t('takedownPickupDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('support247')}</h3>
                    <p className="text-muted-foreground">
                      {t('support247Desc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{t('qualityGuarantee')}</h3>
                    <p className="text-muted-foreground">
                      {t('qualityGuaranteeDesc')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Share Buttons */}
        <div className="flex justify-center mb-12">
          <ShareButtons />
        </div>
      </div>

      {/* CTA Section */}
      <CTASection
        title={t('ctaTitle')}
        subtitle={t('ctaSubtitle')}
        ctaText={tCommon('getStarted')}
        ctaHref="/quote-request"
      />
    </>
  );
}

