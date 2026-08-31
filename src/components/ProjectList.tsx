import { ArrowUpRight } from '@phosphor-icons/react';
import type { ReactNode } from 'react';
import type { ProjectItem } from '../types/resume';
import { EmptyHint } from './EmptyHint';

interface ProjectListProps {
  projects: ProjectItem[];
}

const rowClass =
  'group grid gap-3 py-6 text-ink no-underline md:grid-cols-[minmax(0,12.5rem)_1fr_auto] md:items-start md:gap-6';

function ProjectCopy({ project }: { project: ProjectItem }) {
  return (
    <>
      <span>
        <span className="font-medium tracking-tight">{project.name}</span>
        {project.wip ? (
          <span className="mt-1.5 block w-fit rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
            开发中
          </span>
        ) : null}
      </span>
      <span>
        <span className="block max-w-[65ch] text-sm leading-relaxed">{project.blurb}</span>
        {project.highlights.length > 0 ? (
          <span className="mt-3 mb-0 grid list-none gap-2 p-0">
            {project.highlights.map((line) => (
              <span className="block max-w-[65ch] text-sm leading-relaxed text-muted" key={line}>
                {line}
              </span>
            ))}
          </span>
        ) : null}
        <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
      </span>
    </>
  );
}

function ProjectArrow() {
  return (
    <ArrowUpRight
      aria-hidden="true"
      className="hidden text-muted transition-transform duration-200 group-hover:-translate-y-px group-hover:text-accent md:mt-0.5 md:block"
      size={16}
      weight="regular"
    />
  );
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return <EmptyHint field="projects" />;
  }

  return (
    <ul className="m-0 grid list-none gap-0 p-0">
      {projects.map((project) => {
        const inner: ReactNode = (
          <>
            <ProjectCopy project={project} />
            {project.href ? <ProjectArrow /> : <span className="hidden md:block" />}
          </>
        );

        return (
          <li className="border-t border-line first:border-t-0" key={project.name}>
            {project.href ? (
              <a className={rowClass} href={project.href} rel="noreferrer" target="_blank">
                {inner}
              </a>
            ) : (
              <div className={rowClass}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
