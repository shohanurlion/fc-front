import Container from '@/components/shared/Container'
import React from 'react'
import TrusteCard from './trustedCard'

const TrustedService = () => {
    const trustedServices = [
        {   id: 1,
            name: '3D Modeling & Rendering',
            image: '/svg-img/3D-Industrial-Design_2x.webp',
            
        },
        {   id: 2,
            name: 'E-commerce Website Development',
            image: '/svg-img/E-commerce-Website-Development_2x.webp',
            
        },
        {   id: 3,          
            name: 'Email Marketing',
            image: '/svg-img/E-commerce-Website-Development_2x.webp',
            
        },
         {
            id: 4,
            name: 'Press Releases',
            image: 'svg-img/Email-Marketing_2x.webp',

        },
        {
            id: 5,
            name: 'Logo Design',
            image: 'svg-img/Logo-Design_2x.webp',
        }       

    ]
  return (
    <div className='my-44'>
       <Container>
        <div className='mt-13 mb-8'>
            <h1 className='text-[32px] font-normal'>Vontélle’s trusted services</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-4 pt-4'>
            {trustedServices.map((trustedService) => (
               <TrusteCard key={trustedService.id} trustedService={trustedService}/>
            ))}

        </div>

       </Container>
    </div>
  )
}

export default TrustedService