import Link from 'next/link';
import { GET_PRODUCTS_ENDPOINT } from '../../_lib/constants/endPoints';
import { IProduct } from '../../_lib/types/products';
import { notFound } from 'next/navigation';
import SwiperComponent from './Swiper';
import { allProductsQuery } from '../../queries/allProducts';

/**
 * ------------------------------------------------------------------------------------------------
 * get all products
 * ------------------------------------------------------------------------------------------------
 */
async function getAllProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({
      query: allProductsQuery,
    }),
  });
  const { data } = await res.json();
  if (data && data.products.nodes) {
    return data.products.nodes;
  } else {
    return notFound(); // Handle 404 if product not found
  }
}

export default async function ProductCarousel({
  title = '',
  link = null,
}: {
  title?: string;
  link?: string | null;
}) {
  const productsData: IProduct[] = await getAllProducts();

  return (
    <div className="max-w-full  md:mt-12 mt-6">
      <div className="carouselTitle mb-8 flex relative line-heading justify-between">
        <div className="md:text-xl bg-white pl-4 relative z-10 color-text-gray-300">
          {title}
        </div>
        {link && (
          <Link href={link} className="text-primary">
            مشاهده همه
          </Link>
        )}
      </div>
      <SwiperComponent productsData={productsData} />
    </div>
  );
}
