import { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Skiller2',
  tagline: 'Documentation Docusaurus déployée avec GitHub Pages',
  url: 'https://hrhouma.github.io', // L'URL de base de votre site
  baseUrl: '/skiller2/', // Nom du projet GitHub (changer à '/' si projet principal)
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Configuration GitHub Pages
  organizationName: 'hrhouma', // Nom de l'utilisateur GitHub
  projectName: 'skiller2', // Nom du dépôt
  deploymentBranch: 'gh-pages', // Branche où les fichiers statiques seront poussés
  trailingSlash: false, // Recommandé pour GitHub Pages

  // Autres configurations (modifiez selon vos besoins)
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/hrhouma/skiller2/edit/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default config;