import React, { useRef, useState } from 'react';
import { 
  FileText, User, Briefcase, GraduationCap, Wrench, Sparkles, 
  Download, RotateCcw, FilePlus2, Loader2 
} from 'lucide-react';
import { ThemeProvider } from './theme';
import { LanguageProvider, useLang } from './i18n';
import { cn } from './utils';
import { emptyResume, sampleResume, sampleResumeAr } from './sampleData';
import type { ResumeData, TabKey } from './types';
import PersonalTab from './components/PersonalTab';
import SummaryTab from './components/SummaryTab';
import ExperienceTab from './components/ExperienceTab';
import EducationTab from './components/EducationTab';
import SkillsTab from './components/SkillsTab';
import ResumePreview from './components/ResumePreview';
import TipsSection from './components/TipsSection';

// Import Pages
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

const TAB_KEYS: TabKey[] = ['summary', 'personal', 'experience', 'education', 'skills'];

const TAB_ICONS: Record<TabKey, typeof User> = {
  summary: Sparkles,
  personal: User,
  experience: Briefcase,
  education: GraduationCap,
  skills: Wrench,
};

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
              'inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-brand-500 text-white shadow-soft'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
            )}
          >
            <Icon className="h-4 w-4" />
            {(t as any)[`tab_${key}`] || key}
          </button>
        );
      })}
    </div>
  );
}

function MainResumeBuilder() {
  const { t, lang } = useLang();
  const [data, setData] = useState<ResumeData>(lang === 'ar' ? sampleResumeAr : sampleResume);
  const [tab, setTab] = useState<TabKey>('summary');
  const [exporting, setExporting] = useState(false);
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
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      await html2pdf().set(opt).from(previewRef.current).save();
    } catch (err) {
      console.error('PDF export failed', err);
      alert(t('app.pdfError'));
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-6">
        <TabBar active={tab} onChange={setTab} />
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
          {tab === 'summary' && <SummaryTab data={data} onChange={patch} />}
          {tab === 'personal' && <PersonalTab data={data} onChange={patch} />}
          {tab === 'experience' && <ExperienceTab data={data} onChange={patch} />}
          {tab === 'education' && <EducationTab data={data} onChange={patch} />}
          {tab === 'skills' && <SkillsTab data={data} onChange={patch} />}
        </div>
        <TipsSection />
      </div>

      <div className="lg:col-span-6">
        <div className="sticky top-20 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {t('app.livePreview')}
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setData(lang === 'ar' ? sampleResumeAr : sampleResume)}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {t('app.loadSample')}
              </button>
              <button
                type="button"
                onClick={() => setData(emptyResume)}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <FilePlus2 className="h-3.5 w-3.5" />
                {t('app.clear')}
              </button>
              <button
                type="button"
                onClick={handleDownload}
                disabled={exporting}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-brand-600 disabled:opacity-50"
              >
                {exporting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
                {exporting ? t('app.preparing') : t('app.download')}
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-4 dark:border-slate-800 dark:bg-slate-950">
            <div ref={previewRef} className="bg-white shadow-lg">
              <ResumePreview data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'about' | 'contact'>('home');

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col justify-between">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                <div className="rounded-xl bg-brand-500 p-2 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">منشئ السيرة الذاتية</span>
              </div>

              {currentPage !== 'home' && (
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-sm bg-brand-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-600"
                >
                  ← العودة للرئيسية
                </button>
              )}
            </div>
          </header>

          {/* Main Body */}
          <main className="mx-auto max-w-7xl flex-grow p-4 sm:p-6 lg:p-8 w-full">
            {currentPage === 'privacy' && <PrivacyPolicy />}
            {currentPage === 'terms' && <TermsOfService />}
            {currentPage === 'about' && <AboutUs />}
            {currentPage === 'contact' && <ContactUs />}
            {currentPage === 'home' && <MainResumeBuilder />}
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-200 bg-white p-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <button onClick={() => setCurrentPage('about')} className="hover:text-brand-500">معلومات عنا</button>
              <button onClick={() => setCurrentPage('contact')} className="hover:text-brand-500">اتصل بنا</button>
              <button onClick={() => setCurrentPage('privacy')} className="hover:text-brand-500">سياسة الخصوصية</button>
              <button onClick={() => setCurrentPage('terms')} className="hover:text-brand-500">شروط الخدمة</button>
            </div>
            <p>© 2026 برنامج إنشاء السيرة الذاتية بالذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
