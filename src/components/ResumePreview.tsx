import { forwardRef } from 'react';
import {
  Mail, Phone, MapPin, Globe, Linkedin, Github, Award,
} from 'lucide-react';
import { cn, dateRange } from '../utils';
import { useLang } from '../i18n';
import type { ResumeData } from '../types';

interface Props {
  data: ResumeData;
  className?: string;
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h3 className="mb-2 border-b border-slate-200 pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
      {children}
    </h3>
  );
}

const LEVEL_DOTS = 5;
function SkillDots({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: LEVEL_DOTS }).map((_, i) => (
        <span
          key={i}
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            i < level ? 'bg-brand-600' : 'bg-slate-300',
          )}
        />
      ))}
    </span>
  );
}

export const ResumePreview = forwardRef<HTMLDivElement, Props>(function ResumePreview(
  { data, className },
  ref,
) {
  const { t, lang, isRTL } = useLang();
  const { personal, summary, experience, projects, education, certifications, skills } = data;
  const hasContact =
    personal.email || personal.phone || personal.location || personal.website || personal.linkedin || personal.github;

  return (
    <div
      ref={ref}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={cn(
        'resume-page mx-auto w-full max-w-[820px] bg-white text-slate-900',
        isRTL ? 'font-arabic' : 'font-resume',
        'shadow-paper ring-1 ring-slate-200/60',
        className,
      )}
      style={{ aspectRatio: '8.5 / 11', padding: 'clamp(28px, 5%, 56px)' }}
    >
      {/* Header */}
      <header className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          {personal.fullName || t('preview.yourName')}
        </h1>
        {personal.title && (
          <p className="mt-0.5 text-sm font-medium text-brand-700">{personal.title}</p>
        )}
        {hasContact && (
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-600">
            {personal.email && (
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3 w-3 text-slate-400" /> {personal.email}
              </span>
            )}
            {personal.phone && (
              <span className="inline-flex items-center gap-1">
                <Phone className="h-3 w-3 text-slate-400" /> {personal.phone}
              </span>
            )}
            {personal.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-slate-400" /> {personal.location}
              </span>
            )}
            {personal.website && (
              <span className="inline-flex items-center gap-1">
                <Globe className="h-3 w-3 text-slate-400" /> {personal.website}
              </span>
            )}
            {personal.linkedin && (
              <span className="inline-flex items-center gap-1">
                <Linkedin className="h-3 w-3 text-slate-400" /> {personal.linkedin}
              </span>
            )}
            {personal.github && (
              <span className="inline-flex items-center gap-1">
                <Github className="h-3 w-3 text-slate-400" /> {personal.github}
              </span>
            )}
          </div>
        )}
      </header>

      {summary && (
        <section className="mb-5">
          <SectionTitle>{t('preview.summary')}</SectionTitle>
          <p className="text-[12.5px] leading-relaxed text-slate-700">{summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="mb-5">
          <SectionTitle>{t('preview.experience')}</SectionTitle>
          <div className="space-y-3.5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[12.5px] font-semibold text-slate-900">
                    {exp.role || t('preview.role')}
                    {exp.company && (
                      <span className="font-normal text-slate-600"> · {exp.company}</span>
                    )}
                  </p>
                  <p className="shrink-0 text-[10.5px] font-medium text-slate-500">
                    {dateRange(exp.startDate, exp.endDate, exp.current, lang, t('preview.present'))}
                  </p>
                </div>
                {exp.location && (
                  <p className="text-[10.5px] text-slate-500">{exp.location}</p>
                )}
                {exp.bullets.filter((b) => b.trim()).length > 0 && (
                  <ul className="mt-1 space-y-0.5">
                    {exp.bullets
                      .filter((b) => b.trim())
                      .map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-1.5 text-[11.5px] leading-snug text-slate-700"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="mb-5">
          <SectionTitle>{t('preview.projects')}</SectionTitle>
          <div className="space-y-2.5">
            {projects.map((p) => (
              <div key={p.id}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[12.5px] font-semibold text-slate-900">
                    {p.name || t('preview.project')}
                  </p>
                  {p.link && (
                    <p className="shrink-0 text-[10.5px] text-brand-700">{p.link}</p>
                  )}
                </div>
                {p.description && (
                  <p className="text-[11.5px] leading-snug text-slate-700">{p.description}</p>
                )}
                {p.tech.length > 0 && (
                  <p className="mt-0.5 text-[10.5px] text-slate-500">
                    {p.tech.join(' · ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-5">
          <SectionTitle>{t('preview.education')}</SectionTitle>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[12.5px] font-semibold text-slate-900">
                    {edu.degree || t('preview.degree')}
                    {edu.school && (
                      <span className="font-normal text-slate-600"> · {edu.school}</span>
                    )}
                  </p>
                  <p className="shrink-0 text-[10.5px] font-medium text-slate-500">
                    {dateRange(edu.startDate, edu.endDate, edu.current, lang, t('preview.present'))}
                  </p>
                </div>
                {edu.location && (
                  <p className="text-[10.5px] text-slate-500">{edu.location}</p>
                )}
                {edu.details && (
                  <p className="text-[11.5px] leading-snug text-slate-700">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {certifications.length > 0 && (
        <section className="mb-5">
          <SectionTitle>{t('preview.certifications')}</SectionTitle>
          <div className="space-y-1.5">
            {certifications.map((c) => (
              <div key={c.id} className="flex items-baseline justify-between gap-3">
                <p className="text-[12px] text-slate-800">
                  <span className="font-semibold">{c.name || t('preview.certification')}</span>
                  {c.issuer && <span className="text-slate-600"> · {c.issuer}</span>}
                </p>
                {c.date && (
                  <p className="shrink-0 text-[10.5px] text-slate-500">{c.date}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <SectionTitle>{t('preview.skills')}</SectionTitle>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {skills.map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-2">
                <span className="text-[11.5px] text-slate-800">{s.name}</span>
                <SkillDots level={s.level} />
              </div>
            ))}
          </div>
        </section>
      )}

      {personal.fullName === '' && summary === '' && experience.length === 0 && (
        <div className="flex h-full items-center justify-center">
          <p className="text-sm text-slate-400">
            <Award className="mr-2 inline h-4 w-4" />
            {t('preview.empty')}
          </p>
        </div>
      )}
    </div>
  );
});
