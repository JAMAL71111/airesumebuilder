export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export function uid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

const monthsEn = [
  '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const monthsAr = [
  '', 'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];

export function formatMonthYear(value: string, lang: 'en' | 'ar' = 'en'): string {
  if (!value) return '';
  const [y, m] = value.split('-');
  if (!y) return value;
  const mi = parseInt(m, 10);
  if (!mi) return y;
  const months = lang === 'ar' ? monthsAr : monthsEn;
  return `${months[mi]} ${y}`;
}

export function dateRange(
  start: string,
  end: string,
  current: boolean,
  lang: 'en' | 'ar' = 'en',
  presentLabel?: string,
): string {
  const s = formatMonthYear(start, lang);
  const present = presentLabel || (lang === 'ar' ? 'الحاضر' : 'Present');
  const e = current ? present : formatMonthYear(end, lang);
  if (s && e) return `${s} — ${e}`;
  return s || e || '';
}
