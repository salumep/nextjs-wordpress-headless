'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { banners } from '../../utils/constant/mainPageBanners';

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
                height: '500px',
                backgroundSize: 'cover',
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="w-[350px] bg-[#0000004D] p-8 text-white text-center">
                  <div className="text-2xl mb-6">{banner.title}</div>
                  <div className="text-4xl leading-10">
                    {banner.description}
                  </div>
                  <button className="bg-primary mt-4 text-white text-sm rounded-md px-6 py-2">
                    بیشتر
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
