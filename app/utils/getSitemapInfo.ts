import { GET_SITEMAP_ENDPOINT } from '../_lib/constants/endPoints';
import { pageType } from '../_lib/types/sitemap';
import { SitemapItem } from '../_lib/types/sitemap';
import { xmlUrl } from '../_lib/types/xml';

export const getSitemapInfo = async () => {
  let result: pageType[] = [];
  try {
    const res = await fetch(`${GET_SITEMAP_ENDPOINT}/totalpages`);
    result = await res.json();
  } catch (error) {
    throw error || new Error('An unexpected error occurred');
  }

  return result;
};

export const getXmlUrlSet = (postUrls: SitemapItem[]): string => {
  const xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${postUrls
      .map((postUrl: xmlUrl) => `<sitemap><loc>${postUrl.url}</loc></sitemap>`)
      .join('')}
    </urlset>`;

  return xmlStr;
};
