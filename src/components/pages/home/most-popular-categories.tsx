'use client'

import React from 'react'
import Slider from 'react-slick'
import Container from '@/components/shared/Container'
import CategorisCard from './categories-card'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomNextArrow, CustomPrevArrow } from './CustomArrow'

const MostPopularCategories = () => {
  const categories = [
    { id: 1, name: 'Web Development', image: '/img/02.jpeg' },
    { id: 2, name: 'Graphic Design', image: '/img/02.jpeg' },
    { id: 3, name: 'Content Writing', image: '/img/02.jpeg' },
    { id: 4, name: 'Digital Marketing', image: '/img/02.jpeg' },
    { id: 5, name: 'SEO Services', image: '/img/02.jpeg' },
    { id: 6, name: 'Video Editing', image: '/img/02.jpeg' },
    { id: 7, name: 'Web Design', image: '/img/02.jpeg' },
    { id: 8, name: 'Web Development', image: '/img/02.jpeg' },
    { id: 9, name: 'Graphic Design', image: '/img/02.jpeg' },
    { id: 10, name: 'Content Writing', image: '/img/02.jpeg' },
    { id: 11, name: 'Digital Marketing', image: '/img/02.jpeg' },
    { id: 12, name: 'SEO Services', image: '/img/02.jpeg' },
    { id: 13, name: 'Video Editing', image: '/img/02.jpeg' },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <Container>
     <div className='my-16'>
       <h1 className="text-4xl font-bold mb-6">Most Popular Categories</h1>
      <div className="relative">
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="px-2">
              <CategorisCard category={category} />
            </div>
          ))}
        </Slider>
      </div>
     </div>
    </Container>
  )
}

export default MostPopularCategories
