import React from 'react';
import { GET_PRODUCTS_ENDPOINT } from '../../../utils/constant/endPoints';
import BreadCrumb from '../../../components/share/BreadCrumb';
import TopBarLinks from '../../../components/singleProduct/TopBarLinks';
import ProductGallery from '../../../components/singleProduct/ProductGallery';
import ShortDescription from '../../../components/singleProduct/ShortDescription';
import ProductCarousel from '../../../components/productCarousel';

async function getPost(slug: string) {
  const res = await fetch(`${GET_PRODUCTS_ENDPOINT}?slug=${slug}`);
  return res.json();
}

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getPost(params.slug);
  const product = data[0];

  return (
    <div className="container mb-12">
      <div className="singleProductTopBar py-4 border-b md:flex justify-between items-center border-gray-600">
        <BreadCrumb
          categories={product?.chromatplus_categories}
          currentpageTitle={product?.title.rendered}
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
