import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { useLang } from '../i18n';

export type LegalPage = 'privacy' | 'terms' | 'about' | null;

interface Section {
  titleKey: string;
  bodyKey: string;
}

const SECTIONS: Record<Exclude<LegalPage, null>, Section[]> = {
  privacy: [
    { titleKey: 'privacy.dataTitle', bodyKey: 'privacy.dataBody' },
    { titleKey: 'privacy.localTitle', bodyKey: 'privacy.localBody' },
    { titleKey: 'privacy.adsTitle', bodyKey: 'privacy.adsBody' },
    { titleKey: 'privacy.analyticsTitle', bodyKey: 'privacy.analyticsBody' },
    { titleKey: 'privacy.childrenTitle', bodyKey: 'privacy.childrenBody' },
    { titleKey: 'privacy.changesTitle', bodyKey: 'privacy.changesBody' },
    { titleKey: 'privacy.contactTitle', bodyKey: 'privacy.contactBody' },
  ],
  terms: [
    { titleKey: 'terms.acceptanceTitle', bodyKey: 'terms.acceptanceBody' },
    { titleKey: 'terms.useTitle', bodyKey: 'terms.useBody' },
    { titleKey: 'terms.ipTitle', bodyKey: 'terms.ipBody' },
    { titleKey: 'terms.disclaimerTitle', bodyKey: 'terms.disclaimerBody' },
    { titleKey: 'terms.liabilityTitle', bodyKey: 'terms.liabilityBody' },
    { titleKey: 'terms.adsTitle', bodyKey: 'terms.adsBody' },
    { titleKey: 'terms.changesTitle', bodyKey: 'terms.changesBody' },
  ],
  about: [
    { titleKey: 'about.missionTitle', bodyKey: 'about.missionBody' },
    { titleKey: 'about.howTitle', bodyKey: 'about.howBody' },
    { titleKey: 'about.privacyTitle', bodyKey: 'about.privacyBody' },
    { titleKey: 'about.aiTitle', bodyKey: 'about.aiBody' },
    { titleKey: 'about.contactTitle', bodyKey: 'about.contactBody' },
  ],
};

const TITLE_KEY: Record<Exclude<LegalPage, null>, string> = {
  privacy: 'privacy.title',
  terms: 'terms.title',
  about: 'about.title',
};

const INTRO_KEY: Record<Exclude<LegalPage, null>, string> = {
  privacy: 'privacy.intro',
  terms: 'terms.intro',
  about: '',
};

function SectionBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="space-y-1.5">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{body}</p>
    </section>
  );
}

export function LegalModal({
  page,
  onClose,
}: {
  page: LegalPage;
  onClose: () => void;
}) {
  const { t, isRTL } = useLang();

  useEffect(() => {
    if (!page) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [page, onClose]);

  if (!page) return null;

  const sections = SECTIONS[page];
  const title = t(TITLE_KEY[page]);
  const intro = INTRO_KEY[page] ? t(INTRO_KEY[page]) : '';
  const effectiveDate = 'August 13, 2026';
  const effectiveDateLabel = isRTL
    ? `تاريخ السريان: ١٣ أغسطس ٢٠٢٦`
    : `${t('legal.effectiveDate')}: ${effectiveDate}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 animate-fade-in">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
            aria-label={t('legal.close')}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 scrollbar-thin">
          <div className="space-y-5">
            {intro && (
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{intro}</p>
            )}
            <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
              {effectiveDateLabel}
            </p>
            {sections.map((section, i) => (
              <SectionBlock key={i} title={t(section.titleKey)} body={t(section.bodyKey)} />
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-700">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            {t('legal.close')}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Footer({ onNavigate }: { onNavigate: (page: LegalPage) => void }) {
  const { t } = useLang();
  const links: { key: string; page: Exclude<LegalPage, null> }[] = [
    { key: 'footer.privacy', page: 'privacy' },
    { key: 'footer.terms', page: 'terms' },
    { key: 'footer.about', page: 'about' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-[1500px] px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-400 dark:text-slate-600">{t('app.footer')}</p>
          <nav className="flex items-center gap-5">
            {links.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => onNavigate(link.page)}
                className="text-xs font-medium text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
              >
                {t(link.key)}
              </button>
            ))}
          </nav>
        </div>
        <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-600">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
