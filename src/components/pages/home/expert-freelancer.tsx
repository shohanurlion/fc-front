'use client'

import React from 'react'
import Slider from 'react-slick'
import Container from '@/components/shared/Container'
import FreelancerCard from './freelancer-card'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'

const ExpertFreelancer = () => {
  const sliderRef = React.useRef<Slider | null>(null)

  const freelancers = [
    {
      id: 1,
      name: 'John Doe',
      image: '/img/02.jpeg',
      description:
        'Expert in web development and design.|Bespoke Applications and Games for web and mobile.',
      cuntry: 'Raksha',
      rating: 4.5,
      ratingCount: 10,
      review: 'Excellent work, highly recommended.',
      reviewCount: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: '/img/02.jpeg',
      description:
        'Expert in web development and design.|Bespoke Applications and Games for web and mobile.',
      cuntry: 'Canada',
      rating: 4.8,
      ratingCount: 8,
      review: 'Excellent work, highly recommended.',
      reviewCount: 5,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      image: '/img/02.jpeg',
      description:
        'Expert in web development and design.|Bespoke Applications and Games for web and mobile.',
      cuntry: 'Ukraine',
      rating: 4.2,
      ratingCount: 12,
      review: 'Excellent work, highly recommended.',
      reviewCount: 5,
    },
    {
      id: 4,
      name: 'Sarah Lee',
      image: '/img/02.jpeg',
      description:
        'Expert in web development and design.|Bespoke Applications and Games for web and mobile.',
      cuntry: 'India',
      rating: 4.8,
      ratingCount: 8,
      review: 'Excellent work, highly recommended.',
      reviewCount: 5,
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <Container>
   <div className='my-16'>
       <div className="flex items-center justify-between mb-4 ">
        <div className='my-4'>
          <h1 className="text-4xl font-bold">Expert Freelancer</h1>
          <p className="text-lg text-gray-700">Find the best freelancers for your projects.</p>
        </div>

        {/* Top Nav Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="text-gray-600 hover:text-black transition"
          >
            <ArrowLeftCircle size={32} />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="text-gray-600 hover:text-black transition"
          >
            <ArrowRightCircle size={32} />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} className="px-2">
            <FreelancerCard freelancer={freelancer} />
          </div>
        ))}
      </Slider>
   </div>
    </Container>
  )
}

export default ExpertFreelancer
