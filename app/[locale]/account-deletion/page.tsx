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
    title: `${t.accountDeletion.title} — Hachimi`,
    description:
      locale === "zh"
        ? "了解如何删除你的 Hachimi 账号和所有关联数据。"
        : "Learn how to delete your Hachimi account and all associated data.",
    alternates: {
      canonical: `/${locale}/account-deletion`,
      languages: {
        en: "/en/account-deletion",
        zh: "/zh/account-deletion",
      },
    },
  };
}

export default async function AccountDeletionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<ReactNode> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <main id="main-content" className="flex-1">
        <LegalPageContent data={t.accountDeletion} />
      </main>
      <Footer t={t} />
    </>
  );
}
