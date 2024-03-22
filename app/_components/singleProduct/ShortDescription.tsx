import React from 'react';
import { IProduct } from '../../_lib/types/products';
import ShopLinkButton from './ShopLinkButton';
import TopBarLinks from './TopBarLinks';

interface ProductDescriptionProps {
  product: IProduct;
}

const ShortDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  return (
    <>
      <div className="">
        <h1 className="mb-12 text-xl">{product?.title?.rendered}</h1>
        <div className="relative  flex justify-between mb-4 border-b border-primary pb-4">
          <span className="bg-white px-2 relative z-10  text-color-text-100">
            مشخصات
          </span>
          <TopBarLinks />
        </div>

        <div
          className="productShortDesc pr-4"
          dangerouslySetInnerHTML={{
            __html: product?.product_short_desc || '',
          }}
        />
        <div className="mt-8 px-2 ">
          <ShopLinkButton />
        </div>
      </div>
    </>
  );
};
export default ShortDescription;
