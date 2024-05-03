'use client';
import React, { ChangeEvent } from 'react';
import Icon from '../UI/icon';
import { useState, useEffect } from 'react';
import { IProduct } from '../../_lib/types/products';
import Image from 'next/image';
import Link from 'next/link';
import { throttle } from 'lodash';
import { useRef } from 'react';
import { searchProductsQuery } from '../../queries/searchProducts';
import { notFound } from 'next/navigation';

export default function SearchForm() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const resultWrap = useRef<HTMLDivElement>(null);
  const [showResultWrap, setShowResultWrap] = useState<boolean>(false);

  /**
   * ------------------------------------------------------------------------------------------------
   * get filtered products
   * ------------------------------------------------------------------------------------------------
   */
  async function getFilteredProducts(keyword: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        variables: { keyword },
        query: searchProductsQuery,
      }),
    });
    const { data } = await res.json();
    if (data && data.products && data.products.nodes) {
      return data.products.nodes;
    } else {
      return notFound();
    }
  }
  /**
   * ------------------------------------------------------------------------------------------------
   * search function
   * ------------------------------------------------------------------------------------------------
   */
  //Throttle the search function to prevent too frequent API calls
  const throttledHandleSearchProducts = throttle(async (event) => {
    if (event.target.value.trim().length === 0 || !event) {
      return;
    } else {
      const productsData = await getFilteredProducts(event.target.value);

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
          showResultWrap ? 'pt-6' : 'hidden'
        } `}
        ref={resultWrap}
      >
        {products.length > 0 ? (
          products.slice(0, 5).map((product: IProduct) => (
            <Link
              href={`/product/${product.slug}`}
              target="_blank"
              key={product.id}
              className="px-4  py-2 block"
            >
              <div className="flex mb-4 items-center">
                <Image
                  src={product.imageGallery[0].url}
                  width={50}
                  height={50}
                  alt=""
                  className="rounded-md"
                />
                <div className="pr-2">{product.title}</div>
              </div>
            </Link>
          ))
        ) : (
          <>نتیجه ای یافت نشد</>
        )}
      </div>
    </div>
  );
}
