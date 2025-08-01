import { CircleUser, Star } from "lucide-react"


const FreelancerCard = ({ freelancer }) => {
  return (
    <div className="group bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="flex justify-center mb-4">
        <img
          src={freelancer.image}
          alt={freelancer.name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
        <div className="">
        <h2 className="text-xl font-semibold text-center text-gray-800 group-hover:underline underline-offset-4 mb-2">
        {freelancer.name}
      </h2>
      <p className="text-gray-600 mb-2">{freelancer.description}</p>
        </div>
       <div className="flex items-center space-x-2 mb-4">
        <CircleUser className="text-gray-500 text-2xl" />
         <p className="text-sm text-gray-500">{freelancer.cuntry}</p>
       </div>
       <div>
        <div className="flex space-x-2 mb-2">
            <Star className="text-yellow-500" />
             <span className="text-gray-500 font-blod text-1xl">{freelancer.rating}</span>
        </div>
       <hr className="my-4"/> 
        <div className="flex justify-between items-center space-x-1">
            <p className="text-gray-500 text-sm hover:underline">30680 projects</p>
            <p className="text-black font-bold"><span className="text-gray-500 text-[18px] font-bold">$11/</span>hr</p>
        </div>
       </div>

    </div>
  )
}

export default FreelancerCard
