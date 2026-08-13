import { Target, BarChart3, FileText, CheckCheck, Lightbulb } from 'lucide-react';
import { useLang } from '../i18n';

const TIPS = [
  { icon: Target, titleKey: 'tips.tip1Title', bodyKey: 'tips.tip1Body' },
  { icon: BarChart3, titleKey: 'tips.tip2Title', bodyKey: 'tips.tip2Body' },
  { icon: FileText, titleKey: 'tips.tip3Title', bodyKey: 'tips.tip3Body' },
  { icon: CheckCheck, titleKey: 'tips.tip4Title', bodyKey: 'tips.tip4Body' },
];

export function TipsSection() {
  const { t } = useLang();

  return (
    <section className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('tips.sectionTitle')}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
            {t('tips.sectionIntro')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIPS.map((tip, i) => {
            const Icon = tip.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:border-brand-300 hover:shadow-glow dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-500/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white dark:from-brand-500/10 dark:to-brand-500/20 dark:text-brand-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t(tip.titleKey)}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t(tip.bodyKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
