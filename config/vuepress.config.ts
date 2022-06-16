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
            {
              text: '4 Url',
              link: '/cli-documentation/url.md',
            },
            {
              text: '5 Output',
              link: '/cli-documentation/output.md',
            },
            {
              text: '6 Protocols',
              link: '/cli-documentation/protocols.md',
            },
            {
              text: '7 Progress meter',
              link: '/cli-documentation/progress-meter.md',
            },
            {
              text: '8 Options',
              link: '/cli-documentation/options.md',
            },
            {
              text: '9 Files',
              link: '/cli-documentation/files.md',
            },
            {
              text: '10 Environment',
              link: '/cli-documentation/environment.md',
            },
            {
              text: '11 Proxy protocol prefixes',
              link: '/cli-documentation/proxy-protocol-prefixes.md',
            },
          ],
        },
      },
    },
  }),
  markdown: {},
  plugins: [],
});
