import { useRef, useState } from 'react';
import {
  FileText, User, Briefcase, GraduationCap, Sparkles, Moon, Sun,
  Download, RotateCcw, FilePlus2, Loader2, Eye, Languages,
} from 'lucide-react';
import { ThemeProvider, useTheme } from './theme';
import { LanguageProvider, useLang } from './i18n';
import { cn } from './utils';
import { emptyResume, sampleResume, sampleResumeAr } from './sampleData';
import type { ResumeData, TabKey } from './types';
import { PersonalTab } from './components/PersonalTab';
import { SummaryTab } from './components/SummaryTab';
import { ExperienceTab } from './components/ExperienceTab';
import { EducationTab } from './components/EducationTab';
import { SkillsTab } from './components/SkillsTab';
import { ResumePreview } from './components/ResumePreview';
import { LegalModal, Footer, type LegalPage } from './components/LegalModal';
import { TipsSection } from './components/TipsSection';

const TAB_KEYS: TabKey[] = ['summary', 'personal', 'experience', 'education', 'skills'];
const TAB_ICONS: Record<TabKey, typeof User> = {
  summary: Sparkles,
  personal: User,
  experience: Briefcase,
  education: GraduationCap,
  skills: FileText,
};
const TAB_LABELS: Record<TabKey, string> = {
  summary: 'tab.summary',
  personal: 'tab.personal',
  experience: 'tab.experience',
  education: 'tab.education',
  skills: 'tab.skills',
};

function Header({
  onDownload,
  onSample,
  onReset,
  exporting,
}: {
  onDownload: () => void;
  onSample: () => void;
  onReset: () => void;
  exporting: boolean;
}) {
  const { theme, toggle } = useTheme();
  const { t, toggle: toggleLang } = useLang();
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
            <FileText className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
              Resumate
            </p>
            <p className="hidden text-[11px] text-slate-500 dark:text-slate-400 sm:block">
              {t('app.tagline')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onSample}
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 sm:inline-flex"
          >
            <FilePlus2 className="h-4 w-4" /> {t('app.sample')}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <RotateCcw className="h-4 w-4" />
            <span className="hidden sm:inline">{t('app.reset')}</span>
          </button>
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label={t('app.toggleLang')}
          >
            <Languages className="h-4 w-4" />
            <span>{t('app.toggleLang')}</span>
          </button>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label={t('app.toggleTheme')}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={onDownload}
            disabled={exporting}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 disabled:opacity-60"
          >
            {exporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            <span className="hidden sm:inline">{exporting ? t('app.preparing') : t('app.download')}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function TabBar({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (k: TabKey) => void;
}) {
  const { t } = useLang();
  return (
    <div className="flex gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1 no-scrollbar dark:border-slate-800 dark:bg-slate-900">
      {TAB_KEYS.map((key) => {
        const Icon = TAB_ICONS[key];
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={cn(
              'inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition',
              isActive
                ? 'bg-brand-500 text-white shadow-soft'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
            )}
          >
            <Icon className="h-4 w-4" />
            {t(TAB_LABELS[key])}
          </button>
        );
      })}
    </div>
  );
}

function AppInner() {
  const { t, lang } = useLang();
  const [data, setData] = useState<ResumeData>(emptyResume);
  const [tab, setTab] = useState<TabKey>('summary');
  const [exporting, setExporting] = useState(false);
  const [legalPage, setLegalPage] = useState<LegalPage>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const patch = (p: Partial<ResumeData>) => setData((d) => ({ ...d, ...p }));

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setExporting(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const name = data.personal.fullName || t('app.defaultFilename');
      const filename = `${name.replace(/\s+/g, '_')}_resume.pdf`;
      const opt = {
        margin: 0,
        filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'in' as const, format: 'letter', orientation: 'portrait' as const },
      };
      await html2pdf().set(opt).from(previewRef.current).save();
    } catch (err) {
      console.error('PDF export failed', err);
      alert(t('app.pdfError'));
    } finally {
      setExporting(false);
    }
  };

  const handleSample = () => setData(lang === 'ar' ? sampleResumeAr : sampleResume);
  const handleReset = () => {
    if (confirm(t('app.confirmReset'))) {
      setData(emptyResume);
      setTab('summary');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header
        onDownload={handleDownload}
        onSample={handleSample}
        onReset={handleReset}
        exporting={exporting}
      />

      <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Form column */}
          <div className="space-y-4">
            <TabBar active={tab} onChange={setTab} />
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft animate-fade-in dark:border-slate-800 dark:bg-slate-900 sm:p-6">
              {tab === 'summary' && (
                <SummaryTab data={data} onChange={(summary) => patch({ summary })} />
              )}
              {tab === 'personal' && (
                <PersonalTab data={data} onChange={(personal) => patch({ personal })} />
              )}
              {tab === 'experience' && (
                <ExperienceTab
                  data={data}
                  onExperience={(experience) => patch({ experience })}
                  onProjects={(projects) => patch({ projects })}
                />
              )}
              {tab === 'education' && (
                <EducationTab
                  data={data}
                  onEducation={(education) => patch({ education })}
                  onCerts={(certifications) => patch({ certifications })}
                />
              )}
              {tab === 'skills' && (
                <SkillsTab data={data} onSkills={(skills) => patch({ skills })} />
              )}
            </div>
          </div>

          {/* Preview column */}
          <div className="lg:sticky lg:top-[88px] lg:self-start">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <Eye className="h-4 w-4" /> {t('app.livePreview')}
            </div>
            <div className="max-h-[calc(100vh-140px)] overflow-auto rounded-2xl bg-slate-200/60 p-4 scrollbar-thin dark:bg-slate-900">
              <ResumePreview ref={previewRef} data={data} />
            </div>
          </div>
        </div>
      </main>

      <TipsSection />

      <Footer onNavigate={setLegalPage} />

      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ThemeProvider>
  );
}
