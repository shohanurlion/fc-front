import Container from '@/components/shared/Container'
import Image from 'next/image'
import React from 'react'
import PremiumCard from './premium-card'
import { BadgeCheck } from 'lucide-react'

const PremiumFreelance = () => {
    const services = [
        {
            id: 1,
            title: 'Dedicated hiring experts',
            cont: 'Count on an account manager to find you the right talent and see to your project’s every need.',
            icon: <BadgeCheck size={30} />
        },
        {
            id: 2,
            title: 'Graphics & Design',
            cont: 'Count on an account manager to find you the right talent and see to your project’s every need.',
            icon: <BadgeCheck size={30} />
        },
        {
            id: 3,
            title: 'Digital Marketing',
            cont: 'Count on an account manager to find you the right talent and see to your project’s every need.',
            icon: <BadgeCheck size={30} />
        },
        {
            id: 4,
            title: 'Writing & Translation',
            cont: 'Count on an account manager to find you the right talent and see to your project’s every need.',
            icon: <BadgeCheck size={30} />
        }
    ]
  return (
    <div className='my-44'>
      <Container>
        <div>
            <h1 className="text-[48px] font-bold mb-6">FiverPro</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-12'>
                <div className=''>
                    <h1 className="text-[48px] font-normal mb-6">The <span className='text-red-700'> premium</span> freelance solution for businesses</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12'>
                        {services.map((service) => (
                          <PremiumCard key={service.id} service={service} />    
                        ))}
                    </div>
                </div>
                {/* img part  */}
                <div className='flex justify-center items-center'>
                    <Image src="/img/10.jpeg" alt="premium-freelance" width={500} height={300} />
                </div>
            </div>
          {/* Button try Now Button */}
          <div className='mt-11'>
               <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-md hover:scale-105 transition">
                 Try Now
          </button>
          </div>
        </div>
      </Container>  
    </div>
  )
}

export default PremiumFreelance