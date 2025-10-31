export interface TeamMember {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  bio: {
    en: string;
    ar: string;
  };
  image: string;
  email?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: {
      en: 'Omar Al-Rashid',
      ar: 'عمر الراشد',
    },
    role: {
      en: 'Founder & CEO',
      ar: 'المؤسس والرئيس التنفيذي',
    },
    bio: {
      en: 'With over 15 years of experience in event planning, Omar has built Riyadh Event Planner into one of the most trusted event management companies in the region.',
      ar: 'مع أكثر من 15 عاماً من الخبرة في تخطيط الفعاليات، بنى عمر شركة Riyadh Event Planner لتصبح واحدة من أكثر شركات إدارة الفعاليات موثوقية في المنطقة.',
    },
    image: '/placeholder-team-1.jpg',
    email: 'omar@riyadheventplanner.com',
  },
  {
    id: '2',
    name: {
      en: 'Layla Al-Mansouri',
      ar: 'ليلى المنصوري',
    },
    role: {
      en: 'Creative Director',
      ar: 'المدير الإبداعي',
    },
    bio: {
      en: 'Layla brings artistic vision and creative excellence to every event. Her attention to detail and innovative designs have made countless celebrations unforgettable.',
      ar: 'تجلب ليلى الرؤية الفنية والتميز الإبداعي لكل فعالية. اهتمامها بالتفاصيل وتصاميمها المبتكرة جعلت الاحتفالات لا تعد ولا تحصى لا تُنسى.',
    },
    image: '/placeholder-team-2.jpg',
    email: 'layla@riyadheventplanner.com',
  },
  {
    id: '3',
    name: {
      en: 'Khalid Al-Fahad',
      ar: 'خالد الفهد',
    },
    role: {
      en: 'Operations Manager',
      ar: 'مدير العمليات',
    },
    bio: {
      en: 'Khalid ensures smooth execution of every event with his exceptional organizational skills and ability to coordinate multiple vendors seamlessly.',
      ar: 'يضمن خالد التنفيذ السلس لكل فعالية بمهاراته التنظيمية الاستثنائية وقدرته على تنسيق العديد من الموردين بسلاسة.',
    },
    image: '/placeholder-team-3.jpg',
    email: 'khalid@riyadheventplanner.com',
  },
  {
    id: '4',
    name: {
      en: 'Aisha Al-Zahrani',
      ar: 'عائشة الزهراني',
    },
    role: {
      en: 'Client Relations Manager',
      ar: 'مدير علاقات العملاء',
    },
    bio: {
      en: 'Aisha is the first point of contact for our clients, ensuring they feel heard and understood throughout the planning process.',
      ar: 'عائشة هي نقطة الاتصال الأولى لعملائنا، مما يضمن شعورهم بالاستماع والفهم طوال عملية التخطيط.',
    },
    image: '/placeholder-team-4.jpg',
    email: 'aisha@riyadheventplanner.com',
  },
];

