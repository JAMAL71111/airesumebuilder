import { Plus, Trash2, GraduationCap, Award } from 'lucide-react';
import { TextField, TextArea } from './Field';
import { uid } from '../utils';
import { useLang } from '../i18n';
import type { CertificationItem, EducationItem, ResumeData } from '../types';

interface Props {
  data: ResumeData;
  onEducation: (items: EducationItem[]) => void;
  onCerts: (items: CertificationItem[]) => void;
}

export function EducationTab({ data, onEducation, onCerts }: Props) {
  const { t } = useLang();

  const addEdu = () =>
    onEducation([
      ...data.education,
      { id: uid(), degree: '', school: '', location: '', startDate: '', endDate: '', current: false, details: '' },
    ]);
  const updateEdu = (id: string, patch: Partial<EducationItem>) =>
    onEducation(data.education.map((e) => (e.id === id ? { ...e, ...patch } : e)));
  const removeEdu = (id: string) => onEducation(data.education.filter((e) => e.id !== id));

  const addCert = () =>
    onCerts([...data.certifications, { id: uid(), name: '', issuer: '', date: '', link: '' }]);
  const updateCert = (id: string, patch: Partial<CertificationItem>) =>
    onCerts(data.certifications.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  const removeCert = (id: string) => onCerts(data.certifications.filter((c) => c.id !== id));

  return (
    <div className="space-y-8">
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-brand-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('edu.title')}</h2>
          </div>
          <button
            type="button"
            onClick={addEdu}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:hover:bg-brand-500/20"
          >
            <Plus className="h-4 w-4" /> {t('edu.add')}
          </button>
        </div>

        <div className="space-y-4">
          {data.education.length === 0 && (
            <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
              {t('edu.empty')}
            </p>
          )}
          {data.education.map((edu) => (
            <div
              key={edu.id}
              className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-700 dark:bg-slate-800/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {t('edu.title')}
                </span>
                <button
                  type="button"
                  onClick={() => removeEdu(edu.id)}
                  className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <TextField
                  label={t('edu.degree')}
                  placeholder={t('edu.degreePh')}
                  value={edu.degree}
                  onChange={(e) => updateEdu(edu.id, { degree: e.target.value })}
                />
                <TextField
                  label={t('edu.school')}
                  placeholder={t('edu.schoolPh')}
                  value={edu.school}
                  onChange={(e) => updateEdu(edu.id, { school: e.target.value })}
                />
                <TextField
                  label={t('edu.location')}
                  placeholder={t('edu.locationPh')}
                  value={edu.location}
                  onChange={(e) => updateEdu(edu.id, { location: e.target.value })}
                />
                <div className="grid grid-cols-2 gap-3">
                  <TextField
                    label={t('edu.startYear')}
                    placeholder="2013"
                    value={edu.startDate}
                    onChange={(e) => updateEdu(edu.id, { startDate: e.target.value })}
                  />
                  <TextField
                    label={t('edu.endYear')}
                    placeholder="2017"
                    value={edu.endDate}
                    disabled={edu.current}
                    onChange={(e) => updateEdu(edu.id, { endDate: e.target.value })}
                  />
                </div>
              </div>
              <label className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={edu.current}
                  onChange={(e) => updateEdu(edu.id, { current: e.target.checked })}
                  className="h-4 w-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500"
                />
                {t('edu.current')}
              </label>
              <div className="mt-3">
                <TextArea
                  label={t('edu.details')}
                  placeholder={t('edu.detailsPh')}
                  value={edu.details}
                  onChange={(e) => updateEdu(edu.id, { details: e.target.value })}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('edu.certs')}</h2>
          </div>
          <button
            type="button"
            onClick={addCert}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent-50 px-3 py-1.5 text-sm font-semibold text-accent-700 transition hover:bg-accent-100 dark:bg-accent-500/10 dark:text-accent-300 dark:hover:bg-accent-500/20"
          >
            <Plus className="h-4 w-4" /> {t('edu.addCert')}
          </button>
        </div>

        <div className="space-y-4">
          {data.certifications.length === 0 && (
            <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
              {t('edu.noCerts')}
            </p>
          )}
          {data.certifications.map((c) => (
            <div
              key={c.id}
              className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-700 dark:bg-slate-800/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {t('edu.cert')}
                </span>
                <button
                  type="button"
                  onClick={() => removeCert(c.id)}
                  className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <TextField
                  label={t('edu.certName')}
                  placeholder={t('edu.certNamePh')}
                  value={c.name}
                  onChange={(e) => updateCert(c.id, { name: e.target.value })}
                />
                <TextField
                  label={t('edu.issuer')}
                  placeholder={t('edu.issuerPh')}
                  value={c.issuer}
                  onChange={(e) => updateCert(c.id, { issuer: e.target.value })}
                />
                <TextField
                  label={t('edu.date')}
                  placeholder={t('edu.datePh')}
                  value={c.date}
                  onChange={(e) => updateCert(c.id, { date: e.target.value })}
                />
                <TextField
                  label={t('edu.linkOptional')}
                  placeholder={t('edu.linkPh')}
                  value={c.link}
                  onChange={(e) => updateCert(c.id, { link: e.target.value })}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
