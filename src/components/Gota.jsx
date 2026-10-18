// Gota que se enche conforme o progresso (0 a 100)
export default function Gota({ size = 64, progresso = 100 }) {
  const id = `g${size}-${progresso}`;
  const y = 60 - (progresso / 100) * 52;
  const forma = "M32 4 C32 4 10 30 10 42 a22 22 0 0 0 44 0 C54 30 32 4 32 4Z";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs><clipPath id={id}><path d={forma} /></clipPath></defs>
      <path d={forma} fill="var(--mist)" />
      <rect x="0" y={y} width="64" height="64" fill="var(--water)" clipPath={`url(#${id})`} />
      <path d={forma} fill="none" stroke="var(--ink)" strokeWidth="3" />
    </svg>
  );
}
