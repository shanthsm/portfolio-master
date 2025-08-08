const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Shanthalingaiah SM',
  tagline: 'Writer Who Codes | Docs Consultant | Content Strategist.',
  url: 'https://yourdomain.com', // Update to your actual domain
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yourgithubusername', // Update to your GitHub username/org
  projectName: 'portfolio', // Update if your repo name differs
  trailingSlash: true,

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/mob-2.png' },
          { tagName: 'link', rel: 'manifest', href: 'manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: 'rgb(37, 194, 160)' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#000' },
          { tagName: 'link', rel: 'apple-touch-icon', href: 'img/docusaurus.png' },
          { tagName: 'link', rel: 'mask-icon', href: 'img/docusaurus.png', color: 'rgb(62, 204, 94)' },
          { tagName: 'meta', name: 'msapplication-TileImage', content: 'img/docusaurus.png' },
          { tagName: 'meta', name: 'msapplication-TileColor', content: '#000' },
        ],
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Shanthalingaiah SM',
      logo: {
        alt: 'Site Logo',
        src: 'img/mob-2.png',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/yourgithubusername', // Update this
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Shanthalingaiah SM. Built with Docusaurus.`,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },

    metadata: [
      { name: 'robots', content: 'max-image-preview:large' },
      { name: 'monetization', content: '$ilp.uphold.com/fYPB8Pjyig3z' }, // Optional: update or remove
    ],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/yourgithubusername/portfolio', // Update this
          feedOptions: {
            type: 'all',
          },
          postsPerPage: 3,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
