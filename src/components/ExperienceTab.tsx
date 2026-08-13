import { Plus, Trash2, GripVertical, Briefcase, FolderGit2 } from 'lucide-react';
import { TextField, TextArea } from './Field';
import { uid } from '../utils';
import { useLang } from '../i18n';
import type { ExperienceItem, ProjectItem, ResumeData } from '../types';

interface Props {
  data: ResumeData;
  onExperience: (items: ExperienceItem[]) => void;
  onProjects: (items: ProjectItem[]) => void;
}

function CardShell({
  label,
  children,
  onRemove,
}: {
  label: string;
  children: React.ReactNode;
  onRemove: () => void;
}) {
  const { t } = useLang();
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-soft transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-slate-600">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
          <GripVertical className="h-4 w-4 cursor-grab" />
          <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
          aria-label={`${t('exp.remove')} ${label}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      {children}
    </div>
  );
}

export function ExperienceTab({ data, onExperience, onProjects }: Props) {
  const { t } = useLang();

  const addExp = () =>
    onExperience([
      ...data.experience,
      { id: uid(), role: '', company: '', location: '', startDate: '', endDate: '', current: false, bullets: [''] },
    ]);

  const updateExp = (id: string, patch: Partial<ExperienceItem>) =>
    onExperience(data.experience.map((e) => (e.id === id ? { ...e, ...patch } : e)));

  const removeExp = (id: string) =>
    onExperience(data.experience.filter((e) => e.id !== id));

  const addProject = () =>
    onProjects([
      ...data.projects,
      { id: uid(), name: '', description: '', link: '', tech: [] },
    ]);

  const updateProject = (id: string, patch: Partial<ProjectItem>) =>
    onProjects(data.projects.map((p) => (p.id === id ? { ...p, ...patch } : p)));

  const removeProject = (id: string) =>
    onProjects(data.projects.filter((p) => p.id !== id));

  return (
    <div className="space-y-8">
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-brand-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('exp.workExp')}</h2>
          </div>
          <button
            type="button"
            onClick={addExp}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:hover:bg-brand-500/20"
          >
            <Plus className="h-4 w-4" /> {t('exp.addRole')}
          </button>
        </div>

        <div className="space-y-4">
          {data.experience.length === 0 && (
            <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
              {t('exp.noRoles')}
            </p>
          )}
          {data.experience.map((exp) => (
            <CardShell key={exp.id} label={t('exp.role')} onRemove={() => removeExp(exp.id)}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <TextField
                  label={t('exp.jobTitle')}
                  placeholder={t('exp.jobTitlePh')}
                  value={exp.role}
                  onChange={(e) => updateExp(exp.id, { role: e.target.value })}
                />
                <TextField
                  label={t('exp.company')}
                  placeholder={t('exp.companyPh')}
                  value={exp.company}
                  onChange={(e) => updateExp(exp.id, { company: e.target.value })}
                />
                <TextField
                  label={t('exp.location')}
                  placeholder={t('exp.locationPh')}
                  value={exp.location}
                  onChange={(e) => updateExp(exp.id, { location: e.target.value })}
                />
                <div className="grid grid-cols-2 gap-3">
                  <TextField
                    label={t('exp.start')}
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => updateExp(exp.id, { startDate: e.target.value })}
                  />
                  <TextField
                    label={t('exp.end')}
                    type="month"
                    value={exp.endDate}
                    disabled={exp.current}
                    onChange={(e) => updateExp(exp.id, { endDate: e.target.value })}
                  />
                </div>
              </div>
              <label className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) => updateExp(exp.id, { current: e.target.checked })}
                  className="h-4 w-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500"
                />
                {t('exp.current')}
              </label>
              <div className="mt-4">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {t('exp.highlights')}
                </span>
                <TextArea
                  placeholder={t('exp.highlightsPh')}
                  value={exp.bullets.join('\n')}
                  onChange={(e) =>
                    updateExp(exp.id, { bullets: e.target.value.split('\n') })
                  }
                />
              </div>
            </CardShell>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderGit2 className="h-5 w-5 text-accent-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('exp.projects')}</h2>
          </div>
          <button
            type="button"
            onClick={addProject}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-50 px-3 py-1.5 text-sm font-semibold text-accent-700 transition hover:bg-accent-100 dark:bg-accent-500/10 dark:text-accent-300 dark:hover:bg-accent-500/20"
          >
            <Plus className="h-4 w-4" /> {t('exp.addProject')}
          </button>
        </div>

        <div className="space-y-4">
          {data.projects.length === 0 && (
            <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
              {t('exp.noProjects')}
            </p>
          )}
          {data.projects.map((p) => (
            <CardShell key={p.id} label={t('exp.project')} onRemove={() => removeProject(p.id)}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <TextField
                  label={t('exp.name')}
                  placeholder={t('exp.namePh')}
                  value={p.name}
                  onChange={(e) => updateProject(p.id, { name: e.target.value })}
                />
                <TextField
                  label={t('exp.link')}
                  placeholder={t('exp.linkPh')}
                  value={p.link}
                  onChange={(e) => updateProject(p.id, { link: e.target.value })}
                />
              </div>
              <div className="mt-3">
                <TextArea
                  label={t('exp.description')}
                  placeholder={t('exp.descriptionPh')}
                  value={p.description}
                  onChange={(e) => updateProject(p.id, { description: e.target.value })}
                />
              </div>
              <div className="mt-3">
                <TextField
                  label={t('exp.tech')}
                  placeholder={t('exp.techPh')}
                  value={p.tech.join(', ')}
                  onChange={(e) =>
                    updateProject(p.id, {
                      tech: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                    })
                  }
                />
              </div>
            </CardShell>
          ))}
        </div>
      </section>
    </div>
  );
}
