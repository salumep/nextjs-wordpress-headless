'use client';
import Link from 'next/link';
import React from 'react';
import { menu } from '../../utils/constant/MenuItems';
import { menuItem } from '../../types/menuItem';
export default function NavMenu() {
  return (
    <>
      <div className=" flex items-center hidden lg:block justify-between">
        <nav className="py-6 b">
          <ul className="flex ml-6">
            {menu.map((item: menuItem) => (
              <li className=" pl-3 pr-4">
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
