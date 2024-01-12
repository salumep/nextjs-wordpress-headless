import React from 'react';
import Link from 'next/link';

export default function ShopLinkButton() {
  return (
    <div className="flex justify-between items-center">
      <Link
        className="bg-primary text-white text-center flex-1 py-2 rounded-md max-w-[390px]"
        href="#"
      >
        لینک خرید
      </Link>
      <div className="flex items-center">
        <input type="checkbox" />
        <span className="pr-2">مقایسه</span>
      </div>
    </div>
  );
}
