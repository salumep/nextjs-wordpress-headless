'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { banners } from '../../_lib/constants/mainPageBanners';

export default function MainPageBanners() {
  type Banner = {
    link: string;
    image: string;
    title: string;
    description: string;
    alt: string;
  };

  return (
    <div className="max-w-full">
      <Swiper slidesPerView={1}>
        {banners.map((banner: Banner) => (
          <SwiperSlide key={banner.link}>
            <div
              style={{
                backgroundImage: `url(${banner.image})`,
                height: '416px',
                backgroundSize: 'cover',
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="w-[400px] bg-[#0000004D] p-8 text-white text-center">
                  <div className="text-2xl mb-6 text-secondary">
                    {banner.title}
                  </div>
                  <div className="text-2xl leading-10">
                    {banner.description}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
