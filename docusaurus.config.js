// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nimbus',
  url: 'https://nimbus.team/',
  baseUrl: '/',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Nimbus',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
          },
        },
        docs: {
          id: 'Docs',
          routeBasePath: '/docs',
          remarkPlugins: [math],
          rehypePlugins: [katex], 
        },
        og: {},
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').PluginOptions} */
      ({
        id: 'blog',
        routeBasePath: '/',
        path: 'posts',
        blogTitle: 'Nimbus Blog',
        blogSidebarCount: 0,
        authorsMapPath: 'authors.yml',
        remarkPlugins: [math],
        rehypePlugins: [katex],
      }),
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [{ from: '/blog', to: '/' }],
        createRedirects(existingPath) {
          return existingPath.startsWith('/blog') && existingPath !== '/blog'
            ? [existingPath.replace('/blog', '')]
            : undefined
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      navbar: {
        items: [
          {
            type: 'search',
          },
          {
            label: 'About',
            href: 'https://nimbus.team/',
          },
        ],
      },
      footer: {
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/ethnimbus',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/EP8DZnXu9y',
                label: 'Discord',
              },
              {
                to: '/docs',
                label: 'Docs',
              },
              {
                href: 'https://github.com/status-im',
                label: 'Github',
              },
            ],
          },
          {
            items: [
              {
                label: 'Work With Us',
                href: 'https://jobs.status.im/',
              },
              {
                label: 'Terms & Conditions',
                to: '/terms',
              },
            ],
          },
        ],
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
}

module.exports = config
