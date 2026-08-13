import { Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import { TextField } from './Field';
import { cn, uid } from '../utils';
import { useLang } from '../i18n';
import type { ResumeData, SkillItem } from '../types';

interface Props {
  data: ResumeData;
  onSkills: (items: SkillItem[]) => void;
}

export function SkillsTab({ data, onSkills }: Props) {
  const { t, isRTL } = useLang();
  const [tag, setTag] = useState('');

  const LEVEL_LABELS = ['', t('skills.level1'), t('skills.level2'), t('skills.level3'), t('skills.level4'), t('skills.level5')];

  const addTag = () => {
    const name = tag.trim();
    if (!name) return;
    onSkills([...data.skills, { id: uid(), name, level: 4 }]);
    setTag('');
  };

  const updateLevel = (id: string, level: number) =>
    onSkills(data.skills.map((s) => (s.id === id ? { ...s, level } : s)));

  const removeSkill = (id: string) =>
    onSkills(data.skills.filter((s) => s.id !== id));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('skills.title')}</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('skills.desc')}</p>
      </div>

      <div className="flex gap-2">
        <TextField
          placeholder={t('skills.tagPh')}
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addTag();
            }
          }}
          className="h-11"
        />
        <button
          type="button"
          onClick={addTag}
          className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-xl bg-brand-500 px-4 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          <Plus className="h-4 w-4" /> {t('skills.add')}
        </button>
      </div>

      <div className="space-y-3">
        {data.skills.length === 0 && (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
            {t('skills.empty')}
          </p>
        )}
        {data.skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 sm:flex-row sm:items-center dark:border-slate-700 dark:bg-slate-800/50"
          >
            <div className="flex flex-1 items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-1 text-sm font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                {skill.name}
                <button
                  type="button"
                  onClick={() => removeSkill(skill.id)}
                  className="rounded p-0.5 text-brand-400 transition hover:bg-brand-100 hover:text-brand-600 dark:hover:bg-brand-500/20"
                  aria-label={`${t('exp.remove')} ${skill.name}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
              <span className={cn('w-20 shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400', isRTL ? 'text-right' : 'text-left')}>
                {LEVEL_LABELS[skill.level]}
              </span>
            </div>
            <div className="flex flex-1 items-center gap-2">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-300"
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>
              <input
                type="range"
                min={1}
                max={5}
                value={skill.level}
                onChange={(e) => updateLevel(skill.id, parseInt(e.target.value, 10))}
                className={cn(
                  'h-1 w-24 cursor-pointer accent-brand-500',
                  'hidden sm:block',
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
