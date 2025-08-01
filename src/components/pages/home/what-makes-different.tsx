import Container from '@/components/shared/Container'
import Image from 'next/image'
import img from '../../../../public/img/pexels-photo-257736.jpeg'
import { CircleCheckBig } from 'lucide-react'

const WhatMakesDifferent = () => {
  return (
    <Container>

 <div> 
        <h1 className="text-4xl font-bold text-center my-8">What makes us different?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="p-4">
                <ul>
                    <li className=''>
                       <div className='flex gap-2 mb-4'>
                            <CircleCheckBig className='mt-4' size={40}/>
                            <div>
                            <h1 className='text-4xl py-2'>Vetted Talent, Trusted Community</h1>
                             <p className='text-[21px]'>Every freelancer on PeoplePerHour is hand-reviewed and approved, ensuring quality work, every time</p>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className='flex gap-2 mb-4'>
                            <CircleCheckBig className='mt-4' size={40}/>
                            <div>
                            <h1 className='text-4xl py-2'>Built for the UK, Open to the World</h1>
                             <p className='text-[21px]'>We’re UK-first and proud—60% of our freelancers and clients are UK-based, but our reach is global, with users in over 100 countries.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-2 mb-4'>
                            <CircleCheckBig className='mt-4' size={40} />
                            <div>
                            <h1 className='text-4xl py-2'>AI-Powered, Human-Driven</h1>
                             <p className='text-[21px]'>Our smart AI matches you with the best humans for your job—fast, efficient, and tailored to your needs.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='relative w-full h-96 rounded-lg'>
                <Image src={img} alt="image" w-full h-full/>    
            </div>
            {/* other components can be added here */}
        </div>      
    </div>
    </Container>
   
  )
}

export default WhatMakesDifferent