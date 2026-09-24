import Image from "next/image";
import Link from "next/link";
import { LeafPattern, Sprig } from "@/components/Art";
import { Eyebrow } from "@/components/Eyebrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { SessionMockup } from "@/components/SessionMockup";
import { SessionsBooking } from "@/components/SessionsBooking";
import { articles } from "@/lib/articles";
import { faqs, services, site, steps, whatsappLink } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${site.name} - ${site.title}`,
  description: site.tagline,
  url: site.url,
  image: `${site.url}${site.logoFull}`,
  telephone: `+${site.whatsapp}`,
  areaServed: ["EG", "SA", "AE", "KW", "QA", "BH", "OM"],
  availableLanguage: "ar",
  founder: { "@type": "Person", name: site.name, jobTitle: site.title },
};

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-soft via-gold-soft to-accent-soft" />
      <div className="absolute inset-6 animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-gold/60" />
      <div className="absolute inset-14 overflow-hidden rounded-full bg-surface/60 shadow-inner">
        <Image
          src={site.photo ?? "/images/logo-mark-lg.png"}
          alt={site.photo ? site.name : ""}
          fill
          priority
          sizes="(min-width: 1024px) 380px, 80vw"
          className={site.photo ? "object-cover" : "object-contain p-6"}
        />
      </div>
      <Sprig className="absolute -end-4 bottom-2 h-40 -rotate-12 sm:-end-8" />

      <div className="absolute -start-2 bottom-12 flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-lg sm:-start-8">
        <span className="grid size-9 place-items-center rounded-full bg-primary-soft text-primary">
          <Icon name="lock" className="size-5" />
        </span>
        <span className="text-sm font-medium">سرية تامة</span>
      </div>
      <div className="absolute -end-2 top-10 flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 shadow-lg sm:-end-6">
        <span className="grid size-9 place-items-center rounded-full bg-accent-soft text-accent">
          <Icon name="video" className="size-5" />
        </span>
        <span className="text-sm font-medium">أونلاين من أي مكان</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <LeafPattern className="pointer-events-none absolute inset-0 size-full" />
          <div className="pointer-events-none absolute -top-40 start-1/3 size-[36rem] rounded-full bg-primary-soft blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -end-20 size-[28rem] rounded-full bg-accent-soft blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-2 lg:pt-20 lg:pb-28">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative size-2 rounded-full bg-primary" />
                </span>
                متاح حجز جلسات الأسبوع ده
              </p>
              <h1 className="mt-6 font-display text-4xl leading-[1.35] font-bold sm:text-5xl sm:leading-[1.3]">
                مساحة آمنة
                <br />
                <span className="text-primary">تسمعك وتفهمك</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                أنا {site.name}، {site.title}. بساعدك تفهم اللي جواك، وتتعامل مع القلق والضغوط، وترجع تحس بالهدوء
                والسيطرة على حياتك، من خلال جلسات أونلاين سرية.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#booking"
                  className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-ink shadow-sm transition hover:opacity-90"
                >
                  احجز جلستك الأولى
                </a>
                <a
                  href="#how"
                  className="rounded-full border border-line bg-surface px-7 py-3.5 font-medium transition hover:border-primary"
                >
                  إزاي بنبدأ؟
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <Icon name="globe" className="size-5 text-primary" />
                  مصر والخليج
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="video" className="size-5 text-primary" />
                  {site.sessionMinutes} دقيقة لكل جلسة
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="lock" className="size-5 text-primary" />
                  خصوصية كاملة
                </li>
              </ul>
            </div>
            <HeroVisual />
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative overflow-hidden border-y border-line bg-surface">
          <Sprig className="pointer-events-none absolute -start-6 -bottom-10 h-64 rotate-12 opacity-30" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gold-soft" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lg">
                <Image
                  src={site.photo ?? site.aboutImage}
                  alt={site.photo ? site.name : "ركن هادي للجلسات"}
                  fill
                  sizes="(min-width: 640px) 384px, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -end-5 -bottom-5 size-24 rounded-full bg-surface p-2 shadow-lg">
                <Image src={site.logo} alt="" width={96} height={96} className="size-full object-contain" />
              </div>
            </div>
            <div>
              <Eyebrow>عنّي</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                مش لازم تكون في أزمة
                <br />
                علشان تستحق حد يسمعك
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  بشتغل مع الناس اللي حاسة إنها تايهة، أو مضغوطة، أو محتاجة تفهم نفسها أكتر. هدفي إن كل جلسة تبقى مساحة
                  هادية تتكلم فيها براحتك من غير أحكام، وتطلع منها بخطوة عملية تقدر تبدأ بيها.
                </p>
                <ul className="space-y-3 pt-2 text-base">
                  {site.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                        <Icon name="check" className="size-3.5" />
                      </span>
                      <span className="text-ink">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>بساعدك في إيه</Eyebrow>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            أيًا كان اللي شايله، مش لازم تشيله لوحدك
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-3xl border border-line bg-surface p-3 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
                </div>
                <div className="px-4 pt-5 pb-4">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="relative overflow-hidden bg-primary text-primary-ink">
          <div className="pointer-events-none absolute -top-32 -end-32 size-96 rounded-full border border-gold/30" />
          <div className="pointer-events-none absolute -top-20 -end-20 size-72 rounded-full border border-gold/20" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
            <div>
              <Eyebrow light>إزاي بنبدأ</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">٤ خطوات بسيطة</h2>
              <ol className="mt-10 grid gap-8 sm:grid-cols-2">
                {steps.map((s, i) => (
                  <li key={s.title}>
                    <span className="grid size-11 place-items-center rounded-full border border-gold/60 font-display text-lg text-gold-soft">
                      {(i + 1).toLocaleString("ar-EG")}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 leading-relaxed opacity-80">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="pb-6 ps-6">
              <SessionMockup />
            </div>
          </div>
        </section>

        <SessionsBooking />

        {/* Articles */}
        <section id="articles" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <Eyebrow>مقالات</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">أدوات تساعدك النهارده</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 360px, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted">قراءة {a.minutes.toLocaleString("ar-EG")} دقايق</p>
                  <h3 className="mt-2 font-display text-lg leading-snug font-semibold group-hover:text-primary">{a.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
            <Eyebrow center>أسئلة شائعة</Eyebrow>
            <h2 className="mt-2 text-center font-display text-3xl font-semibold sm:text-4xl">عندك سؤال؟</h2>
            <div className="mt-12 divide-y divide-line border-y border-line">
              {faqs.map((f, i) => (
                <details key={f.q} className="group py-5" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Icon name="chevron" className="size-5 shrink-0 text-muted transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-accent/40 bg-accent-soft p-5 text-sm leading-relaxed">
              <strong className="font-semibold">لو في خطر فوري على حياتك أو حياة حد:</strong> الجلسات دي مش خدمة طوارئ.
              كلّم الإسعاف فوراً (مصر ١٢٣، السعودية ٩٩٧، الإمارات ٩٩٨) أو روح أقرب مستشفى.
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-ink sm:px-12">
            <Sprig className="pointer-events-none absolute -start-4 -bottom-8 h-56 rotate-12 opacity-60" />
            <Sprig className="pointer-events-none absolute -end-4 -top-8 h-48 rotate-[200deg] opacity-40" />
            <h2 className="relative font-display text-3xl font-semibold sm:text-4xl">جاهز تبدأ؟</h2>
            <p className="relative mx-auto mt-4 max-w-md opacity-85">
              لو عندك أي سؤال قبل الحجز، ابعتلي على واتساب وهرد عليك.
            </p>
            <a
              href={whatsappLink(`أهلاً أ. ${site.shortName}، عندي سؤال قبل الحجز.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-surface px-7 py-3.5 font-medium text-primary transition hover:opacity-90"
            >
              <Icon name="whatsapp" className="size-5" />
              تواصل على واتساب
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
