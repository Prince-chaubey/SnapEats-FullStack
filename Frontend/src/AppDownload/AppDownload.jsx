import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-100 via-white to-orange-100 py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          For a Better Experience,<br /> Download the <span className="text-orange-600">SnapEats</span> App
        </p>
        <p className="text-md text-gray-600 mb-8">
          Order food anytime, track deliveries in real-time, and enjoy app-only discounts. 
          Available now on the App Store and Google Play.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <img
            src={assets.play_store}
            alt="Download on Play Store"
            className="h-14 hover:scale-105 transition-transform cursor-pointer"
          />
          <img
            src={assets.app_store}
            alt="Download on App Store"
            className="h-14 hover:scale-105 transition-transform cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
