import Image from "next/image";
import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { Icon } from "./Icon";

export function Footer() {
  const social = Object.entries(site.social).filter(([, url]) => url);
  return (
    <>
      <footer className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div>
            <Image src={site.logoFull} alt={site.name} width={140} height={155} className="h-auto w-32" />
          </div>
          <div className="text-sm">
            <p className="font-display text-base font-semibold">روابط</p>
            <ul className="mt-4 grid gap-2 text-muted">
              <li><Link href="/#about" className="hover:text-ink">عنّي</Link></li>
              <li><Link href="/#sessions" className="hover:text-ink">الجلسات</Link></li>
              <li><Link href="/#articles" className="hover:text-ink">مقالات</Link></li>
              <li><Link href="/#faq" className="hover:text-ink">أسئلة شائعة</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-display text-base font-semibold">تواصل</p>
            <ul className="mt-4 grid gap-2 text-muted">
              <li>
                <a href={whatsappLink(`أهلاً أ. ${site.shortName}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-ink">
                  <Icon name="whatsapp" className="size-4" />
                  <span dir="ltr">{site.whatsappDisplay}</span>
                </a>
              </li>
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
                </li>
              )}
              {social.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-ink">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted sm:px-6">
            © {new Date().getFullYear()} {site.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      <a
        href={whatsappLink(`أهلاً أ. ${site.shortName}`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل على واتساب"
        className="fixed bottom-5 start-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <Icon name="whatsapp" className="relative size-7" />
      </a>
    </>
  );
}
