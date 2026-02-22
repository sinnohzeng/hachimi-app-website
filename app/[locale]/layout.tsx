import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { SkipToContent } from "@/components/skip-to-content";
import { ThemeSwitch } from "@/components/theme-switch";
import { generateStaticParams as genParams, getTranslations } from "@/lib/i18n";
import type { ReactNode } from "react";

export { genParams as generateStaticParams };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <Providers>
      <SkipToContent />
      <Header locale={locale} t={t} />
      <ThemeSwitch />
      {children}
    </Providers>
  );
}
