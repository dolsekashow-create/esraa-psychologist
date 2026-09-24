import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleArt } from "@/components/Art";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { articles, getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt },
  };
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const others = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link href="/#articles" className="text-sm text-muted hover:text-primary">
          → كل المقالات
        </Link>
        <h1 className="mt-6 font-display text-3xl leading-snug font-bold sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{article.excerpt}</p>
        <p className="mt-4 text-sm text-muted">
          أ. {site.shortName} · قراءة {article.minutes.toLocaleString("ar-EG")} دقايق
        </p>

        <ArticleArt kind={article.art} className="mt-10 aspect-[5/3] w-full overflow-hidden rounded-3xl" />

        <div className="mt-10 space-y-8 text-lg leading-loose">
          {article.sections.map((s, i) => (
            <section key={i}>
              {s.heading && <h2 className="mb-3 font-display text-2xl font-semibold text-primary">{s.heading}</h2>}
              {s.paragraphs?.map((p) => <p key={p} className="mt-3">{p}</p>)}
              {s.list && (
                <ul className="mt-4 space-y-2">
                  {s.list.map((li) => (
                    <li key={li} className="flex items-start gap-3">
                      <span className="mt-3 size-2 shrink-0 rounded-full bg-gold" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-primary-soft p-8 text-center">
          <p className="font-display text-xl font-semibold">محتاج حد يمشي معاك الخطوات دي؟</p>
          <Link href="/#booking" className="mt-5 inline-block rounded-full bg-primary px-7 py-3 font-medium text-primary-ink hover:opacity-90">
            احجز جلسة تقييم
          </Link>
        </div>

        <div className="mt-16">
          <p className="font-display text-lg font-semibold">مقالات تانية</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {others.map((a) => (
              <Link key={a.slug} href={`/articles/${a.slug}`} className="rounded-2xl border border-line bg-surface p-5 transition hover:border-primary">
                <p className="font-medium">{a.title}</p>
                <p className="mt-1 text-xs text-muted">قراءة {a.minutes.toLocaleString("ar-EG")} دقايق</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
