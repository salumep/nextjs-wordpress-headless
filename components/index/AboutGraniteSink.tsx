import Image from 'next/image';
import React from 'react';

export default function AboutGraniteSink() {
  return (
    <div
      className=" mt-12 py-8"
      style={{
        backgroundImage: `url(/images/sinkbg.png)`,
        backgroundSize: 'cover',
      }}
    >
      <div className="container md:grid grid-cols-12 py-8 ">
        <div className="col-span-7 relative flex justify-end items-end md:pt-12 ">
          <div className="inline-block">
            <img
              src="/images/banners/index-sink-banner.png"
              className="relative z-10"
            />
          </div>
        </div>
        <div className="col-span-5 pr-4">
          <div className="text-2xl text-white font-medium my-6 md:my-0">
            سینک گرانیتی کرومات
          </div>
          <div className="flex items-center h-full">
            <div className="">
              <div>
                <div className="bg-[#FFFFFF70] pr-0  rounded-full inline-flex  items-center">
                  <Image
                    src="/images/adv-1.png"
                    width={78}
                    height={78}
                    alt=""
                  />
                  <div className="pr-4 pl-6">مقاوم در برابر حرارت</div>
                </div>
              </div>
              <div>
                <div className="bg-[#FFFFFF70] pr-0 mt-2  rounded-full inline-flex items-center">
                  <Image
                    src="/images/adv-2.png"
                    width={78}
                    height={78}
                    alt=""
                  />
                  <div className="pr-4 pl-6">ضد خراش و ضد ضربه</div>
                </div>
              </div>
              <div>
                <div className="bg-[#FFFFFF70] pr-0 mt-2  rounded-full inline-flex items-center">
                  <Image
                    src="/images/adv-3.png"
                    width={78}
                    height={78}
                    alt=""
                  />
                  <div className="pr-4 pl-6">سهولت خشک و پاک‌ شدن</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap items-center justify-center">
        <div className="px-4">
          <div className=" w-40 md:w-48 mb-4 md:mb-0 bg-gray-700 rounded-md  flex flex-col items-center justify-center py-8">
            <Image src="/images/adv-4.png" width={80} height={80} alt="" />
            <div className="mt-4">بهداشتی</div>
          </div>
        </div>
        <div className="px-4">
          <div className="w-40 md:w-48 mb-4 md:mb-0 bg-gray-700 rounded-md  flex flex-col items-center justify-center py-8">
            <Image src="/images/adv-5.png" width={80} height={80} alt="" />
            <div className="mt-4">گواهینامه استاندارد</div>
          </div>
        </div>
        <div className="px-4">
          <div className="w-40 md:w-48 mb-4 md:mb-0 bg-gray-700 rounded-md  flex flex-col items-center justify-center py-8">
            <Image src="/images/adv-6.png" width={80} height={80} alt="" />
            <div className="mt-4">طراحی اُرگونومیک</div>
          </div>
        </div>
        <div className="px-4">
          <div className="w-40 md:w-48 mb-4 md:mb-0 bg-gray-700 rounded-md  flex flex-col items-center justify-center py-8">
            <Image src="/images/adv-7.png" width={80} height={80} alt="" />
            <div className="mt-4">تضمین کیفیت</div>
          </div>
        </div>
      </div>
    </div>
  );
}
