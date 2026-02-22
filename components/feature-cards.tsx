"use client";

import { type ReactNode } from "react";
import { ArrowRight, Cat, Timer, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import type { Translations } from "@/lib/i18n";

const ease = [0.16, 1, 0.3, 1] as const;

const cardIcons = [
  <Cat key="cat" className="w-8 h-8 text-accent" />,
  <Timer key="timer" className="w-8 h-8 text-accent" />,
  <BarChart3 key="chart" className="w-8 h-8 text-accent" />,
];

function ScreenshotPlaceholder({
  label,
  icon,
}: {
  label: string;
  icon: ReactNode;
}): ReactNode {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-muted/50">
      <div className="p-3 rounded-2xl bg-accent/10">{icon}</div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export function FeatureCards({ t }: { t: Translations }): ReactNode {
  const placeholderLabels = ["Cat Adoption", "Focus Timer", "Stats Dashboard"];

  return (
    <section
      id="features"
      className="relative w-full bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif text-foreground"
          >
            {t.featureCards.title}
            <br />
            <span className="italic">{t.featureCards.subtitle}</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.featureCards.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
              className="group flex flex-col bg-muted/50 border border-border rounded-sm overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-[border-color,box-shadow]"
            >
              <div className="relative h-56 sm:h-64 bg-background">
                <ScreenshotPlaceholder
                  label={placeholderLabels[index] ?? ""}
                  icon={cardIcons[index] ?? null}
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="text-lg font-medium font-serif text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
                <div className="flex items-center gap-1 mt-4 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
