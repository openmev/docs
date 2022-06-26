// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
//require.resolve('docusaurus-plugin-typedoc');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OpenMEV',
  tagline: 'Maximal Extractable Value, as a service',
  url: 'https://docs.openmev.org',
  baseUrl: '/',
  favicon: '/img/favicon.ico',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'openmev',
  projectName: 'docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/openmev/docs/edit/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve('./src/css/colors.css'),
        },
      }),
    ],
     [
           'docusaurus-preset-shiki-twoslash',
           {
             themes: ["light-plus", "dark-plus"],
           }
       ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      navbar: {
        logo: {
          alt: 'OpenMEV icon',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'GitHub',
            href: 'https://github.com/openmev',
            position: 'right',
            className: 'persistent',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'What Is OpenMEV?',
                to: '/',
              },
              {
                label: 'Technical Reference',
                to: '/technical-reference/intro',
              },
              {
                label: 'API',
                to: '/api',
              },
              {
                label: 'References',
                to: '/references',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forums',
                href: 'https://forums.manifoldfinace.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/foldfinance',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/foldfinance',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Status',
                href: 'https://status.openmev.org',
              },
              {
                label: 'Dashboard',
                href: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Manifold Finance, Inc. | All rights reserved.`,
      },
      colorMode: {
        defaultMode: 'dark',
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: true,
      },
    }),
};
