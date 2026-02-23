import type { Translations } from "@/lib/i18n";
import type { ReactNode } from "react";

export function PrivacyPolicy({ t }: { t: Translations }): ReactNode {
  return (
    <section className="relative w-full bg-background text-foreground">
      <div className="flex items-center justify-center px-6 sm:px-8">
        <div className="w-full max-w-270">
          <div className="px-8 sm:px-12 py-24 lg:py-32">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
                {t.privacy.title}
              </h1>
              <p className="text-sm text-foreground/50 mb-12">
                {t.privacy.effectiveDate}
              </p>

              <div className="space-y-10">
                {t.privacy.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-lg font-semibold text-foreground mb-3">
                      {section.heading}
                    </h2>
                    <div className="text-sm leading-relaxed text-foreground/70 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
