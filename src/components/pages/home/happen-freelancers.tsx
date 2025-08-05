import Container from "@/components/shared/Container"
import HappendCard from "./happencard"
import { Rocket } from "lucide-react"

const HappeFreelancer = () => {
    const happenFreelancers = [
        {
            id: 1,
            title: "Make it all happen with freelancers",       
            img: '/svg-img/categories.8badf97.svg',
        },
        {
            id: 2,
            title: "Make it all happen with freelancers",  
            img: '/svg-img/matching.0eef7cc.svg',
        },
        {
            id: 3,
            title: "Make it all happen with freelancers",  
            img: '/svg-img/quickly.6879514.svg',
        },
         {
            id: 4,
            title: "Make it all happen with freelancers",  
            img: '/svg-img/happy.42ed7bd.svg',
        }
      ]
  return (
    <div>
        <Container>
            <div>
                <h1 className="text-[40px] text-white font-normal py-8">Make it all happen with freelancers</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
               {happenFreelancers.map((happenFreelancer) => (
                <HappendCard key={happenFreelancer.id} happenFreelancer={happenFreelancer} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-22">
                <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-md hover:scale-105 transition">
                 Join Now
                </button>
            </div>
        </Container>
    </div>
  )
}

export default HappeFreelancer