'use client';
import React from 'react';
import Icon from '../UI/icon';
import Link from 'next/link';

export default function TopBarLinks() {
  return (
    <div className="navLinks flex text-sm">
      <Link href="/files/chromatplus_catalog_1402-03-06.pdf" target="_blank">
        <div className="flex ml-6 text-primary flex items-center ">
          <Icon name="download" />
          <span className="pr-2">کاتالوگ محصولات</span>
        </div>
      </Link>
      <Link href="/files/chromatplus_priceList.pdf" target="_blank">
        <div className="flex items-center">
          <Icon name="notes" />
          <span className="pr-2">لیست قیمت</span>
        </div>
      </Link>
    </div>
  );
}
