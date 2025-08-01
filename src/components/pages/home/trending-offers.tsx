import Container from '@/components/shared/Container'
import React from 'react'

const TrendingOffers = () => {
  return (
    <Container>
       
        <div>
             <h1 className="text-4xl font-bold my-8">Trending Offers</h1>
            <p className="text-lg text-gray-700 mb-6">Browse and buy ready-prepared, fixed priced work from freelancers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example offers, replace with actual data */}
            {['Freelance Writing', 'Freelance Design', 'Freelance Photography', 'Freelance Video Editing'].map((offer, index) => (
            <div key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold">{offer}</h2>
                <p className="text-gray-600">Get {offer.toLowerCase()} for your project.</p>
            </div>
            ))}
        </div>
    </Container>
  )
}

export default TrendingOffers