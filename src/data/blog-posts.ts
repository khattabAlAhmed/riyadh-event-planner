export interface BlogPost {
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  image: string;
  date: string;
  readTime: number;
  category: 'weddings' | 'tips' | 'equipment' | 'planning';
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'comprehensive-guide-successful-wedding-riyadh',
    title: {
      en: 'Comprehensive Guide to Organizing a Successful Wedding in Riyadh',
      ar: 'دليل شامل لتنظيم حفل زفاف ناجح في الرياض',
    },
    excerpt: {
      en: 'Discover everything you need to know about planning the perfect wedding in Riyadh, from venue selection to decoration.',
      ar: 'اكتشف كل ما تحتاج معرفته حول تخطيط حفل زفاف مثالي في الرياض، من اختيار القاعة إلى الديكور.',
    },
    content: {
      en: `
        <h2>Introduction</h2>
        <p>Planning a wedding in Riyadh requires careful attention to detail and understanding of local customs and traditions. This comprehensive guide will walk you through every step of the process.</p>
        
        <h2>Choosing the Perfect Venue</h2>
        <p>The venue sets the tone for your entire wedding. Consider factors such as capacity, location, parking availability, and accessibility for your guests.</p>
        
        <h2>Decoration and Design</h2>
        <p>Work with professional decorators to create a cohesive theme that reflects your personal style while respecting cultural traditions.</p>
        
        <h2>Timeline Planning</h2>
        <p>Start planning at least 6-12 months in advance. Create a detailed timeline that includes venue booking, vendor selection, and final preparations.</p>
        
        <h2>Key Vendors</h2>
        <p>Select reliable vendors for photography, catering, music, and other essential services. Always check reviews and request portfolios.</p>
        
        <h2>Conclusion</h2>
        <p>With proper planning and the right team, your wedding in Riyadh can be a truly memorable event. Don't hesitate to reach out to professional event planners for assistance.</p>
      `,
      ar: `
        <h2>مقدمة</h2>
        <p>تخطيط حفل زفاف في الرياض يتطلب اهتماماً دقيقاً بالتفاصيل وفهماً للعادات والتقاليد المحلية. سيرشدك هذا الدليل الشامل عبر كل خطوة من العملية.</p>
        
        <h2>اختيار القاعة المثالية</h2>
        <p>القاعة تحدد نغمة حفل الزفاف بالكامل. ضع في اعتبارك عوامل مثل السعة والموقع وتوفر مواقف السيارات وإمكانية الوصول للضيوف.</p>
        
        <h2>الديكور والتصميم</h2>
        <p>اعمل مع مصممي ديكور محترفين لإنشاء ثيم متكامل يعكس أسلوبك الشخصي مع احترام التقاليد الثقافية.</p>
        
        <h2>التخطيط الزمني</h2>
        <p>ابدأ التخطيط قبل 6-12 شهراً على الأقل. أنشئ جدولاً زمنياً مفصلاً يتضمن حجز القاعة واختيار الموردين والتحضيرات النهائية.</p>
        
        <h2>تاريخ الفعالية</h2>
        <p>اختر موردين موثوقين للتصوير والتقديم والموسيقى والخدمات الأساسية الأخرى. تحقق دائماً من المراجعات واطلب المعارض.</p>
        
        <h2>الخلاصة</h2>
        <p>مع التخطيط المناسب والفريق الصحيح، يمكن أن يكون حفل زفافك في الرياض حدثاً لا يُنسى حقاً. لا تتردد في التواصل مع منظمي الفعاليات المحترفين للحصول على المساعدة.</p>
      `,
    },
    image: '/placeholder-wedding.jpg',
    date: '2024-01-15',
    readTime: 8,
    category: 'weddings',
  },
  {
    slug: 'best-european-tents-weddings',
    title: {
      en: 'Best Types of European Tents for Weddings',
      ar: 'أفضل أنواع الخيام الأوروبية لحفلات الزفاف',
    },
    excerpt: {
      en: 'Explore the different types of European tents available for rent and find the perfect one for your wedding celebration.',
      ar: 'استكشف أنواع الخيام الأوروبية المختلفة المتاحة للإيجار وابحث عن الخيمة المثالية لحفل زفافك.',
    },
    content: {
      en: `
        <h2>Introduction</h2>
        <p>European tents offer elegance and functionality for outdoor wedding celebrations. Here's a guide to the best options available.</p>
        
        <h2>Pyramid Tents</h2>
        <p>Perfect for luxury weddings, pyramid tents feature elegant design and excellent weather resistance.</p>
        
        <h2>Clear Span Tents</h2>
        <p>These transparent tents provide stunning views of the sky while protecting guests from the elements.</p>
        
        <h2>Arcum Tents</h2>
        <p>Arcum tents offer flowing, elegant designs perfect for large wedding celebrations.</p>
        
        <h2>Choosing the Right Tent</h2>
        <p>Consider your guest count, venue space, and aesthetic preferences when selecting a tent.</p>
      `,
      ar: `
        <h2>مقدمة</h2>
        <p>تقدم الخيام الأوروبية الأناقة والوظائف لحفلات الزفاف الخارجية. إليك دليل لأفضل الخيارات المتاحة.</p>
        
        <h2>الخيام الهرمية</h2>
        <p>مثالية لحفلات الزفاف الفاخرة، تتميز الخيام الهرمية بتصميم أنيق ومقاومة ممتازة للطقس.</p>
        
        <h2>الخيام الشفافة</h2>
        <p>توفر هذه الخيام الشفافة إطلالات رائعة على السماء مع حماية الضيوف من العوامل الجوية.</p>
        
        <h2>خيام الأركوم</h2>
        <p>تقدم خيام الأركوم تصاميم انسيابية وأنيقة مثالية لحفلات الزفاف الكبيرة.</p>
        
        <h2>اختيار الخيمة المناسبة</h2>
        <p>ضع في اعتبارك عدد الضيوف ومساحة المكان وتفضيلاتك الجمالية عند اختيار الخيمة.</p>
      `,
    },
    image: '/placeholder-tent.jpg',
    date: '2024-01-10',
    readTime: 6,
    category: 'equipment',
  },
  {
    slug: 'choose-perfect-graduation-decoration',
    title: {
      en: 'How to Choose the Perfect Decoration for Your Graduation Party',
      ar: 'كيف تختار الديكور المناسب لحفل التخرج',
    },
    excerpt: {
      en: 'Make your graduation party memorable with the right decoration choices. Learn about color schemes, themes, and setup tips.',
      ar: 'اجعل حفل تخرجك لا يُنسى مع خيارات الديكور المناسبة. تعرف على أنظمة الألوان والثيمات ونصائح الإعداد.',
    },
    content: {
      en: `
        <h2>Introduction</h2>
        <p>Graduation parties are milestone celebrations that deserve special attention to decoration and atmosphere.</p>
        
        <h2>Color Schemes</h2>
        <p>Choose colors that reflect your school colors or create a sophisticated palette with gold, navy, or burgundy.</p>
        
        <h2>Theme Ideas</h2>
        <p>Popular themes include academic excellence, future journey, or personalized themes reflecting the graduate's interests.</p>
        
        <h2>Key Decoration Elements</h2>
        <p>Focus on backdrops, centerpieces, lighting, and personalized touches that celebrate the graduate's achievements.</p>
      `,
      ar: `
        <h2>مقدمة</h2>
        <p>حفلات التخرج هي احتفالات مهمة تستحق اهتماماً خاصاً بالديكور والجو.</p>
        
        <h2>أنظمة الألوان</h2>
        <p>اختر ألواناً تعكس ألوان مدرستك أو أنشئ لوحة متطورة بالذهبي أو الأزرق الداكن أو العنابي.</p>
        
        <h2>أفكار الثيمات</h2>
        <p>تشمل الثيمات الشائعة التميز الأكاديمي ورحلة المستقبل أو الثيمات المخصصة التي تعكس اهتمامات الخريج.</p>
        
        <h2>عناصر الديكور الرئيسية</h2>
        <p>ركز على الخلفيات ومراكز الطاولات والإضاءة واللمسات الشخصية التي تحتفل بإنجازات الخريج.</p>
      `,
    },
    image: '/placeholder-graduation.jpg',
    date: '2024-01-05',
    readTime: 5,
    category: 'planning',
  },
  {
    slug: '10-creative-birthday-party-ideas-children',
    title: {
      en: '10 Creative Ideas for Children\'s Birthday Parties',
      ar: '10 أفكار إبداعية لحفلات أعياد الميلاد للأطفال',
    },
    excerpt: {
      en: 'Make your child\'s birthday unforgettable with these creative party ideas that will delight both kids and parents.',
      ar: 'اجعل عيد ميلاد طفلك لا يُنسى مع هذه الأفكار الإبداعية التي سترضي الأطفال والآباء على حد سواء.',
    },
    content: {
      en: `
        <h2>Introduction</h2>
        <p>Children's birthday parties should be fun, engaging, and memorable. Here are 10 creative ideas to inspire your planning.</p>
        
        <h2>1. Superhero Theme</h2>
        <p>Transform your venue into a superhero headquarters with capes, masks, and action-packed activities.</p>
        
        <h2>2. Princess Castle</h2>
        <p>Create a magical princess experience with elegant decorations, royal activities, and crown-making stations.</p>
        
        <h2>3. Space Adventure</h2>
        <p>Take kids on an intergalactic journey with space-themed decorations, astronaut activities, and planet exploration.</p>
        
        <h2>4. Animal Safari</h2>
        <p>Bring the jungle to your party with animal-themed decorations, face painting, and safari adventures.</p>
        
        <h2>5. Science Lab</h2>
        <p>Engage young minds with fun science experiments, lab coats, and interactive demonstrations.</p>
        
        <h2>Conclusion</h2>
        <p>No matter which theme you choose, the key is to keep children engaged and create lasting memories.</p>
      `,
      ar: `
        <h2>مقدمة</h2>
        <p>يجب أن تكون حفلات أعياد ميلاد الأطفال ممتعة وجذابة ولا تُنسى. إليك 10 أفكار إبداعية لإلهام تخطيطك.</p>
        
        <h2>1. ثيم الأبطال الخارقين</h2>
        <p>حول المكان إلى مقر للأبطال الخارقين مع الأردية والأقنعة والأنشطة المليئة بالإثارة.</p>
        
        <h2>2. قلعة الأميرة</h2>
        <p>أنشئ تجربة أميرة سحرية مع ديكورات أنيقة وأنشطة ملكية ومحطات صنع التيجان.</p>
        
        <h2>3. مغامرة الفضاء</h2>
        <p>خذ الأطفال في رحلة بين المجرات مع ديكورات الفضاء وأنشطة رواد الفضاء واستكشاف الكواكب.</p>
        
        <h2>4. سفاري الحيوانات</h2>
        <p>أحضر الغابة إلى حفلتك مع ديكورات الحيوانات والرسم على الوجه ومغامرات السفاري.</p>
        
        <h2>5. مختبر العلوم</h2>
        <p>انشغل العقول الصغيرة مع تجارب علمية ممتعة ومعاطف المختبر وعروض تفاعلية.</p>
        
        <h2>الخلاصة</h2>
        <p>بغض النظر عن الثيم الذي تختاره، المفتاح هو إبقاء الأطفال منشغلين وإنشاء ذكريات دائمة.</p>
      `,
    },
    image: '/placeholder-birthday.jpg',
    date: '2023-12-28',
    readTime: 7,
    category: 'tips',
  },
  {
    slug: 'importance-advance-planning-trade-exhibitions',
    title: {
      en: 'The Importance of Advance Planning for Trade Exhibitions',
      ar: 'أهمية التخطيط المسبق لتنظيم المعارض التجارية',
    },
    excerpt: {
      en: 'Discover why advance planning is crucial for successful trade exhibitions and how it can make or break your event.',
      ar: 'اكتشف لماذا التخطيط المسبق مهم لنجاح المعارض التجارية وكيف يمكن أن يحدد نجاح أو فشل فعاليتك.',
    },
    content: {
      en: `
        <h2>Introduction</h2>
        <p>Trade exhibitions require meticulous planning months in advance to ensure smooth execution and maximum impact.</p>
        
        <h2>Early Planning Benefits</h2>
        <p>Starting early allows you to secure prime venues, negotiate better rates, and have more time for marketing and promotion.</p>
        
        <h2>Key Planning Steps</h2>
        <p>Establish clear objectives, create detailed timelines, select appropriate venues, and coordinate with vendors and exhibitors.</p>
        
        <h2>Budget Planning</h2>
        <p>Develop a comprehensive budget that accounts for venue, equipment, staffing, marketing, and contingency funds.</p>
        
        <h2>Marketing Strategy</h2>
        <p>Create a multi-channel marketing strategy that reaches your target audience through various platforms and media.</p>
        
        <h2>Conclusion</h2>
        <p>Proper advance planning is the foundation of a successful trade exhibition. Start early and stay organized.</p>
      `,
      ar: `
        <h2>مقدمة</h2>
        <p>تتطلب المعارض التجارية تخطيطاً دقيقاً قبل أشهر لضمان التنفيذ السلس والتأثير الأقصى.</p>
        
        <h2>فوائد التخطيط المبكر</h2>
        <p>البدء مبكراً يسمح لك بتأمين الأماكن المميزة والتفاوض على أسعار أفضل والحصول على مزيد من الوقت للتسويق والترويج.</p>
        
        <h2>خطوات التخطيط الرئيسية</h2>
        <p>حدد أهدافاً واضحة، وأنشئ جداول زمنية مفصلة، واختر الأماكن المناسبة، وتنسق مع الموردين والعارضين.</p>
        
        <h2>تخطيط الميزانية</h2>
        <p>طور ميزانية شاملة تأخذ في الاعتبار المكان والمعدات والموظفين والتسويق وصناديق الطوارئ.</p>
        
        <h2>استراتيجية التسويق</h2>
        <p>أنشئ استراتيجية تسويق متعددة القنوات تصل إلى جمهورك المستهدف من خلال منصات ووسائط مختلفة.</p>
        
        <h2>الخلاصة</h2>
        <p>التخطيط المسبق المناسب هو أساس المعرض التجاري الناجح. ابدأ مبكراً وابق من organized.</p>
      `,
    },
    image: '/placeholder-exhibition.jpg',
    date: '2023-12-20',
    readTime: 6,
    category: 'planning',
  },
];

