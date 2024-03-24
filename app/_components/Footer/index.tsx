'use client';
import React from 'react';
import Icon from '../UI/icon';
import Consultation from './Consultation';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <Consultation />
      <div className="bg-gray-500 pt-48 md:pt-32  ">
        <div className="lg:grid grid-cols-3 container">
          <div>
            <p className="lg:mb-4 font-semibold md:text-xl  text-center lg:text-right">
              کرومات پلاس
            </p>
            <ul className="leading-9 flex lg:block justify-center text-sm">
              <li className="pl-4">
                <Link href="#">درباره ما</Link>
              </li>
              <li className="pl-4">
                <Link href="https://chromatshop.com/">فروشگاه کرومات</Link>
              </li>
              <li className="pl-4">
                <Link href="https://corianchromat.ir/">کورین کرومات</Link>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-right">
            <p className="lg:mb-4 font-semibold md:text-xl">تماس با ما</p>
            <ul className="leading-9 text-sm">
              <li>
                <span>آدرس فروشگاه : شهرزیبا,احمدکاشانی, پلاک 43</span>
              </li>
              <li>
                <span>شماره‌های تماس: ۰۹۱۲۳۲۲۲۱۶۲ - ۴۴۳۵۷۷۷۲</span>
              </li>
              <li>
                <span>ایمیل: info[@]chromatshop.com</span>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-right">
            <p>با ما در شبکه‌های اجتماعی همراه باشید</p>
            <div className="flex mt-4 justify-center lg:justify-start">
              <div className="ml-4">
                <Icon name="telegram" />
              </div>
              <div className="ml-4">
                <Icon name="instagram" />
              </div>
              <div>
                <Icon name="aparat" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary text-white text-center py-2 text-sm mt-12">
          @1402 تمامی حقوق برای مجموعه کرومات محفوظ است.
        </div>
      </div>
    </>
  );
}
