"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";

const links = [
  { href: "/#about", label: "عنّي" },
  { href: "/#services", label: "بساعدك في إيه" },
  { href: "/#sessions", label: "الجلسات" },
  { href: "/#articles", label: "مقالات" },
  { href: "/#faq", label: "أسئلة شائعة" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm text-muted lg:flex" aria-label="القائمة الرئيسية">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#booking"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-ink transition hover:opacity-90 sm:inline-block"
          >
            احجز جلسة
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-bg px-4 pb-5 lg:hidden" aria-label="القائمة">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#booking"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-primary py-3 text-center font-medium text-primary-ink"
          >
            احجز جلسة
          </Link>
        </nav>
      )}
    </header>
  );
}
