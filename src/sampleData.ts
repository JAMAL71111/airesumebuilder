import type { ResumeData } from './types';

export const emptyResume: ResumeData = {
  personal: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
  },
  summary: '',
  experience: [],
  projects: [],
  education: [],
  certifications: [],
  skills: [],
};

export const sampleResume: ResumeData = {
  personal: {
    fullName: 'Avery Chen',
    title: 'Senior Product Designer',
    email: 'avery.chen@email.com',
    phone: '(415) 555-0182',
    location: 'San Francisco, CA',
    website: 'averychen.design',
    linkedin: 'linkedin.com/in/averychen',
    github: 'github.com/averychen',
  },
  summary:
    'Senior Product Designer with 8+ years crafting intuitive, accessible B2B and consumer products. I pair systems thinking with hands-on prototyping to ship cohesive end-to-end experiences, and have led design for two products from zero to 1M+ users.',
  experience: [
    {
      id: 'exp1',
      role: 'Senior Product Designer',
      company: 'Northwind Labs',
      location: 'San Francisco, CA',
      startDate: '2021-03',
      endDate: '',
      current: true,
      bullets: [
        'Led the redesign of the core analytics workspace, reducing time-to-insight by 38% across 12,000 active teams.',
        'Built and maintained the company design system, cutting new-feature handoff time by 45%.',
        'Mentored 4 designers and established a weekly critique practice adopted org-wide.',
      ],
    },
    {
      id: 'exp2',
      role: 'Product Designer',
      company: 'Lumen Health',
      location: 'Remote',
      startDate: '2017-06',
      endDate: '2021-02',
      current: false,
      bullets: [
        'Designed the patient onboarding flow used by 200k+ users, lifting activation by 27%.',
        'Partnered with research to run 40+ usability sessions, translating findings into a prioritized roadmap.',
      ],
    },
  ],
  projects: [
    {
      id: 'proj1',
      name: 'Atlas Design Tokens',
      description:
        'Open-source token pipeline that syncs Figma variables with code, adopted by 30+ teams.',
      link: 'github.com/averychen/atlas-tokens',
      tech: ['Figma API', 'TypeScript', 'Style Dictionary'],
    },
    {
      id: 'proj2',
      name: 'Pace — Running Coach',
      description:
        'Concept app that turns wearable data into adaptive training plans with a friendly, encouraging tone.',
      link: 'averychen.design/pace',
      tech: ['React Native', 'Reanimated', 'HealthKit'],
    },
  ],
  education: [
    {
      id: 'edu1',
      degree: 'B.F.A. Interaction Design',
      school: 'California College of the Arts',
      location: 'San Francisco, CA',
      startDate: '2013',
      endDate: '2017',
      current: false,
      details: 'Graduated with honors. Senior thesis on accessible form patterns.',
    },
  ],
  certifications: [
    {
      id: 'cert1',
      name: 'Nielsen Norman UX Certification',
      issuer: 'NN/g',
      date: '2022',
      link: '',
    },
  ],
  skills: [
    { id: 'sk1', name: 'Product Design', level: 5 },
    { id: 'sk2', name: 'Design Systems', level: 5 },
    { id: 'sk3', name: 'Prototyping', level: 4 },
    { id: 'sk4', name: 'User Research', level: 4 },
    { id: 'sk5', name: 'Figma', level: 5 },
    { id: 'sk6', name: 'Accessibility', level: 4 },
    { id: 'sk7', name: 'Motion Design', level: 3 },
    { id: 'sk8', name: 'HTML & CSS', level: 4 },
  ],
};

