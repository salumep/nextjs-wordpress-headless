import React from 'react';
import { GET_PRODUCTS_ENDPOINT } from '../../../_lib/contants/endPoints';
import BreadCrumb from '../../../_components/share/BreadCrumb';
import TopBarLinks from '../../../_components/singleProduct/TopBarLinks';
import ProductGallery from '../../../_components/singleProduct/ProductGallery';
import ShortDescription from '../../../_components/singleProduct/ShortDescription';
import ProductCarousel from '../../../_components/ProductCarousel';
import { IProduct } from '../../../_lib/types/products';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function page({ params }: { params: { slug: string } }) {
  let product: IProduct | null = null;
  try {
    const res = await fetch(`${GET_PRODUCTS_ENDPOINT}?slug=${params.slug}`);
    const result: IProduct[] = await res.json();
    product = result[0];
  } catch (error) {
    throw error || new Error('An unexpected error occurred');
  }
  if (!product) {
    return notFound();
  }

  return (
    <div className="container mb-12">
      <div className="singleProductTopBar py-4 border-b md:flex justify-between items-center border-gray-600">
        <BreadCrumb
          categories={product?.chromatplus_categories}
          currentpageTitle={product?.title?.rendered}
        />
        <TopBarLinks />
      </div>
      <div className="productTopSection mt-6 lg:grid grid-cols-12 lg:flex items-center">
        <div className="max-w-full col-span-6">
          <ProductGallery images={product?.image_gallery} />
        </div>
        <div className="col-span-6">
          <ShortDescription product={product} />
        </div>
      </div>
      <div>
        <ProductCarousel title="محصولات مشابه" />
      </div>
    </div>
  );
}
