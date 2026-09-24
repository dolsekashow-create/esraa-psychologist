import type { ReactNode } from "react";

// نفس لمسة اللوجو: كلمة وردية بين خطين دهبي
export function Eyebrow({
  children,
  center = false,
  light = false,
}: {
  children: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-sm font-medium ${center ? "justify-center" : ""} ${
        light ? "text-gold-soft" : "text-accent"
      }`}
    >
      <span className="h-px w-8 bg-gold" />
      {children}
      {center && <span className="h-px w-8 bg-gold" />}
    </p>
  );
}
