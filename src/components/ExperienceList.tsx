import type { ExperienceItem } from '../types/resume';
import { EmptyHint } from './EmptyHint';

interface ExperienceListProps {
  items: ExperienceItem[];
}

export function ExperienceList({ items }: ExperienceListProps) {
  if (items.length === 0) {
    return <EmptyHint field="experience" />;
  }

  return (
    <ul className="m-0 grid list-none gap-8 p-0">
      {items.map((item) => (
        <li className="grid gap-2 md:grid-cols-[8rem_1fr] md:gap-8" key={`${item.org}-${item.role}`}>
          <p className="m-0 font-mono text-xs tracking-wide text-muted md:pt-1">{item.period}</p>
          <div>
            <p className="m-0 font-medium tracking-tight">{item.role}</p>
            <p className="mt-1 mb-0 text-sm text-muted">{item.org}</p>
            <ul className="mt-3 mb-0 grid list-none gap-2 p-0">
              {item.highlights.map((line) => (
                <li className="max-w-[65ch] text-sm leading-relaxed text-ink" key={line}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
