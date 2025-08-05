import AllServic from '@/components/pages/home/allservic'
import Banner from '@/components/pages/home/banner'
import GuidesGrow from '@/components/pages/home/guides-grow'
import HappeFreelancer from '@/components/pages/home/happen-freelancers'
import LogoMaker from '@/components/pages/home/makelogo'
import MostPopularCategories from '@/components/pages/home/most-popular-categories'
import PremiumFreelance from '@/components/pages/home/premium-freelance'
import TrustedGloball from '@/components/pages/home/trusted-globally'
import TrustedService from '@/components/pages/home/trusted-services'
import VibeCoding from '@/components/pages/home/vibe-coding'
import WhatSuccess from '@/components/pages/home/what-success'
import React from 'react'

const Home = () => {
  return (
    <>
     <Banner/>
      <AllServic/>
      <MostPopularCategories/>
      <VibeCoding/>
      <PremiumFreelance/>
      <WhatSuccess/>
      <TrustedService/>
      <HappeFreelancer/>
      <LogoMaker/>
      <GuidesGrow/>
      <TrustedGloball/>
    </>
  )
}

export default Home