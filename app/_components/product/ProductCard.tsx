'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from '../UI/icon';
import { IProduct } from '../../_lib/types/products';

interface Props {
  product: IProduct;
}

const productCarouselCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-700 w-[301px] p-6 rounded-md">
      <div className="carouselCardTop flex justify-between text-color-text-300 items-center ">
        <div className="ellipsis-2 md:h-[52px] h-[42px] text-sm md:text-base">
          {product.title?.rendered}
        </div>
      </div>
      <div className="carouselCardImage mt-4">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image_gallery[0].url}
            width={253}
            height={119}
            alt="sink"
            className="rounded-md "
          />
        </Link>
      </div>
      <div className="carouselCardExtraInfo d flex justify-between mt-4 text-xs text-color-text-200">
        <div className="flex">
          <div className="ml-4">
            مدل:
            <span>{product.product_features.model}</span>
          </div>
          <div>
            سایز:
            <span>{product.product_features.size}</span>
          </div>
        </div>

        {/* <div className="flex text-sm">
          <input type="checkbox" />
          <span className="pr-2">مقایسه</span>
        </div> */}
      </div>

      <div className="caroudelCardButtons flex mt-4">
        <div className="bg-primary p-2 rounded-md">
          <Icon name="cart" />
        </div>
        <Link
          href={`/product/${product.slug}`}
          className="bg-white color-primary border border-gray-700 mr-2 py-1 flex-1 flex items-center justify-center  rounded-md text-primary "
        >
          نمایش محصول
        </Link>
      </div>
    </div>
  );
};
export default productCarouselCard;