export const sampleResumeAr: ResumeData = {
  personal: {
    fullName: 'أحمد العبدالله',
    title: 'مصمم منتجات أول',
    email: 'ahmed@email.com',
    phone: '+966 55 123 4567',
    location: 'الرياض، السعودية',
    website: 'ahmed.design',
    linkedin: 'linkedin.com/in/ahmed',
    github: 'github.com/ahmed',
  },
  summary:
    'مصمم منتجات أول بخبرة تتجاوز ٨ سنوات في تصميم منتجات B2B وخدمات للمستهلك بسهولة وصول عالية. أجمع بين التفكير المنظومي والنماذج الأولية العملية لتقديم تجارب متماسكة من البداية إلى النهاية، وقد قُدت تصميم منتجين من الصفر إلى أكثر من مليون مستخدم.',
  experience: [
    {
      id: 'exp1',
      role: 'مصمم منتجات أول',
      company: 'شركة الشمال',
      location: 'الرياض، السعودية',
      startDate: '2021-03',
      endDate: '',
      current: true,
      bullets: [
        'قُدت إعادة تصميم مساحة التحليلات الأساسية، مما قلّل وقت الوصول إلى الرؤى بنسبة ٣٨٪ عبر ١٢٬٠٠٠ فريق نشط.',
        'بنيت وصممت نظام التصميم الخاص بالشركة، مما قلّل وقت تسليم الميزات الجديدة بنسبة ٤٥٪.',
        'أرشدت ٤ مصممين وأنشأت ممارسة نقد أسبوعية تُبنّت على مستوى المؤسسة.',
      ],
    },
    {
      id: 'exp2',
      role: 'مصمم منتجات',
      company: 'صحة النور',
      location: 'عن بُعد',
      startDate: '2017-06',
      endDate: '2021-02',
      current: false,
      bullets: [
        'صممت مسار تسجيل المرضى الذي استخدمه أكثر من ٢٠٠ ألف مستخدم، مما رفع التفعيل بنسبة ٢٧٪.',
        'تعاونت مع فريق الأبحاث لإجراء أكثر من ٤٠ جلسة قابلية استخدام، وترجمة النتائج إلى خارطة طريق ذات أولويات.',
      ],
    },
  ],
  projects: [
    {
      id: 'proj1',
      name: 'نظام تصميم أطلس',
      description:
        'خط أنابيب مفتوح المصدر يزامن متغيرات Figma مع الكود، تبنّاه أكثر من ٣٠ فريقاً.',
      link: 'github.com/ahmed/atlas-tokens',
      tech: ['Figma API', 'TypeScript', 'Style Dictionary'],
    },
    {
      id: 'proj2',
      name: ' Pace — مدرب الجري',
      description:
        'تطبيق مفاهيمي يحوّل بيانات الأجهزة القابلة للارتداء إلى خطط تدريب تكيّفية بنبرة ودودة ومشجعة.',
      link: 'ahmed.design/pace',
      tech: ['React Native', 'Reanimated', 'HealthKit'],
    },
  ],
  education: [
    {
      id: 'edu1',
      degree: 'بكالوريوس تصميم التفاعل',
      school: 'جامعة الملك سعود',
      location: 'الرياض، السعودية',
      startDate: '2013',
      endDate: '2017',
      current: false,
      details: 'تخرجت بتقدير امتياز. مشروع التخرج عن أنماط النماذج سهلة الوصول.',
    },
  ],
  certifications: [
    {
      id: 'cert1',
      name: 'شهادة تجربة المستخدم',
      issuer: 'NN/g',
      date: '2022',
      link: '',
    },
  ],
  skills: [
    { id: 'sk1', name: 'تصميم المنتجات', level: 5 },
    { id: 'sk2', name: 'أنظمة التصميم', level: 5 },
    { id: 'sk3', name: 'النماذج الأولية', level: 4 },
    { id: 'sk4', name: 'بحث المستخدم', level: 4 },
    { id: 'sk5', name: 'Figma', level: 5 },
    { id: 'sk6', name: 'سهولة الوصول', level: 4 },
    { id: 'sk7', name: 'تصميم الحركة', level: 3 },
    { id: 'sk8', name: 'HTML و CSS', level: 4 },
  ],
};
