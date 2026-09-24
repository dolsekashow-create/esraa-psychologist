"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

// شكل الجلسة من جوه: مكالمة فيديو بعداد وقت شغال
export function SessionMockup() {
  const [seconds, setSeconds] = useState(12 * 60 + 5);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s + 1) % (site.sessionMinutes * 60)), 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="relative mx-auto w-full max-w-md" dir="rtl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#16241e] shadow-2xl">
        <div className="flex items-center justify-between px-5 py-3 text-xs text-white/70">
          <span className="flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-[#e3a3a8]" />
            جلسة أونلاين
          </span>
          <span className="font-mono tabular-nums" dir="ltr">
            {mm}:{ss}
          </span>
        </div>

        <div className="relative mx-3 aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#2d5344] via-[#284a3d] to-[#1c3329]">
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative size-40">
              <div className="absolute -inset-3 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-[#c29a55]/40" />
              <Image src={site.logo} alt="" fill sizes="160px" className="object-contain drop-shadow-xl" />
            </div>
          </div>
          <span className="absolute start-3 bottom-3 rounded-full bg-black/35 px-3 py-1 text-xs text-white backdrop-blur">
            أ. {site.shortName}
          </span>

          <div className="absolute end-3 top-3 grid h-24 w-20 place-items-center rounded-xl border border-white/15 bg-[#f4ead8]/90">
            <svg viewBox="0 0 40 40" className="size-10 text-[#2d5344]" aria-hidden="true">
              <circle cx="20" cy="15" r="7" fill="currentColor" opacity=".55" />
              <path d="M6 38c1-9 7-14 14-14s13 5 14 14Z" fill="currentColor" opacity=".55" />
            </svg>
            <span className="absolute bottom-1 text-[10px] text-[#2d5344]">انت</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 py-4">
          {["video", "lock"].map((n) => (
            <span key={n} className="grid size-10 place-items-center rounded-full bg-white/10 text-white">
              <Icon name={n} className="size-5" />
            </span>
          ))}
          <span className="grid size-10 place-items-center rounded-full bg-[#c85a5a] text-white">
            <Icon name="close" className="size-5" />
          </span>
        </div>
      </div>

      <div className="absolute -start-6 -bottom-6 flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 text-ink shadow-xl">
        <span className="grid size-9 place-items-center rounded-full bg-primary-soft text-primary">
          <Icon name="lock" className="size-5" />
        </span>
        <span className="text-sm">
          <span className="block font-medium">اتصال آمن</span>
          <span className="block text-xs text-muted">محدش غيرنا في الجلسة</span>
        </span>
      </div>
    </div>
  );
}
