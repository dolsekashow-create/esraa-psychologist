// رسومات الموقع بألوان اللوجو: أخضر، ودهبي، ووردي

const ROSE = "#e3a3a8";

export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} aria-hidden="true" fill="none">
      <path d="M60 196C58 150 62 100 78 20" className="stroke-gold" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M62 150c-22-2-36-18-38-40 22 2 36 18 38 40Z" className="fill-primary" opacity=".9" />
      <path d="M66 112c20-6 34-24 34-46-20 6-34 24-34 46Z" fill={ROSE} opacity=".85" />
      <path d="M70 76c-18-4-28-20-28-38 18 4 28 20 28 38Z" className="fill-primary" opacity=".7" />
      <path d="M76 40c12-8 18-22 16-36-12 8-18 22-16 36Z" className="fill-gold" opacity=".8" />
    </svg>
  );
}

// نقط وأوراق خفيفة في الخلفية
export function LeafPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id="leaves" width="96" height="96" patternUnits="userSpaceOnUse">
          <path d="M20 30c-6-1-9-5-9-11 6 1 9 5 9 11Z" className="fill-primary" opacity=".07" />
          <path d="M70 76c5-2 8-6 8-12-5 2-8 6-8 12Z" className="fill-accent" opacity=".08" />
          <circle cx="68" cy="22" r="1.4" className="fill-gold" opacity=".35" />
          <circle cx="24" cy="78" r="1.1" className="fill-gold" opacity=".3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#leaves)" />
    </svg>
  );
}

export type ArtKind = "breath" | "thoughts" | "path";

export function ArticleArt({ kind, className = "" }: { kind: ArtKind; className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" className="fill-primary-soft" />
      {kind === "breath" && (
        <g fill="none">
          {[90, 70, 50, 30].map((r, i) => (
            <circle key={r} cx="200" cy="120" r={r} className={i % 2 ? "stroke-gold" : "stroke-primary"} strokeWidth="1.5" opacity={0.25 + i * 0.2} />
          ))}
          <circle cx="200" cy="120" r="14" fill={ROSE} />
          <path d="M40 200c40-20 80-20 120 0s80 20 120 0 80-20 120 0" className="stroke-primary" strokeWidth="1.5" opacity=".35" />
        </g>
      )}
      {kind === "thoughts" && (
        <g>
          <circle cx="200" cy="150" r="46" className="fill-primary" />
          <path d="M200 196v30" className="stroke-primary" strokeWidth="6" strokeLinecap="round" />
          {[
            [120, 70, 18],
            [175, 48, 12],
            [240, 58, 22],
            [300, 88, 14],
            [92, 118, 10],
            [312, 138, 9],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} className={i % 3 === 0 ? "fill-gold" : i % 3 === 1 ? "fill-accent" : "fill-primary"} opacity={0.35 + (i % 3) * 0.15} />
          ))}
          <path d="M170 130c10-12 20-12 30 0s20 12 30 0" className="stroke-primary-soft" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      )}
      {kind === "path" && (
        <g fill="none">
          <circle cx="310" cy="64" r="26" className="fill-gold" opacity=".55" />
          <path d="M0 200c80-10 120-60 200-60s140 40 200 20v80H0Z" className="fill-primary" opacity=".85" />
          <path d="M0 220c90-6 150-40 220-40s120 20 180 12v48H0Z" className="fill-primary" />
          <path d="M150 240c20-30 40-60 70-96" className="stroke-gold" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
          <path d="M80 190c-10-2-15-9-15-18 10 2 15 9 15 18Z" fill={ROSE} />
          <path d="M92 186c8-4 12-11 11-19-8 4-12 11-11 19Z" className="fill-primary-soft" />
        </g>
      )}
    </svg>
  );
}
