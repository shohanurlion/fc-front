import Container from "@/components/shared/Container"
import { title } from "process"


const AllServic = () => {
    const services = [
        {
            id: 1,
            title: 'Programming & Tech',
            image: '/svg-img/digital-marketing.svg'
        },
        {
            id: 2,
            title: 'Graphics & Design',
            image: '/svg-img/graphics-design-thin.svg'
        },
        {
            id: 3,
            title: 'Digital Marketing',
            image: '/svg-img/digital-marketing.svg'
        },
        {
            id: 4,
            title: 'Writing & Translation',
            image: '/svg-img/writing-translation-thin.fd3699b.svg'
        },
        {
            id: 5,
            title: 'Video & Animation',
            image: '/svg-img/video-animation-thin.9d3f24d.svg'
         },
         {
             id: 6,
             title: 'AI Services',
             image: '/svg-img/ai-services-thin.104f389.svg'
         },
         {
             id: 7,
             title: 'Music & Audio',
             image: '/svg-img/music-audio.svg'
         },
         {
            id: 8,
            title: 'Business',
            image: '/svg-img/business.svg'
          }
    ]
  return (
    <div className="my-37">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-9 lg:grid-cols-8 gap-4 mt-12">
                {services.map((service) => (
                    <div key={service.id} className="gap-4 p-6 bg-white rounded-lg shadow-md">
                        <img src={service.image} alt="service-image" />
                        <h2 className="text-xl font-bold text-black py-3">{service.title}</h2>
                    </div>
                ))} 
            </div>
        </Container>
    </div>
  )
}

export default AllServic