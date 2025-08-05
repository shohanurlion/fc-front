'use client';

import React from 'react';
import Slider from 'react-slick';
import Container from '@/components/shared/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MoveRight, Search } from 'lucide-react';

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
          <div className="text-white">
            <h1 className="text-7xl leading-24 my-14">
              Hire great freelancers,<br /> do greater work.
            </h1>

            {/* Search bar */}
            <div className="relative w-full max-w-6xl my-8">
              <Search size={24} color='black' fontWeight={700} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search freelancers"
                className="w-full h-12 px-5 py-7 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            {/* Category tags */}
            <ul className="my-6 flex gap-3 text-sm font-medium">
              <li className="px-4 py-2 flex items-center gap-3 text-white border-2 bg-transparent rounded-full cursor-pointer hover:bg-gray-">Web Development <MoveRight size={24} /></li>
              <li className="px-4 py-2 flex items-center gap-3 text-white border-2 bg-transparent rounded-full cursor-pointer">Graphic Design <MoveRight size={24} /></li>
              <li className="px-4 py-2 flex items-center gap-3 text-white border-2 bg-transparent rounded-full cursor-pointer">Content Writing <MoveRight size={24} /></li>
              <li className="px-4 py-2 flex items-center gap-3 text-white border-2 bg-transparent rounded-full cursor-pointer">Digital Marketing <MoveRight size={24} /></li>
              <li className="px-4 py-2 flex items-center gap-3 text-white border-2 bg-transparent rounded-full cursor-pointer">Video Editing <MoveRight size={24} /></li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
