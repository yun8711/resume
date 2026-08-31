import type { EducationItem } from '../types/resume';
import { EmptyHint } from './EmptyHint';

interface EducationListProps {
  items: EducationItem[];
}

export function EducationList({ items }: EducationListProps) {
  if (items.length === 0) {
    return <EmptyHint field="education" />;
  }

  return (
    <ul className="m-0 grid list-none gap-8 p-0">
      {items.map((item) => (
        <li className="grid gap-2 md:grid-cols-[8rem_1fr] md:gap-8" key={`${item.school}-${item.major}`}>
          <p className="m-0 font-mono text-xs tracking-wide text-muted md:pt-1">{item.period}</p>
          <div>
            <p className="m-0 font-medium tracking-tight">{item.school}</p>
            <p className="mt-1 mb-0 text-sm text-muted">
              {item.major}，{item.degree}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
