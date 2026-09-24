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
