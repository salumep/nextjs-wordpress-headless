'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from '../UI/icon';
import { IProduct } from '../../_lib/types/products';
import Button from '../share/Button';

interface Props {
  product: IProduct;
  width?: number;
}

const ProductCard: React.FC<Props> = ({ product, width }) => {
  return (
    <div
      className={`bg-white border border-gray-700 p-6 rounded-md ${
        width ? `w-[${width}px]` : ''
      }`}
    >
      <Link href={`/product/${product.slug}`}>
        <div className="carouselCardTop flex justify-between text-color-text-300 items-center ">
          <div className="ellipsis-2 h-[52px]">{product.title?.rendered}</div>
        </div>
        <div className="carouselCardImage mt-4">
          <Image
            src={product.image_gallery[0].url}
            width={253}
            height={119}
            alt="sink"
            className="rounded-md "
          />
        </div>
      </Link>
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
      </div>

      <div className="caroudelCardButtons flex mt-4 w-full">
        <div>
          <Button
            iconPosition="center"
            shape="primary"
            iconName="cart"
            size="small"
          />
        </div>
        <div className="flex-1 pr-2">
          <Button shape="outline" to="#" label="نمایش محصول" size="full" />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
