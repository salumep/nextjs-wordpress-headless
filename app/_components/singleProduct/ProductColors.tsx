'use client';
import React from 'react';
import { sinkColors } from '../../_lib/constants/productColors';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductColors({ colors }: { colors: string[] }) {
  const [focusedColor, setFocusedColor] = useState('');

  return (
    <div className="my-8 text-gray-900">
      <div>
        <p>{`موجود در ${colors?.length} رنگ متنوع`}</p>
      </div>
      <div className="whitespace-nowrap overflow-x-auto overflow-y-hidden lg:pb-7 pb-4  mt-4">
        {colors.map((color) => {
          const selectedColor = sinkColors.find(
            (sinkColor) => sinkColor.id == color
          );
          if (selectedColor) {
            return (
              <div
                key={selectedColor.id}
                className={`rounded-full border border-gray-600 ml-4 inline-flex relative p-2 lg:p-0  ${
                  focusedColor == selectedColor.id
                    ? 'border-primary-500 '
                    : 'border-gray-600'
                }`}
                onClick={() => setFocusedColor(selectedColor.id)}
              >
                <div className=" w-6 h-6 lg:w-16 lg:h-16 relative">
                  <Image
                    src={selectedColor.img}
                    objectFit="cover"
                    fill
                    alt={selectedColor.title}
                  />
                </div>

                <div className="flex lg:absolute -bottom-8 left-1/2 lg:-translate-x-1/2 ">
                  <div
                    className={` lg:bg-secondary-500  whitespace-nowrap z-10 rounded-xl lg:px-4 p-1 text-xs  ${
                      focusedColor == selectedColor.id ? '' : 'lg:hidden'
                    }`}
                  >
                    {selectedColor.title}({selectedColor.value})
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
