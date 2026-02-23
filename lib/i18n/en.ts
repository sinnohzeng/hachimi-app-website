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
    badge: "v2.16.0 — Material Design 3 overhaul",
    headline1: "Raise cats.",
    headline2: "Build habits.",
    description:
      "Every habit comes with a virtual kitten. Stay focused, earn XP and coins, and watch your cat evolve. Optional AI companion powered by cloud providers.",
    ctaDownload: "Download APK",
    ctaSource: "View Source",
    securityBadge: "Privacy-first. AI features are optional and opt-in.",
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
      "Privacy-First Design",
      "Offline Capable",
      "Beautiful Design",
    ],
  },

  stats: {
    items: [
      { label: "Cat breeds" },
      { label: "Accessories" },
      { label: "Languages" },
      { label: "Achievements" },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about Hachimi.",
    items: [
      {
        question: "Is my data safe?",
        answer:
          "All your data is stored in Firebase with strict security rules. AI features are optional and opt-in — when enabled, chat messages are sent to cloud AI providers (MiniMax or Google Gemini) for processing. A privacy disclosure is shown before first use. You can delete your account and all associated data at any time.",
      },
      {
        question: "Is Hachimi available on iOS?",
        answer:
          "Currently Hachimi is Android-only, available as a direct APK download from GitHub. iOS support is planned for a future release. The codebase is built with Flutter, so cross-platform deployment is technically ready.",
      },
      {
        question: "Is Hachimi open source?",
        answer:
          "The source code is publicly available on GitHub for portfolio and reference purposes. However, it is not licensed for redistribution or commercial use. See the LICENSE file for full terms.",
      },
      {
        question: "How does the AI chat work?",
        answer:
          "Hachimi connects to cloud AI providers — you can choose between MiniMax and Google Gemini in Settings. Your cats respond with personality-flavored messages generated in real-time. AI features are entirely optional and disabled by default.",
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
      { label: "Privacy Policy", href: "/en/privacy" },
      { label: "License", href: "https://github.com/sinnohzeng/hachimi-app/blob/main/LICENSE" },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    effectiveDate: "Effective date: February 23, 2026",
    sections: [
      {
        heading: "Introduction",
        content:
          "Hachimi (\u201Cwe\u201D, \u201Cour\u201D, or \u201Cthe app\u201D) is a habit-tracking app with virtual cat companions, built by Zixuan Zeng. This Privacy Policy explains how we collect, use, and protect your information when you use Hachimi. By using the app, you agree to the practices described in this policy.",
      },
      {
        heading: "Information we collect",
        content:
          "Account information: When you create an account, we collect your email address and display name via Firebase Authentication.\n\nHabit and focus data: Your habits, focus sessions, quest progress, cat companions, coins, and inventory are stored in Cloud Firestore to power the core app experience.\n\nAI chat content (optional): If you enable AI features, your chat messages with cat companions and diary generation requests are sent to cloud AI providers (MiniMax or Google Gemini, depending on your choice) for processing. AI features are disabled by default and require explicit opt-in with a privacy disclosure.\n\nDevice and usage data: We automatically collect crash reports (Firebase Crashlytics), app usage events (Firebase Analytics), performance data (Firebase Performance), and push notification tokens (Firebase Cloud Messaging) to improve the app experience.",
      },
      {
        heading: "How we use your information",
        content:
          "We use the information we collect to:\n\n\u2022 Provide and maintain the core habit-tracking and cat-raising experience\n\u2022 Generate AI-powered cat chat responses and diary entries (when enabled)\n\u2022 Send push notifications for habit reminders (when enabled)\n\u2022 Analyze app usage patterns and fix crashes\n\u2022 Monitor app performance and improve reliability",
      },
      {
        heading: "Third-party services",
        content:
          "We share data with the following third-party services:\n\nGoogle Firebase: Authentication, Cloud Firestore (data storage), Analytics, Crashlytics (crash reports), Performance Monitoring, Cloud Messaging (push notifications), and Remote Config. Google\u2019s privacy policy applies to data processed by Firebase services.\n\nMiniMax (optional): If you select MiniMax as your AI provider, chat messages are sent to MiniMax\u2019s API for generating responses. MiniMax\u2019s privacy policy applies to this data.\n\nGoogle Gemini (optional): If you select Gemini as your AI provider, chat messages are sent to Google\u2019s Gemini API for generating responses. Google\u2019s AI privacy terms apply.\n\nWe do not sell your personal data. We do not use third-party advertising services.",
      },
      {
        heading: "Data security",
        content:
          "All data is encrypted in transit using TLS/HTTPS. Cloud Firestore encrypts data at rest. Firebase security rules restrict data access to authenticated users for their own documents. API keys for AI providers are injected at build time and never stored on-device in plain text.",
      },
      {
        heading: "Your rights",
        content:
          "Access and export: You can view all your data within the app (habits, sessions, cats, coins, chat history).\n\nDeletion: You can delete your account and all associated data through the app\u2019s account deletion flow (Settings \u2192 Account \u2192 Delete Account). This permanently removes your authentication record and all Firestore data.\n\nOpt-out: AI features can be disabled at any time in Settings. Push notifications can be managed through your device\u2019s system settings.",
      },
      {
        heading: "Children\u2019s privacy",
        content:
          "Hachimi is not designed for or directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us so we can take appropriate action.",
      },
      {
        heading: "Changes to this policy",
        content:
          "We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated effective date. We encourage you to review this policy periodically.",
      },
      {
        heading: "Contact",
        content:
          "If you have questions about this Privacy Policy or your data, please contact us at:\n\nWebsite: https://hachimi.ai\nGitHub: https://github.com/sinnohzeng/hachimi-app",
      },
    ],
  },
};
