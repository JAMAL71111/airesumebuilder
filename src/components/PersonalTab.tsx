import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { TextField } from './Field';
import { useLang } from '../i18n';
import type { PersonalInfo, ResumeData } from '../types';

interface Props {
  data: ResumeData;
  onChange: (personal: PersonalInfo) => void;
}

export function PersonalTab({ data, onChange }: Props) {
  const { t } = useLang();
  const update = (patch: Partial<PersonalInfo>) =>
    onChange({ ...data.personal, ...patch });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{t('personal.title')}</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('personal.desc')}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField
          label={t('personal.fullName')}
          placeholder={t('personal.fullNamePh')}
          value={data.personal.fullName}
          onChange={(e) => update({ fullName: e.target.value })}
        />
        <TextField
          label={t('personal.profTitle')}
          placeholder={t('personal.profTitlePh')}
          value={data.personal.title}
          onChange={(e) => update({ title: e.target.value })}
        />
        <TextField
          label={t('personal.email')}
          type="email"
          placeholder={t('personal.emailPh')}
          icon={<Mail className="h-4 w-4" />}
          value={data.personal.email}
          onChange={(e) => update({ email: e.target.value })}
        />
        <TextField
          label={t('personal.phone')}
          placeholder={t('personal.phonePh')}
          icon={<Phone className="h-4 w-4" />}
          value={data.personal.phone}
          onChange={(e) => update({ phone: e.target.value })}
        />
        <TextField
          label={t('personal.location')}
          placeholder={t('personal.locationPh')}
          icon={<MapPin className="h-4 w-4" />}
          value={data.personal.location}
          onChange={(e) => update({ location: e.target.value })}
        />
        <TextField
          label={t('personal.website')}
          placeholder={t('personal.websitePh')}
          icon={<Globe className="h-4 w-4" />}
          value={data.personal.website}
          onChange={(e) => update({ website: e.target.value })}
        />
        <TextField
          label={t('personal.linkedin')}
          placeholder={t('personal.linkedinPh')}
          icon={<Linkedin className="h-4 w-4" />}
          value={data.personal.linkedin}
          onChange={(e) => update({ linkedin: e.target.value })}
        />
        <TextField
          label={t('personal.github')}
          placeholder={t('personal.githubPh')}
          icon={<Github className="h-4 w-4" />}
          value={data.personal.github}
          onChange={(e) => update({ github: e.target.value })}
        />
      </div>
    </div>
  );
}
