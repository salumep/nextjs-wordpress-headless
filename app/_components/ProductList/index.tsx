'use client';
import React, { useState, useEffect } from 'react';
import { IProduct } from '../../_lib/types/products';
import ProductCard from '../productCard/ProductCard';
import ProductCardMobile from '../productCard/ProductCardMobile';

export default function ProductListContent({ data }: { data: IProduct[] }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-6 my-6">
      {data.map((product: IProduct) => (
        <div className="overflow-hidden" key={product.id}>
          {windowWidth < 768 ? (
            <ProductCardMobile product={product} />
          ) : (
            <ProductCard product={product} />
          )}
        </div>
      ))}
    </div>
  );
}
