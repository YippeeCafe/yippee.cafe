import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const siteUrl = 'https://yippee.cafe';
const urls = [''];
const now = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${siteUrl}/${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

mkdirSync('docs', { recursive: true });
writeFileSync(join('docs', 'sitemap.xml'), sitemap);
writeFileSync(join('docs', 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
