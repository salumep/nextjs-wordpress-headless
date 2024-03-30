'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from '../UI/icon';
import { IProduct } from '../../_lib/types/products';

interface Props {
  product: IProduct;
}

const ProductCardMobile: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white flex  md:block border border-gray-700 p-4 rounded-md">
      <div className="carouselCardImage ">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image_gallery[0].url}
            width={140}
            height={140}
            alt="sink"
            className="rounded-md "
          />
        </Link>
      </div>
      <div className="flex-1  flex flex-col justify-between pr-4">
        <div className="carouselCardTop flex justify-between text-color-text-300 items-center ">
          <div className="ellipsis-2 text-sm">{product.title?.rendered}</div>
        </div>
        <div className="carouselCardExtraInfo flex justify-between mt-4 text-xs text-color-text-200">
          <div>
            <span className="ml-4">مدل: دو لگن</span> <span>سایز: 76</span>
          </div>
        </div>

        <div className="caroudelCardButtons flex mt-4">
          <div className="bg-primary p-1 rounded-md">
            <Icon name="cart" />
          </div>
          <Link
            href="#"
            className="bg-white color-primary border border-gray-700 mr-2 py-1 text-sm flex-1 flex items-center justify-center  rounded-md text-primary "
          >
            نمایش محصول
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCardMobile;
