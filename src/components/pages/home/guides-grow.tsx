import Container from '@/components/shared/Container'
import Link from 'next/link'
import React from 'react'

const GuidesGrow = () => {
    const guides = [
        {
            id: 1,
            title: 'Start a side business',
            image: '/img/11.jpg',
        },
        {
            id: 2,
            title: 'Ecommerce business Ideasr',
            image: '/img/12.jpg',
        },
        {
            id: 3,
            title: 'Start an online business and work from home',
            image: '/img/13.jpg',
        }
    ]
  return (
    <div>
        <Container>
            <div className='flex justify-between items-center'>
                <h1 className='text-[48px] font-normal'>Guides to help you grow</h1>
                <Link href="/guides" className='text-white font-bold hover:underline'>
                  See More
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10'>
                {guides.map((guide) => (
                 <div key={guide.id}>
                    <div className="w-full relative h-auto">
                        <img src={guide.image} alt="image" className="w-full relative z-0 rounded-sm"/>
                        <Link href="#" className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "></Link>
                    </div>
                    <div>
                        <h1 className='text-[21px] font-bold py-5'>{guide.title}</h1>
                    </div>
                 </div>
                ))} 
            </div>
        </Container>
    </div>
  )
}

export default GuidesGrow