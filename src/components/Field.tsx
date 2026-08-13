import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../utils';
import { useLang } from '../i18n';

type FieldBase = {
  label?: string;
  hint?: string;
  icon?: ReactNode;
  className?: string;
};

const baseInput =
  'w-full rounded-xl border bg-white text-slate-900 placeholder-slate-400 transition-colors ' +
  'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none ' +
  'dark:bg-slate-900/60 dark:text-slate-100 dark:placeholder-slate-500 dark:border-slate-700 ' +
  'dark:focus:border-brand-400 dark:focus:ring-brand-400/20';

export const TextField = forwardRef<
  HTMLInputElement,
  FieldBase & InputHTMLAttributes<HTMLInputElement>
>(function TextField({ label, hint, icon, className, ...props }, ref) {
  const { isRTL } = useLang();
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {label}
        </span>
      )}
      <div className="relative">
        {icon && (
          <span
            className={cn(
              'pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500',
              isRTL ? 'right-3' : 'left-3',
            )}
          >
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            baseInput,
            'h-11 px-3.5 text-sm',
            icon ? (isRTL ? 'pr-10' : 'pl-10') : null,
            className,
          )}
          {...props}
        />
      </div>
      {hint && <span className="mt-1 block text-xs text-slate-400 dark:text-slate-500">{hint}</span>}
    </label>
  );
});

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  FieldBase & TextareaHTMLAttributes<HTMLTextAreaElement>
>(function TextArea({ label, hint, icon, className, ...props }, ref) {
  const { isRTL } = useLang();
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {label}
        </span>
      )}
      <div className="relative">
        {icon && (
          <span
            className={cn(
              'pointer-events-none absolute top-3 text-slate-400 dark:text-slate-500',
              isRTL ? 'right-3' : 'left-3',
            )}
          >
            {icon}
          </span>
        )}
        <textarea
          ref={ref}
          className={cn(
            baseInput,
            'min-h-[120px] resize-y px-3.5 py-2.5 text-sm leading-relaxed',
            icon ? (isRTL ? 'pr-10' : 'pl-10') : null,
            className,
          )}
          {...props}
        />
      </div>
      {hint && <span className="mt-1 block text-xs text-slate-400 dark:text-slate-500">{hint}</span>}
    </label>
  );
});
