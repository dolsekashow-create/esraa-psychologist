"use client";

import { useMemo, useState, useSyncExternalStore, type FormEvent } from "react";
import { schedule, sessionTypes, site, whatsappLink } from "@/lib/site";
import { Eyebrow } from "./Eyebrow";
import { Icon } from "./Icon";

const countries = ["مصر", "السعودية", "الإمارات", "الكويت", "قطر", "البحرين", "عُمان", "دولة أخرى"];
const times = ["الضهر", "العصر", "بالليل"];

type Day = { key: string; weekday: string; date: string };

// أقرب أيام عمل جاية، بتتحسب على جهاز الزائر علشان تبقى دايماً محدّثة
function upcomingDays(count: number): Day[] {
  const out: Day[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (out.length < count) {
    if ((schedule.days as readonly number[]).includes(d.getDay())) {
      out.push({
        key: d.toISOString().slice(0, 10),
        weekday: d.toLocaleDateString("ar-EG", { weekday: "long" }),
        date: d.toLocaleDateString("ar-EG", { day: "numeric", month: "long" }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

const noopSubscribe = () => () => {};

export function SessionsBooking() {
  const [type, setType] = useState<string>(sessionTypes[0].id);
  // التاريخ بيتقرا من جهاز الزائر بس، علشان الصفحة المبنية مسبقاً متعرضش أيام قديمة
  const today = useSyncExternalStore(
    noopSubscribe,
    () => new Date().toDateString(),
    () => null,
  );
  const days = useMemo(() => (today ? upcomingDays(6) : []), [today]);
  const [picked, setDay] = useState<string>("");
  const day = picked || days[0]?.key || "";

  function choose(id: string) {
    setType(id);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const chosenType = sessionTypes.find((s) => s.id === type)!;
    const chosenDay = days.find((d) => d.key === day);
    const lines = [
      `أهلاً أ. ${site.shortName}، حابب أحجز.`,
      ``,
      `الاسم: ${data.get("name")}`,
      `الدولة: ${data.get("country")}`,
      `نوع الجلسة: ${chosenType.name}`,
      chosenDay ? `اليوم: ${chosenDay.weekday} ${chosenDay.date}` : "",
      `الوقت المناسب: ${data.get("time")}`,
    ].filter((l, i) => l || i === 1);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <>
      <section id="sessions" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow>الجلسات</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">كل رحلة بتبدأ بفهم</h2>
          <p className="mt-3 text-muted">
            كل جلسة مدتها {site.sessionMinutes} دقيقة أونلاين. ولأن كل حالة مختلفة، <strong className="text-ink">السعر بيتحدد بعد جلسة التقييم</strong>{" "}
            حسب طبيعة الحالة وعدد الجلسات وبلد الإقامة.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {sessionTypes.map((s) => (
            <article
              key={s.id}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                s.featured ? "border-primary bg-primary-soft" : "border-line bg-surface"
              }`}
            >
              {s.featured && (
                <span className="absolute -top-3 start-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  ابدأ من هنا
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{s.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{s.note}</p>
              <p className="mt-6 flex items-center gap-2 text-sm text-primary">
                <Icon name="check" className="size-4" />
                السعر حسب التشخيص
              </p>
              <button
                type="button"
                onClick={() => choose(s.id)}
                className={`mt-6 rounded-full py-3 font-medium transition ${
                  s.featured
                    ? "bg-primary text-primary-ink hover:opacity-90"
                    : "border border-line hover:border-primary hover:text-primary"
                }`}
              >
                احجز {s.name}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" className="relative overflow-hidden bg-surface-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Eyebrow>الحجز</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">خطوتك الأولى أسهل مما تتخيل</h2>
            <p className="mt-4 text-muted">
              اختار اليوم والوقت، وهيتفتح واتساب برسالة جاهزة. هنرد عليك ونثبّت الميعاد، ونبلغك بالسعر وطريقة الدفع.
            </p>
            <dl className="mt-8 grid gap-3 text-sm">
              <div className="flex items-center gap-3 rounded-2xl bg-surface p-4">
                <Icon name="video" className="size-5 shrink-0 text-primary" />
                <dt className="sr-only">مواعيد العمل</dt>
                <dd>
                  مواعيد العمل من {schedule.from} لـ {schedule.to}
                </dd>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-surface p-4">
                <Icon name="whatsapp" className="size-5 shrink-0 text-primary" />
                <dt className="sr-only">واتساب</dt>
                <dd dir="ltr" className="font-medium tabular-nums">
                  {site.whatsappDisplay}
                </dd>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-surface p-4">
                <Icon name="lock" className="mt-0.5 size-5 shrink-0 text-primary" />
                <dt className="sr-only">الخصوصية</dt>
                <dd className="text-muted">مش محتاج تكتب أي تفاصيل عن مشكلتك هنا. هنتكلم في كل حاجة في الجلسة.</dd>
              </div>
            </dl>
          </div>

          <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl bg-surface p-6 shadow-sm sm:p-8 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium">الاسم</span>
                <input
                  name="name"
                  required
                  autoComplete="given-name"
                  placeholder="الاسم الأول يكفي"
                  className="rounded-xl border border-line bg-bg px-4 py-3 outline-none focus:border-primary"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium">الدولة</span>
                <select name="country" className="rounded-xl border border-line bg-bg px-4 py-3 outline-none focus:border-primary">
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-medium">نوع الجلسة</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="rounded-xl border border-line bg-bg px-4 py-3 outline-none focus:border-primary"
              >
                {sessionTypes.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </label>

            <fieldset>
              <legend className="mb-2 flex w-full items-center justify-between text-sm font-medium">
                أقرب الأيام المتاحة
                <span className="flex items-center gap-1.5 text-xs font-normal text-primary">
                  <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                  متاح الحجز
                </span>
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {days.length === 0
                  ? Array.from({ length: 6 }, (_, i) => <span key={i} className="h-16 animate-pulse rounded-xl bg-surface-2" />)
                  : days.map((d) => (
                      <label key={d.key} className="cursor-pointer">
                        <input
                          type="radio"
                          name="day"
                          value={d.key}
                          checked={day === d.key}
                          onChange={() => setDay(d.key)}
                          className="peer sr-only"
                        />
                        <span className="block rounded-xl border border-line py-2.5 text-center transition peer-checked:border-primary peer-checked:bg-primary-soft peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                          <span className="block text-sm font-medium">{d.weekday}</span>
                          <span className="block text-xs text-muted">{d.date}</span>
                        </span>
                      </label>
                    ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 text-sm font-medium">الوقت المناسب</legend>
              <div className="grid grid-cols-3 gap-2">
                {times.map((t, i) => (
                  <label key={t} className="cursor-pointer">
                    <input type="radio" name="time" value={t} defaultChecked={i === 2} className="peer sr-only" />
                    <span className="block rounded-xl border border-line py-3 text-center text-sm transition peer-checked:border-primary peer-checked:bg-primary-soft peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                      {t}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-medium text-primary-ink transition hover:opacity-90"
            >
              <Icon name="whatsapp" className="size-5" />
              ابعت طلب الحجز على واتساب
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
