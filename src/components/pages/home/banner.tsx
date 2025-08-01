import Container from '@/components/shared/Container'
import React from 'react'

const Banner = () => {
  return (
    <Container>
        <div className="bg-gray-100 p-8 my-8 rounded-lg shadow-md flex justify-center items-center ">
            <div>
                <div>
                    <h1 className="text-4xl font-bold text-center my-8">Hire great freelancers,<br/> do greater work.</h1>
                   
                </div>
                {/* searchbar component can be added here */}
                <div>
                    <input type="text" placeholder="Search freelancers" className="w-full h-10 px-5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" />
                </div>
                {/* Service categories can be listed here */}
                <div className="mt-6">   
                    <ul className="flex flex-wrap gap-4">
                        <li className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md">Web Development</li>
                        <li className="px-4 py-2 bg-green-100 text-green-800 rounded-md">Graphic Design</li>
                        <li className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-md">Content Writing</li>
                        <li className="px-4 py-2 bg-red-100 text-red-800 rounded-md">Digital Marketing</li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Banner