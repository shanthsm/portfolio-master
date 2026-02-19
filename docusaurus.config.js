const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Shanthalingaiah SM',
  tagline: 'Senior Information Developer | API Docs, Integration Guides & SDKs | 7+ Years in Fintech and SaaS',
  url: 'https://shanthsm.github.io', // GitHub Pages base URL
  baseUrl: '/portfolio-master/', // Must have a trailing slash for project pages
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/lazybones-sloth.svg',
  organizationName: 'shanthsm', // GitHub username
  projectName: 'portfolio-master', // Repo name
  trailingSlash: true,

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/lazybones-sloth.svg' },
          { tagName: 'link', rel: 'manifest', href: 'manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: 'rgb(37, 194, 160)' },
          { tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes' },
          { tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#000' },
          { tagName: 'link', rel: 'apple-touch-icon', href: 'img/lazybones-sloth.svg' },
          { tagName: 'link', rel: 'mask-icon', href: 'img/lazybones-sloth.svg', color: 'rgb(62, 204, 94)' },
          { tagName: 'meta', name: 'msapplication-TileImage', content: 'img/lazybones-sloth.svg' },
          { tagName: 'meta', name: 'msapplication-TileColor', content: '#000' },
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Shanthalingaiah SM',
      logo: {
        alt: 'Lazybones Sloth Logo',
        src: 'img/lazybones-sloth.svg',
      },
      items: [
        {
          href: 'https://www.linkedin.com/in/shanth-sm',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/shanthsm',
          label: 'GitHub',
          position: 'right',
        },
        // { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://drive.google.com/file/d/1U5fc4bBer35JL9SHr7_X7D65xScPoRqe/view?usp=sharing',
          label: 'Resume',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/shanth-sm',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/shanthsm',
            },
            {
              label: 'Email',
              href: 'mailto:shanth.hr18@gmail.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'Resume',
              href: 'https://drive.google.com/file/d/1U5fc4bBer35JL9SHr7_X7D65xScPoRqe/view?usp=sharing',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shanthalingaiah SM. Built with Docusaurus.`,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },

    metadata: [
      { name: 'description', content: 'Portfolio of Shanthalingaiah SM - Senior Information Developer specializing in API documentation, developer portals, and technical content for fintech, healthcare, and automotive industries.' },
      { name: 'robots', content: 'max-image-preview:large' },
      { name: 'monetization', content: '$ilp.uphold.com/fYPB8Pjyig3z' },
    ],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false, // Disable blog
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/shanthsm/portfolio-master/edit/master/',
        //   feedOptions: {
        //     type: 'all',
        //   },
        //   postsPerPage: 3,
        //   truncateMarker: /<!--\s*(truncate)\s*-->/,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
