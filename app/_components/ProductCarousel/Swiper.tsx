'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCarouselCard from '../product/ProductCard';
import { IProduct } from '../../_lib/types/products';

export default function SwiperComponent({
  productsData,
}: {
  productsData: IProduct[];
}) {
  return (
    <Swiper slidesPerView="auto" spaceBetween={18} loop={true}>
      {productsData.map((product, index) => (
        <SwiperSlide
          key="index"
          style={{
            width: 'auto',
            alignSelf: 'stretch',
            height: 'auto',
          }}
        >
          <ProductCarouselCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
