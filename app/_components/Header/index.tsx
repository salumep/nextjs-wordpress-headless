'use client';
import React from 'react';
import NavMenu from './NavMenu';
import SearchForm from './SearchForm';
import Link from 'next/link';
import Icon from '../UI/icon';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { menu } from '../../_lib/constants/menuItems';
import Image from 'next/image';
import Button from '../share/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const onCloseModalHandler = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className="py-4">
      <div className="header-top container">
        <div className="flex  items-center ">
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
          <div className="flex-1 flex items-center">
            <div className="whitespace-nowrap pl-7 text-xl ">
              <div className="md:h-9 md:w-40 h-5 w-24 relative">
                <Link href="/">
                  <Image src="/images/chromatplus.png" alt="کرومات پلاس" fill />
                </Link>
              </div>
            </div>
            <div className=" items-center flex-1 hidden lg:flex  w-full lg:w-auto">
              <SearchForm />
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div>
              <Button
                to="https://api.whatsapp.com/send/?phone=989123222162"
                label="خرید همکار"
                newTab={true}
                shape="primary"
                iconName="users"
                iconPosition="left"
              />
            </div>
            <div className="hidden lg:flex mr-4">
              <Button
                to="https://chromatshop.com"
                label="فروشگاه"
                newTab={true}
                shape="outline"
                iconName="shop"
                iconPosition="left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:grid grid-cols-3 container justify-between  items-center  ">
        <div className="hidden lg:flex items-center">
          <NavMenu />
        </div>

        <div className="flex justify-between w-full  lg:hidden lg:justify-end mt-4">
          <SearchForm />
        </div>
      </div>
    </header>
  );
}
