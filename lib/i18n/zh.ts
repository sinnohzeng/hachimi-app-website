import type { Translations } from "./types";

export const zh: Translations = {
  nav: {
    features: "功能",
    tech: "技术栈",
    download: "下载",
  },
  langSwitch: {
    en: "EN",
    zh: "中文",
  },

  hero: {
    badge: "v2.16.0 — Material Design 3 全面升级",
    headline1: "养猫。",
    headline2: "养习惯。",
    description:
      "每个习惯都附带一只虚拟猫咪。保持专注，赚取 XP 和金币，看着你的猫咪进化成长。可选的云端 AI 陪伴功能。",
    ctaDownload: "下载 APK",
    ctaSource: "查看源码",
    securityBadge: "隐私优先，AI 功能可选且需主动启用",
  },

  featureCards: {
    title: "你需要的一切",
    subtitle: "帮你养成更好的习惯",
    cards: [
      {
        title: "每个习惯，一只独特伙伴",
        description:
          "从 3 只随机生成的候选猫咪中领养一只。15 种花纹、19 种颜色、21 种眼色、6 种独特性格。",
      },
      {
        title: "保持专注，赢取奖励",
        description:
          "倒计时和正计时模式，Android 前台服务持久运行。每分钟专注赚取 XP 和 10 金币。",
      },
      {
        title: "追踪你的成长",
        description:
          "周趋势柱状图、91 天活动热力图、分页专注历史记录。一目了然地查看进度。",
      },
    ],
  },

  featureHighlight: {
    title1: "认识你的伙伴，",
    title2: "陪伴它成长",
    description:
      "每只猫咪都有独特的性格、心情和成长阶段。坚持习惯，你的伙伴就会升级进化——它是你进步的生动映射。",
    features: [
      "AI 猫咪聊天 — 用猫咪独特的性格和你对话",
      "自动生成每日日记，融合心情和专注数据",
      "100+ 配饰，商店中 5 档定价",
    ],
    cta: "探索功能",
    phonePlaceholder: "猫咪伙伴详情页",
  },

  principles: {
    badge: "为什么选择 Hachimi？",
    title1: "坚持下来的习惯，",
    title2: "由陪伴驱动",
    description:
      "Hachimi 把自律变成关爱。当你的习惯在养育一只虚拟猫咪时，跳过一天的感觉完全不同。",
    cta: "下载 Android 版",
    cards: [
      "陪伴式激励",
      "隐私优先设计",
      "离线可用",
      "精美设计",
    ],
  },

  stats: {
    items: [
      { label: "猫咪品种" },
      { label: "配饰道具" },
      { label: "支持语言" },
      { label: "成就挑战" },
    ],
  },

  faq: {
    title: "常见问题",
    subtitle: "关于 Hachimi 你需要知道的一切。",
    items: [
      {
        question: "我的数据安全吗？",
        answer:
          "所有数据存储在 Firebase 中，并设有严格的安全规则。AI 功能是可选的——启用后，聊天消息会发送到云端 AI 供应商（MiniMax 或 Google Gemini）进行处理。首次使用前会显示隐私声明。你可以随时删除账号和所有关联数据。",
      },
      {
        question: "Hachimi 有 iOS 版吗？",
        answer:
          "目前 Hachimi 仅支持 Android，可从 GitHub 直接下载 APK 安装。iOS 版本已列入未来计划。代码使用 Flutter 构建，跨平台部署在技术上已准备就绪。",
      },
      {
        question: "Hachimi 是开源的吗？",
        answer:
          "源代码以作品集和参考目的在 GitHub 上公开。但未授权用于再分发或商业用途。完整条款请参阅 LICENSE 文件。",
      },
      {
        question: "AI 聊天是如何运作的？",
        answer:
          "Hachimi 连接云端 AI 供应商——你可以在设置中选择 MiniMax 或 Google Gemini。猫咪会以个性化语气实时生成回复。AI 功能完全可选，默认关闭。",
      },
      {
        question: "需要付费吗？",
        answer:
          "Hachimi 完全免费。没有应用内购买、没有广告、没有订阅费用。应用内的金币经济通过专注和每日签到赚取。",
      },
    ],
    stillHaveQuestions: "还有其他问题？",
    contact: "查看 GitHub 文档",
  },

  finalCta: {
    headline: "准备好遇见你的第一只猫了吗？",
    cta: "下载 Android 版",
  },

  footer: {
    copyright: `\u00A9 2025\u20132026 Zixuan Zeng. All Rights Reserved.`,
    links: [
      {
        title: "产品",
        items: [
          { label: "功能", href: "#features" },
          { label: "技术栈", href: "#tech" },
          { label: "常见问题", href: "#faq" },
        ],
      },
      {
        title: "开发者",
        items: [
          { label: "GitHub", href: "https://github.com/sinnohzeng/hachimi-app" },
          { label: "文档", href: "https://github.com/sinnohzeng/hachimi-app/tree/main/docs" },
          { label: "更新日志", href: "https://github.com/sinnohzeng/hachimi-app/blob/main/CHANGELOG.md" },
        ],
      },
      {
        title: "链接",
        items: [
          { label: "个人网站", href: "https://zixuan.net" },
          { label: "官网源码", href: "https://github.com/sinnohzeng/hachimi-app-website" },
        ],
      },
    ],
    legal: [
      { label: "隐私政策", href: "/zh/privacy" },
      { label: "许可证", href: "https://github.com/sinnohzeng/hachimi-app/blob/main/LICENSE" },
    ],
  },

  privacy: {
    title: "隐私政策",
    effectiveDate: "生效日期：2026 年 2 月 23 日",
    sections: [
      {
        heading: "简介",
        content:
          "Hachimi（以下简称「我们」或「本应用」）是一款由 Zixuan Zeng 开发的习惯养成应用，附带虚拟猫咪陪伴功能。本隐私政策说明我们在你使用 Hachimi 时如何收集、使用和保护你的信息。使用本应用即表示你同意本政策中描述的做法。",
      },
      {
        heading: "我们收集的信息",
        content:
          "账号信息：注册账号时，我们通过 Firebase Authentication 收集你的邮箱地址和显示名称。\n\n习惯和专注数据：你的习惯、专注记录、任务进度、猫咪伙伴、金币和道具存储在 Cloud Firestore 中，用于支撑核心应用体验。\n\nAI 聊天内容（可选）：如果你启用了 AI 功能，与猫咪的聊天消息和日记生成请求会发送到云端 AI 供应商（MiniMax 或 Google Gemini，取决于你的选择）进行处理。AI 功能默认关闭，启用前需阅读并确认隐私声明。\n\n设备和使用数据：我们自动收集崩溃报告（Firebase Crashlytics）、应用使用事件（Firebase Analytics）、性能数据（Firebase Performance）和推送通知令牌（Firebase Cloud Messaging），以改善应用体验。",
      },
      {
        heading: "我们如何使用你的信息",
        content:
          "我们使用收集的信息用于：\n\n\u2022 提供和维护核心习惯养成和养猫体验\n\u2022 生成 AI 猫咪聊天回复和日记内容（启用时）\n\u2022 发送习惯提醒推送通知（启用时）\n\u2022 分析应用使用模式和修复崩溃\n\u2022 监控应用性能和提升稳定性",
      },
      {
        heading: "第三方服务",
        content:
          "我们与以下第三方服务共享数据：\n\nGoogle Firebase：身份验证、Cloud Firestore（数据存储）、Analytics、Crashlytics（崩溃报告）、Performance Monitoring、Cloud Messaging（推送通知）和 Remote Config。Google 的隐私政策适用于 Firebase 处理的数据。\n\nMiniMax（可选）：如果你选择 MiniMax 作为 AI 供应商，聊天消息会发送到 MiniMax 的 API 生成回复。MiniMax 的隐私政策适用于这些数据。\n\nGoogle Gemini（可选）：如果你选择 Gemini 作为 AI 供应商，聊天消息会发送到 Google 的 Gemini API 生成回复。Google 的 AI 隐私条款适用。\n\n我们不出售你的个人数据。我们不使用第三方广告服务。",
      },
      {
        heading: "数据安全",
        content:
          "所有数据在传输过程中使用 TLS/HTTPS 加密。Cloud Firestore 对静态数据进行加密。Firebase 安全规则限制数据访问，确保已验证用户只能访问自己的文档。AI 供应商的 API 密钥在构建时注入，不会以明文形式存储在设备上。",
      },
      {
        heading: "你的权利",
        content:
          "访问和导出：你可以在应用内查看所有数据（习惯、专注记录、猫咪、金币、聊天历史）。\n\n删除：你可以通过应用的账号删除流程删除账号和所有关联数据（设置 → 账号 → 删除账号）。这将永久移除你的身份验证记录和所有 Firestore 数据。\n\n退出：AI 功能可以随时在设置中关闭。推送通知可以通过设备系统设置管理。",
      },
      {
        heading: "儿童隐私",
        content:
          "Hachimi 不面向 13 岁以下儿童设计或提供服务。我们不会故意收集 13 岁以下儿童的个人信息。如果你认为有 13 岁以下的儿童向我们提供了个人信息，请联系我们以便采取适当措施。",
      },
      {
        heading: "政策变更",
        content:
          "我们可能会不时更新本隐私政策。变更将在本页面反映，并更新生效日期。我们建议你定期查看本政策。",
      },
      {
        heading: "联系方式",
        content:
          "如果你对本隐私政策或你的数据有任何疑问，请通过以下方式联系我们：\n\n网站：https://hachimi.ai\nGitHub：https://github.com/sinnohzeng/hachimi-app",
      },
    ],
  },
};
