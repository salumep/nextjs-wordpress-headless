'use client';
import Link from 'next/link';
import React from 'react';
import { menu } from '../../_lib/contants/menuItems';
import { menuItem } from '../../_lib/types/menuItem';
export default function NavMenu() {
  return (
    <>
      <div className=" flex items-center hidden lg:block justify-between">
        <nav className="py-6 b">
          <ul className="flex ml-6">
            {menu.map((item: menuItem, index: number) => (
              <li className=" pl-3 pr-4" key={index}>
                <Link href={`${item.link}`} className="whitespace-nowrap">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
