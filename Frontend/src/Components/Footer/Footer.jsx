import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 sm:px-12 md:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:items-start">

       
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-orange-600 tracking-wide">
            SnapEats<span className="text-orange-600">.</span>
          </h2>
          <p className="text-md leading-relaxed text-gray-300">
            At SnapEats, we believe great food brings people together. From sourcing the freshest ingredients to delivering your favorite meals hot and fast, our mission is to serve happiness in every bite. Whether you're ordering lunch at the office or enjoying a cozy dinner at home, we've got you covered with delicious choices and reliable service every day of the week.
          </p>
          <div className="flex gap-4">
            <img src={assets.facebook_icon} alt="Facebook" className="hover:opacity-80 cursor-pointer" />
            <img src={assets.twitter_icon} alt="Twitter" className="hover:opacity-80 cursor-pointer" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="hover:opacity-80 cursor-pointer" />
          </div>
        </div>

        
        <div className="flex flex-col gap-4 md:ml-20">
          <h3 className="text-3xl font-semibold text-orange-500">Company</h3>
          <ul className="flex flex-col gap-2 text-md text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Delivery</li>
          </ul>
        </div>

      
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-orange-500">Get In Touch</h3>
          <ul className="flex flex-col gap-2 text-md text-gray-300">
            <li className="hover:text-white">+91 9939XXXXXX</li>
            <li className="hover:text-white">SnapEats@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SnapEats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
