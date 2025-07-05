import React from 'react';
import { assets } from '../assets/assets';

const AboutUs = () => {
  return (
    <div className="px-6 lg:px-20 py-12 bg-white text-gray-800">
      
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Welcome to <span className="text-orange-600 font-semibold">SnapEats</span> – your go-to destination for fast, delicious, and doorstep-delivered meals. We’re not just about food; we’re about experience.
        </p>
      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-600">Our Mission</h3>
          <p>To bring happiness to every plate and doorstep by delivering fresh, high-quality meals prepared with love and care.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-600">Our Vision</h3>
          <p>To be the most trusted and loved online food delivery platform that connects food lovers with their favorite dishes seamlessly.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3 text-orange-600">Our Values</h3>
          <ul className="list-disc pl-5">
            <li>Customer-first approach</li>
            <li>Freshness guaranteed</li>
            <li>Transparency & trust</li>
            <li>Tech-driven convenience</li>
          </ul>
        </div>
      </section>

     
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Makes Us Different?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center space-y-3">
            <img src={assets.quality_icon} alt="Quality" className="h-16 w-16" />
            <h4 className="text-lg font-semibold">Top-Quality Ingredients</h4>
            <p>Every meal is prepared using fresh and locally sourced ingredients to ensure both taste and health.</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img src={assets.delivery_icon} alt="Delivery" className="h-16 w-16" />
            <h4 className="text-lg font-semibold">Fast Delivery</h4>
            <p>Lightning-fast delivery with real-time tracking ensures your food reaches you hot and on time.</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <img src={assets.support_icon} alt="Support" className="h-16 w-16" />
            <h4 className="text-lg font-semibold">24/7 Support</h4>
            <p>Got a question or an issue? Our friendly support team is always just a message away.</p>
          </div>
        </div>
      </section>

     
      <section className="bg-orange-50 py-10 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-semibold mb-3">Want to know more or join our team?</h3>
        <p className="text-gray-700 mb-6">Reach out to us or explore opportunities on our Careers page.</p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
