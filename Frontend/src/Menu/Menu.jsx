import React from 'react';
import { menu_list } from '../assets/assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Menu = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="p-4 md:p-10 max-w-screen-xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">Explore Our Menu</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience — one delicious bite at a time.
        </p>
      </div>

      {/* Menu Items */}
      <div>
        <Slider {...settings}>
          {menu_list.map((dish, idx) => (
            <div
              key={idx}
            >
             
            <div className='flex flex-col justify-center items-center hover:cursor-pointer'>
                <img
                  src={dish.menu_image}
                  alt={dish.menu_name}
                  className="object-cover hover:scale-105 transition-transform duration-300 my-2"
                />
                <p className="text-lg font-semibold text-gray-800 text-center">{dish.menu_name}</p>
            </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Menu;
