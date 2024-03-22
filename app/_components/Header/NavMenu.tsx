'use client';
import Link from 'next/link';
import React from 'react';
import { menu } from '../../_lib/constants/menuItems';
import { menuItem } from '../../_lib/types/menuItem';
export default function NavMenu() {
  return (
    <>
      <div className=" flex items-center hidden lg:block justify-between">
        <nav className=" pt-6">
          <ul className="flex text-sm ">
            {menu.map((item: menuItem, index: number) => (
              <li className=" pl-6 not-first:pr-4" key={index}>
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
