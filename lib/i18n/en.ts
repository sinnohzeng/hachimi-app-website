import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    features: "Features",
    tech: "Tech",
    download: "Download",
  },
  langSwitch: {
    en: "EN",
    zh: "中文",
  },

  hero: {
    badge: "v2.8.0 — Stats redesign + dark mode fixes",
    headline1: "Raise cats.",
    headline2: "Build habits.",
    description:
      "Every habit comes with a virtual kitten. Stay focused, earn XP and coins, and watch your cat evolve. All AI runs locally on your device.",
    ctaDownload: "Download APK",
    ctaSource: "View Source",
    securityBadge: "Privacy-first. All AI runs on-device.",
  },

  featureCards: {
    title: "Everything you need",
    subtitle: "to build better habits",
    cards: [
      {
        title: "Every habit, a unique companion",
        description:
          "Adopt a kitten from 3 randomly generated candidates. 15 pelt patterns, 19 colors, 21 eye colors, and 6 distinct personalities.",
      },
      {
        title: "Stay focused, earn rewards",
        description:
          "Countdown and stopwatch modes with persistent Android foreground service. Earn XP and 10 coins per minute of focus.",
      },
      {
        title: "Track your growth",
        description:
          "Weekly trend charts, 91-day activity heatmap, and paginated session history. See your progress at a glance.",
      },
    ],
  },

  featureHighlight: {
    title1: "Meet your companion,",
    title2: "watch them grow",
    description:
      "Each cat has its own personality, mood, and growth stage. As you stay consistent with your habits, your companion levels up and evolves — a living reflection of your progress.",
    features: [
      "AI cat chat — talk to your cats in their unique personality",
      "Auto-generated daily diary blending mood and focus data",
      "100+ accessories across 5 price tiers in the shop",
    ],
    cta: "Explore features",
    phonePlaceholder: "Cat companion detail page",
  },

  principles: {
    badge: "Why Hachimi?",
    title1: "Habits that stick,",
    title2: "powered by attachment",
    description:
      "Hachimi turns discipline into care. When your habits keep a virtual kitten alive and growing, skipping a day feels different.",
    cta: "Download for Android",
    cards: [
      "Attachment Motivation",
      "Privacy-First AI",
      "Offline Capable",
      "Beautiful Design",
    ],
  },

  stats: {
    items: [
      { label: "Cat breeds" },
      { label: "Accessories" },
      { label: "Languages" },
      { label: "Services" },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about Hachimi.",
    items: [
      {
        question: "Is my data safe?",
        answer:
          "All your data is stored in Firebase with strict security rules. AI chat and diary features run entirely on-device using a local LLM — no data ever leaves your phone for AI processing.",
      },
      {
        question: "Is Hachimi available on iOS?",
        answer:
          "Currently Hachimi is Android-only. iOS support is planned for a future release. The codebase is built with Flutter, so cross-platform deployment is technically ready.",
      },
      {
        question: "Is Hachimi open source?",
        answer:
          "The source code is publicly available on GitHub for portfolio and reference purposes. However, it is not licensed for redistribution or commercial use. See the LICENSE file for full terms.",
      },
      {
        question: "How does the AI chat work without internet?",
        answer:
          "Hachimi bundles a Qwen3-1.7B language model that runs locally via llama_cpp_dart. Your cats respond with personality-flavored messages — all inference happens on your device with zero cloud dependency.",
      },
      {
        question: "Does it cost anything?",
        answer:
          "Hachimi is completely free. There are no in-app purchases, no ads, and no subscription fees. The in-app coin economy is earned through focus sessions and daily check-ins.",
      },
    ],
    stillHaveQuestions: "Still have questions?",
    contact: "Check the docs on GitHub",
  },

  finalCta: {
    headline: "Ready to meet your first cat?",
    cta: "Download for Android",
  },

  footer: {
    copyright: `\u00A9 2025\u20132026 Zixuan Zeng. All Rights Reserved.`,
    links: [
      {
        title: "Product",
        items: [
          { label: "Features", href: "#features" },
          { label: "Tech Stack", href: "#tech" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Developer",
        items: [
          { label: "GitHub", href: "https://github.com/sinnohzeng/hachimi-app" },
          { label: "Docs", href: "https://github.com/sinnohzeng/hachimi-app/tree/main/docs" },
          { label: "Changelog", href: "https://github.com/sinnohzeng/hachimi-app/blob/main/CHANGELOG.md" },
        ],
      },
      {
        title: "Links",
        items: [
          { label: "Portfolio", href: "https://zixuan.net" },
          { label: "Website Source", href: "https://github.com/sinnohzeng/hachimi-app-website" },
        ],
      },
    ],
    legal: [
      { label: "License", href: "https://github.com/sinnohzeng/hachimi-app/blob/main/LICENSE" },
    ],
  },
};
