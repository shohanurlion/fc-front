import { CircleUserRound, Star } from "lucide-react"

const TrendingOfferCard = ({ offer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
      {/* Image */}
      <img
        src={offer.img}
        alt={offer.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-3 group-hover:underline underline-offset-4 transition">{offer.title}</h2>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {offer.skills.map((skill, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full hover:bg-blue-200 transition"
            >
              {skill}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
     <div className="flex items-center space-x-2 mt-4">
  <CircleUserRound size={30} className="text-gray-500 text-2xl" />  
  <div>
    <p>By-<span className="text-gray-500 font-bold">{offer.clent}</span></p>

    <p className="text-gray-500 flex items-center gap-1">
      <span className="text-yellow-500 flex items-center gap-1">
        <Star />
        {offer.rating}/5
      </span>
      <span className="text-sm text-gray-400">(100)</span>
    </p>
  </div>
</div>
      <div>
        <p className="text-[21px] font-bold">{offer.price}</p>                                 
      </div>
        </div>
          <hr/>
      <p className="text-gray-500 text-sm py-2">
        Delivered in 3 days
      </p>
      </div>
    
    </div>
  )
}

export default TrendingOfferCard
