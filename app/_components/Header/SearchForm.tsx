'use client';
import React, { ChangeEvent } from 'react';
import Icon from '../UI/icon';
import { GET_PRODUCTS_ENDPOINT } from '../../_lib/contants/endPoints';
import { useState } from 'react';
import { IProduct } from '../../_lib/types/products';
import Image from 'next/image';

export default function SearchForm() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const HandleSearchProducts = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim().length == 0 || !event) {
      return;
    } else {
      const res = await fetch(
        `${GET_PRODUCTS_ENDPOINT}?subtype="chromatPlus_products"&search=${event.target.value}`,
        {
          method: 'get',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          }),
        }
      );

      const productsData = await res.json();
      setProducts(productsData);
    }
  };

  return (
    <div className="relative max-w-full w-full mb-2 lg:my-0 lg:w-[400px] md:p-2">
      <div className="relative">
        <input
          className="w-full  p-2 pr-12  rounded-md bg-gray-500 text-sm "
          type="text"
          placeholder="نام محصول مورد نظر خود را جستجو کنید"
          onChange={HandleSearchProducts}
        />
        <div className="absolute top-0 p-1.5 right-2 ">
          <Icon name="search" />
        </div>
      </div>
      {products.length > 0 &&
        products.map((product: IProduct) => (
          <div className="flex" key={product.id}>
            <Image
              src={product.image_gallery[0].url}
              width={50}
              height={50}
              alt=""
            />
            <div>{product.title?.rendered}</div>
          </div>
        ))}
    </div>
  );
}
