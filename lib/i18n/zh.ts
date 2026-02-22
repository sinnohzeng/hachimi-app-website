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
    badge: "v2.8.0 — 统计页重设计 + 深色模式修复",
    headline1: "养猫。",
    headline2: "养习惯。",
    description:
      "每个习惯都附带一只虚拟猫咪。保持专注，赚取 XP 和金币，看着你的猫咪进化成长。所有 AI 功能完全在设备上运行。",
    ctaDownload: "下载 APK",
    ctaSource: "查看源码",
    securityBadge: "隐私优先，AI 完全在设备端运行",
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
    title1: "你的猫咪房间，",
    title2: "你的小天地",
    description:
      "一间温馨的图解房间，随着你养成更多习惯而逐渐被猫咪填满。白天夜晚氛围随时间变化，每只猫咪根据性格选择最爱的位置。",
    features: [
      "AI 猫咪聊天 — 用猫咪独特的性格和你对话",
      "自动生成每日日记，融合心情和专注数据",
      "100+ 配饰，商店中 5 档定价",
    ],
    cta: "探索功能",
    phonePlaceholder: "猫咪房间截图",
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
      "隐私优先 AI",
      "离线可用",
      "精美设计",
    ],
  },

  stats: {
    items: [
      { label: "猫咪品种" },
      { label: "配饰道具" },
      { label: "支持语言" },
      { label: "后台服务" },
    ],
  },

  faq: {
    title: "常见问题",
    subtitle: "关于 Hachimi 你需要知道的一切。",
    items: [
      {
        question: "我的数据安全吗？",
        answer:
          "所有数据存储在 Firebase 中，并设有严格的安全规则。AI 聊天和日记功能使用本地 LLM 完全在设备端运行——AI 处理过程中没有任何数据离开你的手机。",
      },
      {
        question: "Hachimi 有 iOS 版吗？",
        answer:
          "目前 Hachimi 仅支持 Android。iOS 版本已列入未来计划。代码使用 Flutter 构建，跨平台部署在技术上已准备就绪。",
      },
      {
        question: "Hachimi 是开源的吗？",
        answer:
          "源代码以作品集和参考目的在 GitHub 上公开。但未授权用于再分发或商业用途。完整条款请参阅 LICENSE 文件。",
      },
      {
        question: "AI 聊天如何在无网络下工作？",
        answer:
          "Hachimi 内置 Qwen3-1.7B 语言模型，通过 llama_cpp_dart 在本地运行。你的猫咪会以个性化语气回复消息——所有推理都在设备端完成，零云端依赖。",
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
      { label: "许可证", href: "https://github.com/sinnohzeng/hachimi-app/blob/main/LICENSE" },
    ],
  },
};
