import React, { useContext, useEffect, useState } from 'react';
import data from "../assets/HeroImages/data.js";
import './Hero.css'; // ← import the CSS file
import { contextStore } from '../Context/storeContext.jsx';

const Hero = () => {
  const [slider, setSlider] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-screen-xl h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] mx-auto my-10 rounded-2xl overflow-hidden p-[20px]">
      <div className="w-full h-full relative">
        <img
          key={slider}
          src={data[slider]}
          alt="hero-img"
          className="fade-image"
        />
      </div>

   
    </section>
  );
};

export default Hero;
