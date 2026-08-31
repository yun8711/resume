interface NavProps {
  name: string;
}

const links = [
  { href: '#skills', label: '技能' },
  { href: '#work', label: '作品' },
  { href: '#experience', label: '经历' },
  { href: '#education', label: '教育' }
];

export function Nav({ name }: NavProps) {
  return (
    <header className="sticky top-0 z-10 h-16 border-b border-line bg-bg-0">
      <nav className="mx-auto flex h-full w-full max-w-[1080px] items-center justify-between gap-4 px-4 md:px-6">
        <a className="text-sm font-semibold tracking-tight text-ink no-underline" href="#top">
          {name}
        </a>
        <ul className="m-0 flex list-none items-center gap-5 p-0 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a className="text-muted no-underline transition-colors duration-200 hover:text-ink" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
