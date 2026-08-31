import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section className="scroll-mt-16 border-t border-line pt-10 pb-4 md:pt-12" id={id}>
      <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      {children}
    </section>
  );
}
