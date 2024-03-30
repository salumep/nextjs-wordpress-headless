'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../productCard/ProductCard';
import { IProduct } from '../../_lib/types/products';

export default function SwiperComponent({
  productsData,
}: {
  productsData: IProduct[];
}) {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={18}
      loop={true}
      watchSlidesProgress={true}
    >
      {productsData.map((product, index) => (
        <SwiperSlide
          key="index"
          style={{
            width: 'auto',
            alignSelf: 'stretch',
            height: 'auto',
          }}
        >
          <ProductCard product={product} width={300} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
