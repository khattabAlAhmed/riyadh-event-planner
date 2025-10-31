export interface FAQItem {
  id: string;
  category: 'services' | 'pricing' | 'booking' | 'equipment';
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    category: 'services',
    question: {
      en: 'What services do you offer?',
      ar: 'ما هي الخدمات التي تقدمونها؟',
    },
    answer: {
      en: 'We offer comprehensive event planning services including weddings, birthdays, graduations, trade exhibitions, conferences, and corporate events. We also provide equipment rental services such as tents, furniture, audio-visual equipment, and decorations.',
      ar: 'نقدم خدمات تخطيط فعاليات شاملة تشمل حفلات الزفاف وأعياد الميلاد والتخرج والمعارض التجارية والمؤتمرات والفعاليات المؤسسية. نوفر أيضاً خدمات تأجير المعدات مثل الخيام والأثاث ومعدات الصوت والصورة والديكورات.',
    },
  },
  {
    id: '2',
    category: 'services',
    question: {
      en: 'Do you cover areas outside Riyadh?',
      ar: 'هل تغطون مناطق خارج الرياض؟',
    },
    answer: {
      en: 'Yes, we provide services throughout Saudi Arabia. However, additional travel and setup fees may apply for events outside Riyadh. Please contact us for a customized quote.',
      ar: 'نعم، نقدم الخدمات في جميع أنحاء المملكة العربية السعودية. ومع ذلك، قد تنطبق رسوم سفر وإعداد إضافية للفعاليات خارج الرياض. يرجى الاتصال بنا للحصول على عرض سعر مخصص.',
    },
  },
  {
    id: '3',
    category: 'services',
    question: {
      en: 'How long does it take to organize a wedding?',
      ar: 'كم يستغرق تنظيم حفل زفاف؟',
    },
    answer: {
      en: 'We recommend starting wedding planning at least 6-12 months in advance. However, we can work with shorter timelines depending on availability. The more time we have, the better we can accommodate your preferences and secure your preferred vendors.',
      ar: 'نوصي بالبدء في تخطيط الزفاف قبل 6-12 شهراً على الأقل. ومع ذلك، يمكننا العمل مع جداول زمنية أقصر حسب التوفر. كلما كان لدينا وقت أكثر، كان بإمكاننا استيعاب تفضيلاتك وتأمين مورديك المفضلين بشكل أفضل.',
    },
  },
  {
    id: '4',
    category: 'pricing',
    question: {
      en: 'How are prices calculated?',
      ar: 'كيف يتم حساب الأسعار؟',
    },
    answer: {
      en: 'Pricing depends on several factors including event type, number of guests, venue requirements, equipment needs, and services requested. We provide detailed quotes after understanding your specific requirements. Contact us for a free consultation and quote.',
      ar: 'يعتمد التسعير على عدة عوامل بما في ذلك نوع الفعالية وعدد الضيوف ومتطلبات المكان واحتياجات المعدات والخدمات المطلوبة. نقدم عروض أسعار مفصلة بعد فهم متطلباتك المحددة. اتصل بنا للحصول على استشارة مجانية وعرض سعر.',
    },
  },
  {
    id: '5',
    category: 'pricing',
    question: {
      en: 'Are there special offers and packages?',
      ar: 'هل توجد عروض وباقات خاصة؟',
    },
    answer: {
      en: 'Yes, we offer various packages for different event types. We also have seasonal promotions and discounts for early bookings. Please contact us to learn about current offers and customize a package that fits your needs and budget.',
      ar: 'نعم، نقدم باقات مختلفة لأنواع الفعاليات المختلفة. لدينا أيضاً عروض موسمية وخصومات للحجوزات المبكرة. يرجى الاتصال بنا لمعرفة العروض الحالية وتخصيص باقة تناسب احتياجاتك وميزانيتك.',
    },
  },
  {
    id: '6',
    category: 'pricing',
    question: {
      en: 'What payment methods are available?',
      ar: 'ما هي طرق الدفع المتاحة؟',
    },
    answer: {
      en: 'We accept various payment methods including bank transfers, credit cards, and cash. Payment terms are typically 50% deposit upon booking and 50% before the event. Specific terms can be discussed during consultation.',
      ar: 'نقبل طرق دفع مختلفة بما في ذلك التحويلات المصرفية وبطاقات الائتمان والنقد. شروط الدفع عادة 50% دفعة مقدمة عند الحجز و 50% قبل الفعالية. يمكن مناقشة الشروط المحددة أثناء الاستشارة.',
    },
  },
  {
    id: '7',
    category: 'booking',
    question: {
      en: 'When should I book?',
      ar: 'متى يجب أن أحجز؟',
    },
    answer: {
      en: 'We recommend booking as early as possible, especially for popular dates and peak seasons. For weddings, book 6-12 months in advance. For other events, 2-3 months notice is usually sufficient, but earlier booking ensures better availability.',
      ar: 'نوصي بالحجز في أقرب وقت ممكن، خاصة للتواريخ الشائعة وموسم الذروة. للزفاف، احجز قبل 6-12 شهراً. للفعاليات الأخرى، إشعار 2-3 أشهر عادة ما يكون كافياً، لكن الحجز المبكر يضمن توفراً أفضل.',
    },
  },
  {
    id: '8',
    category: 'booking',
    question: {
      en: 'What is the cancellation policy?',
      ar: 'ما هي سياسة الإلغاء؟',
    },
    answer: {
      en: 'Cancellation policies vary depending on the event type and timing. Generally, cancellations made more than 30 days before the event receive a partial refund. Cancellations within 30 days may incur fees. Details will be provided in your contract.',
      ar: 'تختلف سياسات الإلغاء حسب نوع الفعالية والتوقيت. بشكل عام، الإلغاءات التي تتم قبل أكثر من 30 يوماً من الفعالية تحصل على استرداد جزئي. قد تترتب رسوم على الإلغاءات خلال 30 يوماً. سيتم توفير التفاصيل في عقدك.',
    },
  },
  {
    id: '9',
    category: 'booking',
    question: {
      en: 'Can I change details after booking?',
      ar: 'هل يمكنني تغيير التفاصيل بعد الحجز؟',
    },
    answer: {
      en: 'Yes, changes can be made, but please inform us as soon as possible. Minor changes can usually be accommodated. Significant changes may affect pricing and availability. We recommend finalizing major details at least 2 weeks before the event.',
      ar: 'نعم، يمكن إجراء التغييرات، لكن يرجى إعلامنا في أقرب وقت ممكن. عادة ما يمكن استيعاب التغييرات الطفيفة. قد تؤثر التغييرات الكبيرة على التسعير والتوفر. نوصي بإتمام التفاصيل الرئيسية قبل أسبوعين على الأقل من الفعالية.',
    },
  },
  {
    id: '10',
    category: 'equipment',
    question: {
      en: 'Are the equipment new and clean?',
      ar: 'هل المعدات جديدة ونظيفة؟',
    },
    answer: {
      en: 'Yes, we maintain high standards for all our equipment. All items are thoroughly cleaned and sanitized before each event. We regularly update our inventory with new equipment to ensure quality and reliability.',
      ar: 'نعم، نحافظ على معايير عالية لجميع معداتنا. يتم تنظيف وتعقيم جميع العناصر بشكل شامل قبل كل فعالية. نقوم بتحديث مخزوننا بانتظام بمعدات جديدة لضمان الجودة والموثوقية.',
    },
  },
  {
    id: '11',
    category: 'equipment',
    question: {
      en: 'Who installs the equipment?',
      ar: 'من يقوم بتركيب المعدات؟',
    },
    answer: {
      en: 'Our professional team handles all equipment installation and setup. We take care of delivery, installation, and removal. Our technicians ensure everything is properly set up and tested before your event begins.',
      ar: 'يتولى فريقنا المحترف جميع أعمال تركيب المعدات والإعداد. نهتم بالتسليم والتركيب والإزالة. يضمن فنيونا إعداد واختبار كل شيء بشكل صحيح قبل بدء فعاليتك.',
    },
  },
  {
    id: '12',
    category: 'equipment',
    question: {
      en: 'What happens if there\'s a malfunction?',
      ar: 'ماذا يحدث في حالة حدوث عطل؟',
    },
    answer: {
      en: 'We have backup equipment available and our technical team is on standby during events to handle any issues immediately. We also conduct thorough testing before events to minimize the risk of malfunctions.',
      ar: 'لدينا معدات احتياطية متاحة وفريقنا التقني في حالة استعداد أثناء الفعاليات للتعامل مع أي مشاكل على الفور. نقوم أيضاً بإجراء اختبارات شاملة قبل الفعاليات لتقليل مخاطر الأعطال.',
    },
  },
];

