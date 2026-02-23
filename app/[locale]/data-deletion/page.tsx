import { Footer } from "@/components/footer";
import { LegalPageContent } from "@/components/legal-page";
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
    title: `${t.dataDeletion.title} — Hachimi`,
    description:
      locale === "zh"
        ? "了解如何删除你在 Hachimi 中的个人数据。"
        : "Learn how to delete your personal data from Hachimi.",
    alternates: {
      canonical: `/${locale}/data-deletion`,
      languages: {
        en: "/en/data-deletion",
        zh: "/zh/data-deletion",
      },
    },
  };
}

export default async function DataDeletionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<ReactNode> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <main id="main-content" className="flex-1">
        <LegalPageContent data={t.dataDeletion} />
      </main>
      <Footer t={t} />
    </>
  );
}
