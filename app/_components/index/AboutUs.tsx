import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className=" pt-16 ">
      <div className="lg:flex flex-row-reverse justify-between container">
        <div className="text-center">
          <Image
            className="rounded-md block mx-auto"
            src="/images/banners/sink.png"
            width={560}
            height={335}
            alt="sink"
          />
        </div>
        <div className="lg:max-w-[540px]">
          <h1 className="text-xl mb-8">کرومات پلاس</h1>
          <div className="text-sm leading-8">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،لورم ا
            استفاده از طراحان گرافیک از طراحان گرافیک از طراحان
          </div>
          <Link
            href="#"
            className="w-full max-w-[500px] mx-auto mt-8 py-2 justify-center flex items-center border-primary border rounded-md"
          >
            درباره ما
          </Link>
        </div>
      </div>
    </div>
  );
}
