import React from 'react';
import BreadCrumb from '../../../_components/share/BreadCrumb';
import ProductGallery from '../../../_components/singleProduct/ProductGallery';
import ShortDescription from '../../../_components/singleProduct/ShortDescription';
import ProductCarousel from '../../../_components/ProductCarousel';
import { IProduct } from '../../../_lib/types/products';
import { notFound } from 'next/navigation';
import ProductColors from '../../../_components/singleProduct/ProductColors';
import { Metadata, ResolvingMetadata } from 'next';
import { productSlugQuery } from '../../../queries/productBySlug';

//
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
/**
 * ------------------------------------------------------------------------------------------------
 * get product by slug
 * ------------------------------------------------------------------------------------------------
 */
async function getProduct(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({
      query: productSlugQuery,
      variables: {
        slug: decodeURIComponent(slug),
      },
    }),
  });
  const { data } = await res.json();
  if (data && data.product) {
    return data.product;
  } else {
    return notFound(); // Handle 404 if product not found
  }
}
/**
 * ------------------------------------------------------------------------------------------------
 *add seo metadata
 * ------------------------------------------------------------------------------------------------
 */
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: product?.title,
    alternates: {
      canonical: '/',
    },
  };
}
/**
 * ------------------------------------------------------------------------------------------------
 *main function
 * ------------------------------------------------------------------------------------------------
 */
export default async function page({ params }: { params: { slug: string } }) {
  let product: IProduct;
  product = await getProduct(params.slug);
  return (
    <div className="container ">
      <BreadCrumb
        categories={product?.productCategories?.nodes}
        currentpageTitle={product?.title}
      />
      <div className="productTopSection mt-6 lg:grid grid-cols-12 lg:flex items-center">
        <div className="max-w-full col-span-6">
          <ProductGallery images={product?.imageGallery} />
        </div>
        <div className="col-span-6">
          <ShortDescription product={product} />
        </div>
      </div>
      {product.productFeatures.colors && (
        <ProductColors colors={product.productFeatures.colors} />
      )}

      <div>
        <ProductCarousel
          slug={product?.productCategories?.nodes[0].slug}
          title="محصولات مشابه"
        />
      </div>
    </div>
  );
}
