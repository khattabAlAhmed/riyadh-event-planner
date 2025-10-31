export interface PortfolioItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  type: 'wedding' | 'birthday' | 'exhibition' | 'conference' | 'corporate';
  date: string;
  description: {
    en: string;
    ar: string;
  };
  image: string;
  images?: string[];
  location?: string;
  attendees?: number;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: {
      en: 'Luxury Wedding Celebration',
      ar: 'احتفال زفاف فاخر',
    },
    type: 'wedding',
    date: '2024-01-10',
    description: {
      en: 'A grand wedding celebration with 500 guests featuring elegant European tent setup and stunning decorations.',
      ar: 'احتفال زفاف كبير مع 500 ضيف يضم إعداد خيمة أوروبية أنيقة وديكورات مذهلة.',
    },
    image: '/placeholder-portfolio-1.jpg',
    images: ['/placeholder-portfolio-1-1.jpg', '/placeholder-portfolio-1-2.jpg'],
    location: 'Riyadh',
    attendees: 500,
  },
  {
    id: '2',
    title: {
      en: 'Corporate Product Launch',
      ar: 'إطلاق منتج شركة',
    },
    type: 'corporate',
    date: '2024-01-05',
    description: {
      en: 'Professional product launch event with modern stage setup and interactive displays.',
      ar: 'حدث إطلاق منتج احترافي مع إعداد مسرح حديث وعروض تفاعلية.',
    },
    image: '/placeholder-portfolio-2.jpg',
    location: 'Riyadh',
    attendees: 300,
  },
  {
    id: '3',
    title: {
      en: 'International Trade Exhibition',
      ar: 'معرض تجاري دولي',
    },
    type: 'exhibition',
    date: '2023-12-15',
    description: {
      en: 'Large-scale trade exhibition with 100+ exhibitors and comprehensive event management.',
      ar: 'معرض تجاري واسع النطاق مع أكثر من 100 عارض وإدارة فعاليات شاملة.',
    },
    image: '/placeholder-portfolio-3.jpg',
    location: 'Riyadh',
    attendees: 5000,
  },
  {
    id: '4',
    title: {
      en: 'Children\'s Birthday Party',
      ar: 'حفلة عيد ميلاد أطفال',
    },
    type: 'birthday',
    date: '2023-12-10',
    description: {
      en: 'Colorful and fun children\'s birthday party with themed decorations and entertainment.',
      ar: 'حفلة عيد ميلاد أطفال ملونة وممتعة مع ديكورات ثيمية وترفيه.',
    },
    image: '/placeholder-portfolio-4.jpg',
    location: 'Riyadh',
    attendees: 50,
  },
  {
    id: '5',
    title: {
      en: 'Academic Conference',
      ar: 'مؤتمر أكاديمي',
    },
    type: 'conference',
    date: '2023-11-20',
    description: {
      en: 'Professional academic conference with multiple sessions and keynote speakers.',
      ar: 'مؤتمر أكاديمي احترافي مع جلسات متعددة ومتحدثين رئيسيين.',
    },
    image: '/placeholder-portfolio-5.jpg',
    location: 'Riyadh',
    attendees: 400,
  },
  {
    id: '6',
    title: {
      en: 'Elegant Wedding Reception',
      ar: 'استقبال زفاف أنيق',
    },
    type: 'wedding',
    date: '2023-11-15',
    description: {
      en: 'Intimate wedding reception with sophisticated decoration and premium catering.',
      ar: 'استقبال زفاف حميم مع ديكور متطور وتقديم راقي.',
    },
    image: '/placeholder-portfolio-6.jpg',
    location: 'Riyadh',
    attendees: 200,
  },
  {
    id: '7',
    title: {
      en: 'Tech Innovation Summit',
      ar: 'قمة الابتكار التقني',
    },
    type: 'conference',
    date: '2023-10-25',
    description: {
      en: 'Technology innovation summit with cutting-edge presentation setup and networking areas.',
      ar: 'قمة الابتكار التقني مع إعداد عرض متقدم ومناطق للتواصل.',
    },
    image: '/placeholder-portfolio-7.jpg',
    location: 'Riyadh',
    attendees: 600,
  },
  {
    id: '8',
    title: {
      en: 'Graduation Ceremony',
      ar: 'حفل تخرج',
    },
    type: 'corporate',
    date: '2023-10-10',
    description: {
      en: 'Grand graduation ceremony with stage setup, lighting, and audio-visual equipment.',
      ar: 'حفل تخرج كبير مع إعداد المسرح والإضاءة ومعدات الصوت والصورة.',
    },
    image: '/placeholder-portfolio-8.jpg',
    location: 'Riyadh',
    attendees: 800,
  },
  {
    id: '9',
    title: {
      en: 'Fashion Show Event',
      ar: 'عرض أزياء',
    },
    type: 'corporate',
    date: '2023-09-30',
    description: {
      en: 'High-end fashion show with professional runway setup and lighting design.',
      ar: 'عرض أزياء راقي مع إعداد منصة احترافية وتصميم إضاءة.',
    },
    image: '/placeholder-portfolio-9.jpg',
    location: 'Riyadh',
    attendees: 250,
  },
  {
    id: '10',
    title: {
      en: 'Family Celebration',
      ar: 'احتفال عائلي',
    },
    type: 'birthday',
    date: '2023-09-15',
    description: {
      en: 'Large family celebration with traditional decorations and cultural elements.',
      ar: 'احتفال عائلي كبير مع ديكورات تقليدية وعناصر ثقافية.',
    },
    image: '/placeholder-portfolio-10.jpg',
    location: 'Riyadh',
    attendees: 150,
  },
  {
    id: '11',
    title: {
      en: 'Business Networking Event',
      ar: 'فعالية شبكات الأعمال',
    },
    type: 'corporate',
    date: '2023-08-20',
    description: {
      en: 'Exclusive business networking event with elegant setup and premium amenities.',
      ar: 'فعالية شبكات أعمال حصرية مع إعداد أنيق ومرافق راقية.',
    },
    image: '/placeholder-portfolio-11.jpg',
    location: 'Riyadh',
    attendees: 180,
  },
  {
    id: '12',
    title: {
      en: 'Wedding with Outdoor Setup',
      ar: 'زفاف مع إعداد خارجي',
    },
    type: 'wedding',
    date: '2023-08-05',
    description: {
      en: 'Beautiful outdoor wedding with European tent and garden decorations.',
      ar: 'زفاف خارجي جميل مع خيمة أوروبية وديكورات حديقة.',
    },
    image: '/placeholder-portfolio-12.jpg',
    location: 'Riyadh',
    attendees: 350,
  },
];

