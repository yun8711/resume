import type { SkillGroup } from '../types/resume';
import { EmptyHint } from './EmptyHint';

interface SkillGroupsProps {
  groups: SkillGroup[];
}

export function SkillGroups({ groups }: SkillGroupsProps) {
  if (groups.length === 0) {
    return <EmptyHint field="skills" />;
  }

  return (
    <ul className="m-0 grid list-none gap-8 p-0">
      {groups.map((group) => (
        <li className="grid gap-2 md:grid-cols-[8rem_1fr] md:gap-8" key={group.label}>
          <p className="m-0 font-medium tracking-tight md:pt-0.5">{group.label}</p>
          <div>
            <p className="m-0 max-w-[65ch] text-sm leading-relaxed">{group.blurb}</p>
            {group.highlights.length > 0 ? (
              <ul className="mt-3 mb-0 grid list-none gap-2 p-0">
                {group.highlights.map((line) => (
                  <li className="max-w-[65ch] text-sm leading-relaxed" key={line}>
                    {line}
                  </li>
                ))}
              </ul>
            ) : null}
            <ul className="mt-3 mb-0 flex list-none flex-wrap gap-2 p-0">
              {group.items.map((item) => (
                <li
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
