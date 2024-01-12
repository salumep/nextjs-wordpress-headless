'use client';
import React from 'react';
import NavMenu from './NavMenu';
import SearchForm from './SearchForm';
import Link from 'next/link';
import Icon from '../UI/icon';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { menu } from '../../utils/constant/MenuItems';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onCloseModalHandler = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div>
      <header>
        <div className="flex flex-col-reverse lg:grid grid-cols-3 container justify-between py-2 items-center border-b ">
          <div className="hidden lg:flex items-center">
            <div className="whitespace-nowrap">
              <Link href="/">کرومات پلاس</Link>
            </div>
            <NavMenu />
          </div>
          <div className="flex items-center mt-4 w-full lg:w-auto">
            <SearchForm />
          </div>
          <div className="flex justify-between w-full lg:w-auto lg:justify-end ">
            <div className="mobile-header block lg:hidden">
              <div
                className="mobile-navigation  p-1 xs:ml-2 sm:ml-5"
                onClick={() => setMobileMenuOpen((current) => !current)}
              >
                <Icon name="bars" />
              </div>
              <MobileMenu
                toggle={mobileMenuOpen}
                items={menu}
                onCloseModalHandler={onCloseModalHandler}
              />
            </div>
            <div className="whitespace-nowrap  block lg:hidden">
              <Link href="/"> کرومات پلاس</Link>
            </div>

            <div className="flex">
              <Link
                href="#"
                target="_blank"
                className=" py-1 md:py-2 rounded-md text-sm flex items-center px-4 border text-primary border-primary "
              >
                <Icon name="users" />
                <span className="pr-1">خرید همکار</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
