'use client';

import React from 'react';
import Slider from 'react-slick';
import Container from '@/components/shared/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerImages = [
  '/img/pexels-photo-257736.jpeg',
  '/img/02.jpeg',
  '/img/03.jpg',
  '/img/04.jpg',
];

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-[700px]">
      {/* Background Image Slider */}
      <Slider {...settings}>
        {bannerImages.map((src, index) => (
          <div key={index} className="w-full h-[700px] relative">
            <img
              src={src}
              alt={`banner-${index}`}
              className="w-full h-[700px] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-7xl leading-24 font-bold my-14">
              Hire great freelancers,<br /> do greater work.
            </h1>

            {/* Search bar */}
            <div className="max-w-xl w-full mx-auto my-8">
              <input
                type="text"
                placeholder="Search freelancers"
                className="w-full h-12 px-5 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>

            {/* Category tags */}
            <ul className="my-6 flex flex-wrap justify-center gap-3 text-sm font-medium">
              <li className="px-4 py-2 text-white border-2 bg-transparent rounded-full cursor-pointer hover:bg-gray-">Web Development</li>
              <li className="px-4 py-2 text-white border-2 bg-transparent rounded-full cursor-pointer">Graphic Design</li>
              <li className="px-4 py-2 text-white border-2 bg-transparent rounded-full cursor-pointer">Content Writing</li>
              <li className="px-4 py-2 text-white border-2 bg-transparent rounded-full cursor-pointer">Digital Marketing</li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
