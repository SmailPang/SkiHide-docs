// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress';

const BASE = '/'

export default defineConfig({
  base: BASE,
  cleanUrls: true,
  title: 'SkiHide',
  description: '全局热键/鼠标侧键快速隐藏与恢复窗口的工具',
  lang: 'zh-CN',

  // 可选：多语言（如果你也想做 EN）
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${BASE}logo.svg?v=3` }]
  ],

  themeConfig: {
    /* =====================
       右侧「本页目录」
    ===================== */
    outline: {
      label: '本页内容',
      level: [2, 3],
    },

    /* =====================
       底部「上一页 / 下一页」
    ===================== */
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    /* =====================
       最后更新时间
    ===================== */
    lastUpdatedText: '最后更新于',

    /* =====================
       编辑此页（如果你开启了 editLink）
    ===================== */
    editLink: {
      pattern: 'https://github.com/Akttoer/SkiHide-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '开始使用',
        link: '/guide/',
        activeMatch: '^/guide/',
      },
      { text: '下载', link: '/download' },
      { text: '更新日志', link: '/changelog' },
      { text: '常见问题', link: '/guide/faq' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '安装与启动', link: '/guide/install' },
            { text: '使用说明', link: '/guide/usage' },
            { text: '快捷键与鼠标侧键', link: '/guide/hotkeys' },
            { text: '设置说明', link: '/guide/settings' },
            { text: '隐私政策与免责声明', link: '/guide/privacy' },
          ],
        },
        { text: 'FAQ', link: '/guide/faq' },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Akttoer/SkiHide' }],

    search: {
      provider: 'local',
    },

    // 大页尾（仿你提供的 Sukisu 风格截图）
    footerBrand: {
      name: 'SkiHide',
      desc: '全局热键 + 鼠标侧键，一键隐藏/恢复窗口，打造完美的摸鱼体验。',
    },

    footerSections: [
      {
        title: '资源',
        items: [
          { text: '文档', link: '/guide/' },
          { text: 'GitHub 仓库', link: 'https://github.com/Akttoer/SkiHide' },
          { text: '下载', link: '/download' },
          { text: '问题反馈', link: 'https://github.com/Akttoer/SkiHide/issues' },
        ],
      },
      {
        title: '社区',
        items: [
          { text: 'Telegram 频道', link: 'https://t.me/your_channel' },
          {
            text: 'GitHub 讨论区',
            link: 'https://github.com/Akttoer/SkiHide/discussions',
          },
          {
            text: '参与贡献',
            link: 'https://github.com/Akttoer/SkiHide/blob/main/CONTRIBUTING.md',
          },
          {
            text: '许可协议',
            link: 'https://github.com/Akttoer/SkiHide/blob/main/LICENSE',
          },
        ],
      },
    ],

    footerBottom: {
      left: '© 2025 SmailPang. 保留所有权利。',
      right: '使用 VitePress 构建',
    },
  },
});
