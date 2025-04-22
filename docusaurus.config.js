import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Inspector Web Manual',
  tagline: 'Aprende a dominar el inspector de elementos paso a paso',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Inspector Web Manual',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-inspector.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guía',
          items: [
            {
              label: 'Comenzar el tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Preguntas y respuestas',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Chat en Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Noticias en X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'Más contenido',
          items: [
            {
              label: 'Artículos del blog',
              to: '/blog',
            },
            {
              label: 'Repositorio en GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} Manual del Inspector. Hecho con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
