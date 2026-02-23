import { Footer } from "@/components/footer";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { getTranslations } from "@/lib/i18n";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: `${t.privacy.title} — Hachimi`,
    description:
      locale === "zh"
        ? "Hachimi 隐私政策 — 了解我们如何收集、使用和保护你的数据。"
        : "Hachimi Privacy Policy — Learn how we collect, use, and protect your data.",
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        en: "/en/privacy",
        zh: "/zh/privacy",
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<ReactNode> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <main id="main-content" className="flex-1">
        <PrivacyPolicy t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
