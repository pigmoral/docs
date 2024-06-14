import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Judehahh",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/00-before/about-me' }
    ],

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
          { text: '00-入门', link: '/01-embeded-learning/00-start' },
          { text: '01-原理图', link: '/01-embeded-learning/01-schematic' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/judehahh' }
    ]
  }
})
