import { Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { TextArea } from './Field';
import { enhanceSummary } from '../ai';
import { useLang } from '../i18n';
import { cn } from '../utils';
import type { ResumeData } from '../types';

interface Props {
  data: ResumeData;
  onChange: (summary: string) => void;
}

export function SummaryTab({ data, onChange }: Props) {
  const { t, lang, isRTL } = useLang();
  const [loading, setLoading] = useState(false);
  const [pulse, setPulse] = useState(false);

  const yearsExperience = data.experience.reduce((acc, e) => {
    const start = e.startDate ? parseInt(e.startDate.slice(0, 4), 10) : 0;
    const end = e.current
      ? new Date().getFullYear()
      : e.endDate
        ? parseInt(e.endDate.slice(0, 4), 10)
        : start;
    return acc + Math.max(0, end - start);
  }, 0);

  const handleEnhance = () => {
    setLoading(true);
    setPulse(false);
    setTimeout(() => {
      const improved = enhanceSummary({
        role: data.personal.title,
        yearsExperience,
        currentText: data.summary,
        lang,
      });
      onChange(improved);
      setLoading(false);
      setPulse(true);
      setTimeout(() => setPulse(false), 700);
    }, 900);
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('summary.title')}</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('summary.desc')}</p>
      </div>

      <div className="relative">
        <TextArea
          label={t('summary.label')}
          placeholder={t('summary.placeholder')}
          value={data.summary}
          onChange={(e) => onChange(e.target.value)}
          className={pulse ? 'ring-2 ring-accent-400/40' : undefined}
        />
        <button
          type="button"
          onClick={handleEnhance}
          disabled={loading}
          className={cn(
            'absolute top-9 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-soft transition hover:from-brand-600 hover:to-brand-700 disabled:opacity-60',
            isRTL ? 'left-3' : 'right-3',
          )}
        >
          {loading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Sparkles className="h-3.5 w-3.5" />
          )}
          {loading ? t('summary.enhancing') : t('summary.enhance')}
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/40">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {t('summary.tips')}
        </p>
        <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>{t('summary.tip1')}</li>
          <li>{t('summary.tip2')}</li>
          <li>{t('summary.tip3')}</li>
        </ul>
      </div>
    </div>
  );
}
