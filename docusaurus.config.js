// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bienvenidos',
  tagline: 'aqui encontraras la documentación de la pagina',
  // favicon: 'img/favicon.ico',
  favicon: 'https://mattyucode.github.io/portafolio/img/iM.C.png',

  // Set the production url of your site here
  url: 'https://mattyucode.github.io/',
  // url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  baseUrl: '/docusaurs_web',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MattyuCode', // Usually your GitHub org/user name.
  projectName: 'docusaurs_web', // Usually your repo name.
  deploymentBranch: "gh-pages",
 trailingSlash: false, 



  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mattyu`s Web',
        logo: {
          alt: 'My Site Logo',
          src: 'https://mattyucode.github.io/portafolio/img/iM.C.png',
        },
        items: [{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentaciones',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/MattyuCode',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.youtube.com/channel/UCMekmHf8jji7mEJoZhFajeQ?view_as=subscriber',
            label: 'YuoTube',
            position: 'right',
          },
          {
            href: 'https://mattyucode.github.io/portafolio/',
            label: 'WebSite',
            position: 'right',
          },
        ],
      },


      footer: {
        style: 'dark',
        links: [{
            title: 'Docs',
            items: [{
              label: 'Tutorial',
              to: '/docs/intro',
            }, ],
          },
          {
            title: 'Community',
            items: [{
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [{
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;