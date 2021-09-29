const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'TDL',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'eotkd4791', // Usually your GitHub org/user name.
    projectName: 'TIL-archive', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js')
            // Please change this to your repo.
            // editUrl: 'https://github.com/eotkd4791/til-archive/'
          },
          blog: {
            showReadingTime: true
            // Please change this to your repo.
            // editUrl: 'https://github.com/eotkd4791/til-archive/'
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css')
          }
        })
      ]
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Today Daesang Learned',
          logo: {
            alt: 'Today Daesang Learned logo',
            src: 'img/stef.png'
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Tutorial'
            },
            // { to: '/blog', label: 'Blog', position: 'left' },
            {
              href: 'https://github.com/eotkd4791',
              label: 'GitHub',
              position: 'right'
            }
          ]
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme
        }
      })
  }
);
