'use client'
import React, { useState }  from 'react';
import Image from 'next/image';
import logoImage from './Images/logo.png';
import Link from 'next/link';
import HamburgerMenu from 'react-hamburger-menu';



const Headertwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="bg-blue-900 fixed w-full top-16 text-white py-4 sm:py-6 z-10">
      
    <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
    <div className="">
          <HamburgerMenu
            isOpen={isMenuOpen}
            menuClicked={toggleMenu}
            width={23}
            height={20}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={5}
            animationDuration={.4}
          />
        </div>
        {isMenuOpen && (
          <nav>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-7">
              <li>
              <Link href="/blog">
                  <div className="cursor-pointer hover:text-blue-300">Blog</div>
                </Link>
              </li>
              <li>
                <Link href="/ebooks">
                  <div className="cursor-pointer hover:text-blue-300">Ebooks</div>
                </Link>
              </li>
              <li>
                <Link href="/webinar">
                  <div className="cursor-pointer hover:text-blue-300">Webinars</div>
                </Link>
              </li>
                       </ul>
          </nav>
        )}
      <div className="flex items-center mb-2 sm:mb-0">
        <Image src={logoImage} alt="Logo" className="w-16 sm:w-24" width={220} height={220} />
        <h1 className="text-xl sm:text-3xl font-bold font-sans ml-2 sm:ml-4">Resource Page</h1>
      </div>
      
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="rounded px-2 py-1 sm:px-3 sm:py-2"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded transition duration-300">
              Search
            </button>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:py-2 sm:px-4 rounded transition duration-300">Sign Up</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:py-2 sm:px-4 rounded transition duration-300">Log In</button>
        </div>
      </div>
   
  </header>
  



  );
};

export default Headertwo;