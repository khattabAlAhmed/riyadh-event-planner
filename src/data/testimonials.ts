export interface Testimonial {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  role?: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  rating: number;
  image?: string;
  eventType?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: {
      en: 'Ahmed Al-Mansouri',
      ar: 'أحمد المنصوري',
    },
    role: {
      en: 'Wedding Client',
      ar: 'عميل زفاف',
    },
    content: {
      en: 'Outstanding service from start to finish! They made our wedding day absolutely perfect. The attention to detail and professionalism exceeded our expectations.',
      ar: 'خدمة متميزة من البداية للنهاية! جعلوا يوم زفافنا مثالياً تماماً. الاهتمام بالتفاصيل والاحترافية تجاوزت توقعاتنا.',
    },
    rating: 5,
    image: 'https://static.vecteezy.com/system/resources/previews/063/477/597/non_2x/minimalist-illustration-of-a-faceless-male-avatar-defoult-photo-placeholder-wearing-a-hoodie-on-a-light-gray-background-ideal-for-profile-pictures-and-online-anonymity-themes-vector.jpg',
    eventType: 'wedding',
  },
  {
    id: '2',
    name: {
      en: 'Sarah Al-Fahad',
      ar: 'سارة الفهد',
    },
    role: {
      en: 'Corporate Event Organizer',
      ar: 'منظم فعاليات مؤسسية',
    },
    content: {
      en: 'We hired them for our annual conference and couldn\'t be happier. Everything was perfectly organized, and they handled all the technical aspects flawlessly.',
      ar: 'استأجرناهم لمؤتمرنا السنوي ولم نكن أسعد. كان كل شيء منظماً بشكل مثالي، وتولوا جميع الجوانب التقنية بلا عيوب.',
    },
    rating: 5,
    image: 'https://static.vecteezy.com/system/resources/previews/063/477/597/non_2x/minimalist-illustration-of-a-faceless-male-avatar-defoult-photo-placeholder-wearing-a-hoodie-on-a-light-gray-background-ideal-for-profile-pictures-and-online-anonymity-themes-vector.jpg',
    eventType: 'conference',
  },
  {
    id: '3',
    name: {
      en: 'Mohammed Al-Rashid',
      ar: 'محمد الراشد',
    },
    role: {
      en: 'Birthday Party Client',
      ar: 'عميل حفلة عيد ميلاد',
    },
    content: {
      en: 'My daughter\'s birthday party was magical! The decorations were beautiful, and the team was so patient with the children. Highly recommended!',
      ar: 'كانت حفلة عيد ميلاد ابنتي سحرية! كانت الديكورات جميلة، وكان الفريق صبوراً جداً مع الأطفال. أنصح بهم بشدة!',
    },
    rating: 5,
    image: 'https://static.vecteezy.com/system/resources/previews/063/477/597/non_2x/minimalist-illustration-of-a-faceless-male-avatar-defoult-photo-placeholder-wearing-a-hoodie-on-a-light-gray-background-ideal-for-profile-pictures-and-online-anonymity-themes-vector.jpg',
    eventType: 'birthday',
  },
  {
    id: '4',
    name: {
      en: 'Fatima Al-Zahrani',
      ar: 'فاطمة الزهراني',
    },
    role: {
      en: 'Exhibition Organizer',
      ar: 'منظم معرض',
    },
    content: {
      en: 'Professional, reliable, and creative. They transformed our trade exhibition into a memorable experience. The tent setup was impressive!',
      ar: 'احترافي وموثوق وإبداعي. حولوا معرضنا التجاري إلى تجربة لا تُنسى. كان إعداد الخيمة مثيراً للإعجاب!',
    },
    rating: 5,
    image: 'https://static.vecteezy.com/system/resources/previews/063/477/597/non_2x/minimalist-illustration-of-a-faceless-male-avatar-defoult-photo-placeholder-wearing-a-hoodie-on-a-light-gray-background-ideal-for-profile-pictures-and-online-anonymity-themes-vector.jpg',
    eventType: 'exhibition',
  },
  {
    id: '5',
    name: {
      en: 'Khalid Al-Otaibi',
      ar: 'خالد العتيبي',
    },
    role: {
      en: 'Graduation Ceremony Client',
      ar: 'عميل حفل تخرج',
    },
    content: {
      en: 'The graduation ceremony was flawless. From the stage setup to the sound system, everything was perfect. Thank you for making it special!',
      ar: 'كان حفل التخرج بلا عيوب. من إعداد المسرح إلى نظام الصوت، كان كل شيء مثالياً. شكراً لكم لجعله مميزاً!',
    },
    rating: 5,
    image: 'https://static.vecteezy.com/system/resources/previews/063/477/597/non_2x/minimalist-illustration-of-a-faceless-male-avatar-defoult-photo-placeholder-wearing-a-hoodie-on-a-light-gray-background-ideal-for-profile-pictures-and-online-anonymity-themes-vector.jpg',
    eventType: 'corporate',
  },
  {
    id: '6',
    name: {
      en: 'Noura Al-Saud',
      ar: 'نورة آل سعود',
    },
    role: {
      en: 'Wedding Client',
      ar: 'عميل زفاف',
    },
    content: {
      en: 'Exceptional service! They handled every detail with care and made our special day unforgettable. The team was responsive and professional throughout.',
      ar: 'خدمة استثنائية! تعاملوا مع كل تفصيل بعناية وجعلوا يومنا الخاص لا يُنسى. كان الفريق متجاوباً واحترافياً طوال الوقت.',
    },
    rating: 5,
    image: 'https://static.vecteezy.com/system/resources/previews/063/477/597/non_2x/minimalist-illustration-of-a-faceless-male-avatar-defoult-photo-placeholder-wearing-a-hoodie-on-a-light-gray-background-ideal-for-profile-pictures-and-online-anonymity-themes-vector.jpg',
    eventType: 'wedding',
  },
];

