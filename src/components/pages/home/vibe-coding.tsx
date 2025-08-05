import Container from '@/components/shared/Container'
import React from 'react'

const VibeCoding = () => {
  return (
    <div className='mt-44'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-24 py-34 bg-amber-600 rounded-2xl'>
                <div className=''>
                   
                     <h1 className='text-[48px] font-normal'>Stuck at vibe coding?</h1>
                    <p className='text-[20px] font-normal py-5'>Get matched with the right expert to turn your prototype into a real, working product.</p>
                    <div>
                        <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-md hover:scale-105 transition">Find an Expart
                        </button>
                    </div>
                   
                </div>
                <div className='flex justify-center items-center bg-gray-300 p-8 rounded-2xl'>
                       <video className="w-full" autoPlay muted loop>
                        <source src="/img/video.mp4" type="video/mp4" />
                        </video>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default VibeCoding