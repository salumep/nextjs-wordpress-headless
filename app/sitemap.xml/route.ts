import { xmlUrl } from '../_lib/types/xml';
import { getSitemapInfo } from '../utils/getSitemapInfo';

export async function GET() {
  let sitemaps: xmlUrl[] = [];
  const sitemapInfo = await getSitemapInfo();
  for (const item of sitemapInfo) {
    if (item.count > 0) {
      sitemaps.push({
        url: `/sitemaps/${item.name}-sitemap.xml`,
        post_modified_date: new Date().toISOString(),
      });
    }
  }

  const postUrls: xmlUrl[] = sitemaps.map((cat: { url: string }) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${cat.url}`,
    post_modified_date: new Date().toISOString(), // wordpress custom taxonomy doesnt have update time should be fixed
  }));

  const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${postUrls
      .map(
        (postUrl: xmlUrl) => `<url>
      <loc>${postUrl.url}</loc>
      <lastmod>${postUrl.post_modified_date}</lastmod>
      </url>`
      )
      .join('')}
    </urlset>`;

  return new Response(xmlStr, {
    headers: {
      'content-type': 'application/xml;charset=UTF-8',
    },
  });
}
