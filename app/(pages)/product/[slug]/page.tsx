import React from 'react';
import { GET_PRODUCTS_ENDPOINT } from '../../../_lib/constants/endPoints';
import BreadCrumb from '../../../_components/share/BreadCrumb';
import TopBarLinks from '../../../_components/singleProduct/TopBarLinks';
import ProductGallery from '../../../_components/singleProduct/ProductGallery';
import ShortDescription from '../../../_components/singleProduct/ShortDescription';
import ProductCarousel from '../../../_components/ProductCarousel';
import { IProduct } from '../../../_lib/types/products';
import { notFound } from 'next/navigation';
import ProductColors from '../../../_components/singleProduct/ProductColors';
import { Metadata, ResolvingMetadata } from 'next';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const res = await fetch(`${GET_PRODUCTS_ENDPOINT}?slug=${params.slug}`);
  const result = await res.json();
  const product = result[0];

  return {
    title: product.title.rendered,
    alternates: {
      canonical: '/',
    },
  };
}
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
    <div className="container ">
      <BreadCrumb
        categories={product?.chromatplus_categories}
        currentpageTitle={product?.title?.rendered}
      />
      {/* <TopBarLinks /> */}
      <div className="productTopSection mt-6 lg:grid grid-cols-12 lg:flex items-center">
        <div className="max-w-full col-span-6">
          <ProductGallery images={product?.image_gallery} />
        </div>
        <div className="col-span-6">
          <ShortDescription product={product} />
        </div>
      </div>
      {product.product_features.colors && (
        <ProductColors colors={product.product_features.colors} />
      )}

      <div>
        <ProductCarousel title="محصولات مشابه" />
      </div>
    </div>
  );
}
