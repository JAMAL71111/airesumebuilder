const TEMPLATES_EN = [
  (role: string, years: number) =>
    `${role || 'Professional'} with ${years}+ years of experience delivering measurable impact across cross-functional teams. Recognized for translating ambiguous problems into clear, shippable solutions and raising the bar for quality, accessibility, and craft.`,
  (role: string, years: number) =>
    `Results-driven ${role || 'specialist'} with a track record of leading complex initiatives end-to-end. Combines strong analytical thinking with hands-on execution to move metrics that matter, while mentoring teammates and scaling best practices.`,
  (role: string, years: number) =>
    `Versatile ${role || 'professional'} who thrives at the intersection of strategy and craft. ${years}+ years turning research and data into products people love, with a reputation for shipping on time and elevating everyone around them.`,
];

const OPENERS_EN = [
  'Driven by curiosity and a bias toward action, ',
  'Equally comfortable in the weeds and the boardroom, ',
  'A calm, methodical problem-solver, ',
];

const CLOSERS_EN = [
  ' Passionate about building durable systems, not just features.',
  ' Always leaving the codebase — and the team — better than I found it.',
  ' Comfortable owning outcomes from discovery to launch.',
];

const TEMPLATES_AR = [
  (role: string, years: number) =>
    `${role || 'محترف'} بخبرة تتجاوز ${years}+ سنوات في تحقيق تأثير ملموس عبر فرق متعددة التخصصات. معروف بتحويل المشكلات الغامضة إلى حلول واضحة قابلة للتنفيذ ورفع معايير الجودة وسهولة الوصول والإتقان.`,
  (role: string, years: number) =>
    `${role || 'متخصص'} يحرص على النتائج وله سجل حافل بقيادة مبادرات معقدة من البداية إلى النهاية. يجمع بين التفكير التحليلي القوي والتنفيذ الميداني لتحريك المؤشرات المهمة، مع إرشاد الزملاء ونشر أفضل الممارسات.`,
  (role: string, years: number) =>
    `${role || 'محترف'} متعدد المهارات يزدهر عند تقاطع الاستراتيجية والإتقان. ${years}+ سنوات في تحويل الأبحاث والبيانات إلى منتجات يحبها الناس، بسمعة الإطلاق في الوقت المحدد ورفع مستوى كل من حوله.`,
];

const OPENERS_AR = [
  'مدفوع بالفضول والميل إلى الفعل، ',
  'مرتاح في التفاصيل كما في الاجتماعات الكبيرة، ',
  'حالِم ومنهجي في حل المشكلات، ',
];

const CLOSERS_AR = [
  ' شغوف ببناء أنظمة دائمة، لا مجرد ميزات.',
  ' أترك الكود — والفريق — دائماً أفضل مما وجدته.',
  ' مرتاح في تحمّل النتائج من الاكتشاف حتى الإطلاق.',
];

export interface EnhanceInput {
  role: string;
  yearsExperience: number;
  currentText: string;
  lang: 'en' | 'ar';
}

export function enhanceSummary({ role, yearsExperience, currentText, lang }: EnhanceInput): string {
  const years = Math.max(1, yearsExperience || 3);
  const isAr = lang === 'ar';
  const templates = isAr ? TEMPLATES_AR : TEMPLATES_EN;
  const openers = isAr ? OPENERS_AR : OPENERS_EN;
  const closers = isAr ? CLOSERS_AR : CLOSERS_EN;

  const tpl = templates[Math.floor(Math.random() * templates.length)](role, years);
  const opener = openers[Math.floor(Math.random() * openers.length)];
  const closer = closers[Math.floor(Math.random() * closers.length)];

  return currentText.trim()
    ? `${opener}${currentText.trim().replace(/[.؟]$/, '')}.${closer}`
    : `${tpl}${closer}`;
}
