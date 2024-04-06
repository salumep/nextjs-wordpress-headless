import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../UI/icon';
import Button from '../share/Button';
export default function Consultation() {
  return (
    <div className="px-4 py-6  md:flex mx-6 md:mx-auto items-center max-w-[758px] shadow-[0px_0px_12px_0px_#00000080] bg-white relative z-10 md:-mb-20 -mb-36  rounded-md">
      <div className="flex">
        <div className=" w-28 px-4">
          <Image src="/images/expert.png" width="48" height="48" alt={''} />
        </div>
        <div>
          <p className="mb-2">آیا به مشاوره احتیاج دارید؟</p>
          <div className="md:text-sm text-xs text-color-text-100">
            شما می توانید از شنبه تا چهارشنبه از ساعت 10 صبح تا 5 بعدازظهر با ما
            تماس بگیرید یا از طریق شبکه های اجتماعی و پیام رسان ها به ما پیام
            دهید.
          </div>
        </div>
      </div>
      <div className="text-center mt-4 md:mt-0">
        <Button
          iconName="call"
          label="تماس بگیرید"
          iconPosition="right"
          to="https://api.whatsapp.com/send/?phone=989123222162"
          shape="secondary"
        />
      </div>
    </div>
  );
}
