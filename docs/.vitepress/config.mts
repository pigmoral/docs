import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Judehahh",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.jpeg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/00-before/about-me' },
      { text: 'Blog', link: '/blog/index' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '00-写在前面',
        items: [
          { text: '关于我', link: '/00-before/about-me' },
        ]
      },
      {
        text: '01-嵌入式学习',
        items: [
          { text: '00-入门', link: '/01-embedded-learning/00-start' },
          { text: '01-开发环境', link: '/01-embedded-learning/01-environment' },
          { text: '02-认识原理图', link: '/01-embedded-learning/02-schematic' },
          { text: 'Lab01-GPIO', link: '/01-embedded-learning/lab01-gpio' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/judehahh' }
    ],

    footer: {
      message: 'ICP备案号：<a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2024271453号-1</a>',
      copyright: 'Copyright © 2024-present Judehahh'
    }
  }
})
