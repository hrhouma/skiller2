import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'skiller2',
  tagline: 'A modern static website generator',
  favicon: 'img/favicon.ico',

  url: 'https://hrhouma.github.io',
  baseUrl: '/skiller2/',
  organizationName: 'hrhouma',
  projectName: 'skiller2',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/hrhouma/skiller2/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/hrhouma/skiller2/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Ajoutez ici la configuration du thème
  } satisfies Preset.ThemeConfig,
};

export default config;