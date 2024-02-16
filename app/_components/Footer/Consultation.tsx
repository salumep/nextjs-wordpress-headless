import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../UI/icon';
export default function Consultation() {
  return (
    <div className="px-4 py-6 flex items-center max-w-[758px] shadow-[0px_0px_12px_0px_#00000080] mx-auto bg-white relative z-10 -mb-16 mt-20 rounded-md">
      <div className=" w-28 px-4">
        <Image src="/images/expert.png" width="48" height="48" alt={''} />
      </div>
      <div>
        <p className="mb-2">آیا به مشاوره احتیاج دارید؟</p>
        <div className="text-sm text-color-text-100">
          شما می توانید از شنبه تا چهارشنبه از ساعت 9:00 صبح تا 5 بعدازظهر با ما
          تماس بگیرید یا از طریق شبکه های اجتماعی و پیام رسان ها به ما پیام
          دهید.
        </div>
      </div>
      <div className="whitespace-nowrap flex items-center p-2 border border-gray-800 rounded-md">
        <Icon name="call" />
        <Link href="#" className="text-sm text-color-text-800 pr-1">
          تماس بگیرید
        </Link>
      </div>
    </div>
  );
}
