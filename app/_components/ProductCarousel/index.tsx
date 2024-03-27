import Link from 'next/link';
import { GET_PRODUCTS_ENDPOINT } from '../../_lib/constants/endPoints';
import { IProduct } from '../../_lib/types/products';
import { notFound } from 'next/navigation';
import SwiperComponent from './Swiper';

export default async function ProductCarousel({
  title = '',
  link = null,
}: {
  title?: string;
  link?: string | null;
}) {
  let productsData: IProduct[] | null = null;
  try {
    const data = await fetch(`${GET_PRODUCTS_ENDPOINT}`);
    productsData = await data.json();
  } catch (error) {
    throw error || new Error('An unexpected error occurred');
  }
  if (!productsData) {
    return notFound();
  }

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
