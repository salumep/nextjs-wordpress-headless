import React from 'react';
import { IProduct } from '../../types/products';
import ShopLinkButton from './ShopLinkButton';
interface ProductDescriptionProps {
  product: IProduct;
}

const ShortDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="">
        <h1 className="mb-6">{product?.title?.rendered}</h1>
        <div className="relative  line-heading mb-4">
          <span className="bg-white px-2 relative z-10  text-color-text-100">
            مشخصات
          </span>
        </div>

        <div
          className="productShortDesc pr-4"
          dangerouslySetInnerHTML={{ __html: product.product_features || '' }}
        />
        <div className="mt-8 px-2 ">
          <ShopLinkButton />
        </div>
      </div>
    </>
  );
};
export default ShortDescription;
