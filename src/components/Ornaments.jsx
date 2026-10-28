export const Flower = ({ className = "" }) => (
  <svg className={"flower " + className} viewBox="-50 -50 100 100" aria-hidden="true">
    {[0, 72, 144, 216, 288].map((a) => (
      <ellipse key={a} rx="16" ry="30" cy="-22" transform={`rotate(${a})`} fill="#a3122a" stroke="#d4af37" strokeWidth="1.2" />
    ))}
    <circle r="9" fill="#d4af37" />
  </svg>
);
export const Chandelier = () => (
  <svg className="chandelier" viewBox="0 0 120 90" aria-hidden="true">
    <path d="M60 0v22M20 40q40 30 80 0M60 22v18M30 52v10M60 58v14M90 52v10" fill="none" stroke="#d4af37" strokeWidth="2" />
    <g fill="#ffd978"><circle cx="30" cy="66" r="4" /><circle cx="60" cy="76" r="4" /><circle cx="90" cy="66" r="4" /><path d="M60 14l8 10-8 10-8-10z" /></g>
  </svg>
);
export const Petals = () => (
  <div className="petals" aria-hidden="true">
    {Array.from({ length: 10 }, (_, i) => (
      <span key={i} style={{ left: `${i * 10 + 3}%`, animationDelay: `${(i * 1.3) % 7}s`, animationDuration: `${9 + (i % 4) * 2}s` }} />
    ))}
  </div>
);
