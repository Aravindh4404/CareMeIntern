import Image from 'next/image';
import React from 'react';
import logoImage from './Images/logo.png';
import facebookLogo from './Images/facebook.png';
import instagramLogo from './Images/instagram.png';
import twitterLogo from './Images/twitter.png';

const Footertwo = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
        <Image src={logoImage} alt="Logo" className="ml-1" width={100} height={100} />
          <p className="mt-2">© 2023 Resource Page. All rights reserved.</p>
          <p>Contact us:</p>
          <p>Email: resourcepage@gmail.com</p>
          <p>Phone:+919150784231</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/" target='_blank' className="hover:text-blue-300"><Image src={facebookLogo} alt="Facebook" className="w-10 h-10 cursor-pointer" /></a>
          <a href="https://www.instagram.com/" target='_blank' className="hover:text-blue-300"><Image src={instagramLogo} alt="Facebook" className="w-10 h-10 cursor-pointer" /></a>
          <a href="https://www.twitter.com/" target='_blank' className="hover:text-blue-300"><Image src={twitterLogo} alt="Facebook" className="w-10 h-10 cursor-pointer" /></a>

        </div>
      </div>
    </footer>
  );
};

export default Footertwo;
