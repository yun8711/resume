interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-line pt-5 pb-2 text-sm text-muted">
      <span>
        {year} {name}
      </span>
    </footer>
  );
}
