interface EmptyHintProps {
  field: string;
}

export function EmptyHint({ field }: EmptyHintProps) {
  return (
    <p className="m-0 text-sm leading-relaxed text-muted">
      在 <code>src/data/resume.ts</code> 的 {field} 中补充。
    </p>
  );
}
