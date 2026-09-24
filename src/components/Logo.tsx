import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

// علامة احتياطية بألوان اللوجو لحد ما صورة اللوجو تتضاف
export function LogoMark({ className = "size-10" }: { className?: string }) {
  if (site.logo) {
    return (
      <span className={`relative block ${className}`}>
        <Image src={site.logo} alt="" fill sizes="160px" className="object-contain" />
      </span>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="24" className="fill-primary" />
      <path d="M24 37V22" className="stroke-gold" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 27c-7.5 0-11-5-11-11 7 0 11 4 11 11Z" className="fill-bg" />
      <path d="M24 23c0-7 4-11.5 11-11.5 0 7-4 11.5-11 11.5Z" fill="#e3a3a8" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
      <LogoMark className="size-11" />
      <span className="leading-tight">
        <span className="block font-display text-xl font-bold text-primary">{site.shortName}</span>
        <span className="block text-xs text-accent">{site.title}</span>
      </span>
    </Link>
  );
}
