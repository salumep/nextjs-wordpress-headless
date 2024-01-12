'use client';
import React from 'react';
import Icon from '../UI/icon';

export default function topBarLinks() {
  return (
    <div className="navLinks flex text-sm mt-4 md:mt-0 ">
      <div className="flex  ml-6 text-primary flex items-center ">
        <Icon name="download" />
        <span className="pr-2">کاتالوگ محصولات</span>
      </div>
      <div className="flex items-center">
        <Icon name="notes" />
        <span className="pr-2">لیست قیمت</span>
      </div>
    </div>
  );
}
