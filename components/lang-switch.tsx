"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function LangSwitch({
  locale,
  variant = "light",
}: {
  locale: string;
  variant?: "light" | "dark";
}): ReactNode {
  const pathname = usePathname();
  const otherLocale = locale === "zh" ? "en" : "zh";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const isLight = variant === "light";
  const activeClass = isLight
    ? "text-white font-medium"
    : "text-foreground font-medium";
  const inactiveClass = isLight
    ? "text-white/50 hover:text-white/80"
    : "text-foreground/50 hover:text-foreground/80";
  const separatorClass = isLight ? "text-white/30" : "text-foreground/30";

  return (
    <div className="flex items-center gap-1 text-sm">
      <a
        href={locale === "en" ? pathname : otherPath}
        className={`px-2 py-1 rounded transition-colors ${locale === "en" ? activeClass : inactiveClass}`}
      >
        EN
      </a>
      <span className={separatorClass}>|</span>
      <a
        href={locale === "zh" ? pathname : otherPath}
        className={`px-2 py-1 rounded transition-colors ${locale === "zh" ? activeClass : inactiveClass}`}
      >
        中文
      </a>
    </div>
  );
}
