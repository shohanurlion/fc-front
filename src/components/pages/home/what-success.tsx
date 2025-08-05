import Container from '@/components/shared/Container'
import React from 'react'

const WhatSuccess = () => {
  return (
    <div>
        <Container>
            <div>
                <div className='py-13'>
                    <h1 className='text-[44px] text-white font-normal'>What success on Fiverr looks like</h1>
                    <p className='text-[16px] font-normal'>Vontélle Eyewear turns to Fiverr freelancers to bring their vision to life.</p>
                </div>
               <div className=''>
                    <video className="w-full" controls>
                        <source src="https://pagedone.io/asset/uploads/1705298724.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            </div>

            </div>
        </Container>
    </div>
  )
}

export default WhatSuccess