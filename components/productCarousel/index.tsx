'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCarouselCard from '../product/ProductCard';
import Link from 'next/link';
import { GET_PRODUCTS_ENDPOINT } from '../../utils/constant/endPoints';
import { IProduct } from '../../types/products';

interface Props {
  title: string;
  link?: string | null;
}
async function getProducts() {
  const data = await fetch(`${GET_PRODUCTS_ENDPOINT}`);
  return data.json();
}

const ProductCarousel: React.FC<Props> = ({ title = '', link = null }) => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProductsData(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  console.log(productsData);
  return (
    <div className="max-w-full  mt-12">
      <div className="carouselTitle mb-8 flex relative line-heading justify-between">
        <div className="text-xl bg-white pl-4 relative z-10 color-text-gray-300">
          {title}
        </div>
        {link && (
          <Link href={link} className="text-primary">
            مشاهده همه
          </Link>
        )}
      </div>
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
    </div>
  );
};
export default ProductCarousel;
