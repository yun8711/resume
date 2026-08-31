import { EnvelopeSimple, GithubLogo } from '@phosphor-icons/react';
import type { ResumeLinks } from '../types/resume';

interface HeroProps {
  name: string;
  title: string;
  gender: string;
  birth: string;
  summary: string;
  links: ResumeLinks;
}

export function Hero({ name, title, gender, birth, summary, links }: HeroProps) {
  const meta = [gender, birth].filter(Boolean).join('，');

  return (
    <header className="enter grid gap-6 pt-10 pb-14 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:gap-x-10 md:pt-12 md:pb-16">
      <h1 className="m-0 text-5xl leading-[1.05] font-semibold tracking-tighter md:text-7xl">{name}</h1>
      <div className="md:pt-2">
        <p className="m-0 text-lg font-medium tracking-tight">{title}</p>
        {meta ? <p className="mt-1 mb-0 text-sm text-muted">{meta}</p> : null}
        <p className="mt-4 mb-0 max-w-[65ch] text-base leading-relaxed text-muted">{summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {links.github ? (
            <a
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg-0 no-underline transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:scale-[0.98]"
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo aria-hidden="true" size={16} weight="regular" />
              GitHub
            </a>
          ) : null}
          {links.email ? (
            <a
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink no-underline transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:scale-[0.98]"
              href={`mailto:${links.email}`}
            >
              <EnvelopeSimple aria-hidden="true" size={16} weight="regular" />
              {links.email}
            </a>
          ) : null}
        </div>
      </div>
    </header>
  );
}
