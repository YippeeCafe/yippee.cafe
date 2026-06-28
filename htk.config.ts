import { defineConfig } from '@hacktoolkit/nextjs-htk';

export default defineConfig({
  site: {
    name: 'Yippee Cafe',
    title: 'Yippee Cafe | Playful apps, games, and tiny internet experiments',
    description:
      'A tiny internet workshop for playful apps, games, music tools, and whatever else sounds fun.',
    url: 'https://yippee.cafe',
    author: 'Yippee Cafe',
  },
  navigation: [
    { name: 'Home', path: '/', showInNav: true },
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} Yippee Cafe. All rights reserved.`,
  },
});
