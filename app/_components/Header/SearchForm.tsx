'use client';
import React, { ChangeEvent } from 'react';
import Icon from '../UI/icon';
import { GET_PRODUCTS_ENDPOINT } from '../../_lib/constants/endPoints';
import { useState, useEffect } from 'react';
import { IProduct } from '../../_lib/types/products';
import Image from 'next/image';

import Link from 'next/link';
import { throttle } from 'lodash';
import { useRef } from 'react';

export default function SearchForm() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const resultWrap = useRef<HTMLDivElement>(null);
  const [showResultWrap, setShowResultWrap] = useState<boolean>(false);

  // Throttle the search function to prevent too frequent API calls
  const throttledHandleSearchProducts = throttle(async (event) => {
    if (event.target.value.trim().length === 0 || !event) {
      return;
    } else {
      const res = await fetch(
        `${GET_PRODUCTS_ENDPOINT}?subtype="product"&search=${event.target.value}`,
        {
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          }),
        }
      );

      const productsData = await res.json();
      setProducts(productsData);
      setShowResultWrap(true);
    }
  }, 500);

  const HandleSearchProducts = (event: ChangeEvent<HTMLInputElement>) => {
    throttledHandleSearchProducts(event);
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeResultWrap);
    return () => {
      document.removeEventListener('mousedown', closeResultWrap);
    };
  });
  const closeResultWrap = (e: MouseEvent): void => {
    if (
      resultWrap.current &&
      showResultWrap &&
      !resultWrap.current.contains(e.target as HTMLDivElement)
    ) {
      setShowResultWrap(false);
    }
  };

  return (
    <div className="relative max-w-full w-full mb-2 lg:my-0  md:p-2">
      <div className="relative">
        <input
          className="w-full py-3 p-2 pr-12  rounded-md bg-gray-500 text-sm "
          type="text"
          placeholder="نام محصول مورد نظر خود را جستجو کنید"
          onChange={HandleSearchProducts}
        />
        <div className="absolute top-0 p-1.5 right-2 ">
          <Icon name="search" />
        </div>
      </div>
      <div
        className={`absolute z-20 bg-white w-full ${
          showResultWrap ? '' : 'hidden'
        } `}
        ref={resultWrap}
      >
        {products.length > 0 &&
          products.slice(0, 5).map((product: IProduct) => (
            <Link
              href={`/product/${product.slug}`}
              target="_blank"
              key={product.id}
              className="px-4  py-2 block"
            >
              <div className="flex mb-4">
                <Image
                  src={product.image_gallery[0].url}
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="pr-2">{product.title?.rendered}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
