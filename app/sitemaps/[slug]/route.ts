import { GET_SITEMAP_ENDPOINT } from '@/app/_lib/constants/endPoints';
import { getSitemapInfo } from '@/app/utils/getSitemapInfo';
import { pageType } from '@/app/_lib/types/sitemap';
import { xmlUrl } from '@/app/_lib/types/xml';
import { SitemapItem } from '@/app/_lib/types/sitemap';
import { getXmlUrlSet } from '@/app/utils/getSitemapInfo';
import { notFound } from 'next/navigation';

type PropsContext = {
  params: { slug?: number | undefined };
};

export async function GET(
  request: Request,
  context: { params: PropsContext['params'] }
) {
  const pageTypes: pageType[] = await getSitemapInfo();
  const slug = `${context?.params?.slug}` ?? '';

  const pattern = /^(.*?)\-sitemap\.xml$/;

  if (pattern.test(slug)) {
    const mainWord = slug.split('-')[0];

    const itemType = pageTypes.find((item) => item.name === mainWord);
    if (itemType) {
      const url = `${GET_SITEMAP_ENDPOINT}/${
        itemType?.type == 'taxonomyType' ? 'taxonomy' : 'posts'
      }?${itemType?.type}=${mainWord}`;

      const res = await fetch(url);
      const posts = await res.json();

      const postUrls: xmlUrl[] =
        posts &&
        posts.map((post: xmlUrl) => {
          //   let dateParts = new Date();
          //   let date = dateParts[0] + 'T' + dateParts[1] + '.000Z';
          return {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}${post.url}`,
            post_modified_date: new Date().toISOString(),
          };
        });

      const xmlStr = getXmlUrlSet(postUrls);

      return new Response(xmlStr, {
        headers: {
          'content-type': 'application/xml;charset=UTF-8',
        },
      });
    }
    return notFound();
  } else {
    return notFound();
  }
}
