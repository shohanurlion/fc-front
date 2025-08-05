import React from 'react'

const HappendCard = ({ happenFreelancer }) => {
  return (
    <div className="flex justify-center items-center bg-white rounded-lg p-4 w-full transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(128,128,128,0.2)] cursor-pointer">
      <div>
        <div>
          <img src={happenFreelancer.img} alt="trusted service" />
        </div>
        <h1 className="text-center text-[20px] leading-5 text-black font-normal py-4">
          {happenFreelancer.title}
        </h1>
      </div>
    </div>
  )
}

export default HappendCard
