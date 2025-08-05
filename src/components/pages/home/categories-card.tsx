import React from 'react'

const CategorisCard = ({category}) => {
  return (
<div className="relative w-full h-[300px] overflow-hidden group rounded-3xl cursor-pointer">
  <img
    src={category.image}
    alt="category-image"
    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
  />
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/40 z-10"></div>

  {/* Text */}
  <h3
    className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-xl font-bold px-4 py-2 group-hover:border group-hover:border-white group-hover:rounded-lg transition-all duration-500 group-hover:translate-y-[-10px] z-20"
  >
   {category.name}
  </h3>
</div>

  )
}

export default CategorisCard