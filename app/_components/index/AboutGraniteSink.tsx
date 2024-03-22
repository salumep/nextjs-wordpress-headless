'use client';
import React from 'react';
import Icon from '../UI/icon';

export default function AboutGraniteSink() {
  return (
    <div className="bg-top md:bg-center mt-12 pt-8 lg:h-[700px] md:h-[600px] h-[440px]  bg-cover -mb-12 bg-[url('/images/banners/mobile-background.jpg')] md:bg-[url('/images/banners/background.jpg')]">
      <div className="container flex md:flex-row-reverse py-8 ">
        <div className="  pr-4">
          <div className="md:text-2xl text-white font-medium mb-6 md:my-6 border-r-2 pr-2 border-secondary">
            سینک گرانیتی کرومات پلاس
          </div>
          <div className="flex items-center h-full">
            <div className="">
              {/* first granite sink features */}
              <div>
                <div className=" pr-0 md:mb-6 mb-2 flex  ">
                  <Icon name="hygienic" />
                  <div className="pr-4 pl-6 flex flex-col justify-between">
                    <div className="text-white">
                      <span className="border-b border-secondary pb-2 text-xs  md:text-base">
                        بهداشتی
                      </span>
                    </div>
                    <div className="text-tiny md:text-sm text-gray-50 pb-2">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </div>
                  </div>
                </div>
              </div>
              {/* second granite sink features */}
              <div>
                <div className=" pr-0 md:mb-6 mb-2 flex  ">
                  <Icon name="resistant" />
                  <div className="pr-4 pl-6 flex flex-col justify-between">
                    <div className="text-white">
                      <span className="border-b border-secondary pb-2  text-xs md:text-base">
                        طراحی مقاوم
                      </span>
                    </div>
                    <div className="text-tiny md:text-sm text-gray-50 pb-2">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </div>
                  </div>
                </div>
              </div>
              {/* third granite sink features */}
              <div>
                <div className=" pr-0 md:mb-6 mb-2 flex  ">
                  <Icon name="easyToUse" />
                  <div className="pr-4 pl-6 flex flex-col justify-between">
                    <div className="text-white">
                      <span className="border-b border-secondary pb-2  text-xs md:text-base">
                        سهولت استفاده
                      </span>
                    </div>
                    <div className="text-tiny md:text-sm text-gray-50 pb-2">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
