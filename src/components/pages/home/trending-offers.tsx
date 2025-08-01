'use client';
import React from 'react';
import Slider from 'react-slick';
import TrendingOfferCard from './trendingoffercard';
import Container from '@/components/shared/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'Be your WordPress Ninja for 30 minutes',
      img: '/img/02.jpeg',
      clent: 'Raksha',
      price: '$100',
      rating: 4.5,
      skills: ['Writing', 'Editing'],
    },
    {
      id: 2,
      title: 'World Class High Quality Logo with Unlimited Revision in 24 Hour',
      img: '/img/02.jpeg',
      clent: 'John',
      price: '$200',
      rating: 4.7,
      skills: ['Design', 'Illustration'],
    },
    {
      id: 3,
      title: 'Year End Accounts for Companies House and CT600',
      img: '/img/02.jpeg',
      clent: 'Michael',
      price: '$300',
      rating: 4.2,
      skills: ['Photography', 'Video Editing'],
    },
    {
      id: 4,
      title: 'High-End, Flawless Photo Retouching / Editing & Photoshop Work',
      img: '/img/02.jpeg',
      clent: 'Sarah',
      price: '$400',
      rating: 4.8,
      skills: ['Video Editing', 'Animation'],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Trending Offers</h1>
          <p className="text-gray-600 text-base mt-1">
            Browse and buy ready-prepared, fixed priced work from freelancers
          </p>
          
        </div>
        {/* slick arrows automatically positioned */}
      </div>

      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="px-2">
            <TrendingOfferCard offer={offer} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TrendingOffers;
