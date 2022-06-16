import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'cURL',
      description: 'command line tool and library for transferring data with URLs',
    },
  },
  theme: defaultTheme({
    docsDir: 'docs',
    logo: '/images/logo.png',
    locales: {
      '/': {
        contributors: false,
        repoLabel: 'Source Code',
        repo: 'https://github.com/curl/curl',
        editLink: false,
        navbar: [
          {
            text: 'Cli Documentation',
            link: '/cli-documentation/name.md',
          },
          {
            text: 'v7.79.1',
            children: [
              {
                text: 'Changelog',
                link: 'https://curl.se/changes.html',
              },
            ],
          },
        ],
        sidebar: {
          '/cli-documentation/': [
            {
              text: '1 Name',
              link: '/cli-documentation/name.md',
            },
            {
              text: '2 Synopsis',
              link: '/cli-documentation/synopsis.md',
            },
            {
              text: '3 Description',
              link: '/cli-documentation/description.md',
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [],
});
