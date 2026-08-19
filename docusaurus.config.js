// @ts-check

import {themes as prismThemes} from 'prism-react-renderer'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Núcleo de Exatas',
  tagline: 'Matemática, Física e Cálculo resolvidos',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://miguelscofield.github.io',
  baseUrl: '/banco-questoes/',
  trailingSlash: false,

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  organizationName: 'MiguelScofielD',
  projectName: 'banco-questoes',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },

        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Posts',
          blogSidebarCount: 'ALL',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "pt"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Início',
        logo: {
          alt: 'Logo',
          src: 'img/logo_gpt.png',
        },
        items: [
          // ==========================================
          // CONTEÚDO
          // ==========================================

          {
            label: 'Conteúdo',
            position: 'left',
            items: [
              {
                label: 'Matemática',
                to: '/docs/category/matemática',
              },
              {
                label: 'Cálculo',
                to: '/docs/category/cálculo',
              },
              {
                label: 'Física',
                to: '/docs/category/física',
              },
            ],
          },

          // ==========================================
          // PREPARAÇÃO
          // ==========================================

          {
            label: 'Preparação',
            to: '/docs/preparacao',
            position: 'left',
          },

          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
          },

          {
            href: 'https://github.com/MiguelScofielD/banco-questoes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [],
        copyright:
          `Copyright © ${new Date().getFullYear()} Banco de Questões`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config
