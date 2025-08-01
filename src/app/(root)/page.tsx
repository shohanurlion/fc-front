import Banner from '@/components/pages/home/banner'
import ExcellentReviews from '@/components/pages/home/excellent-reviews'
import ExpertFreelancer from '@/components/pages/home/expert-freelancer'
import MostPopularCategories from '@/components/pages/home/most-popular-categories'
import OurPartners from '@/components/pages/home/our-partners'
import TrendingOffers from '@/components/pages/home/trending-offers'
import TrustedGloball from '@/components/pages/home/trusted-globally'
import WhatMakesDifferent from '@/components/pages/home/what-makes-different'
import React from 'react'

const Home = () => {
  return (
    <>
     <Banner/>
      <OurPartners/>
      <WhatMakesDifferent/>
      <MostPopularCategories/>
      <ExcellentReviews/>
      <ExpertFreelancer/>
      <TrendingOffers/>
      <TrustedGloball/>
    </>
  )
}

export default Home