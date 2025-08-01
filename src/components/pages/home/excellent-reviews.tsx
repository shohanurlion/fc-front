import Container from '@/components/shared/Container'
import React from 'react'

const ExcellentReviews = () => {
  return (
    <div>
        <Container>
            <h1 className="text-4xl font-bold my-8">Thousands of excellent reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example reviews, replace with actual data */}
                {['Excellent customer service', 'Fast delivery', 'Affordable prices', 'Quality products'].map((review, index) => (
                <div key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold">{review}</h2>
                    <p className="text-gray-600">Read the review of {review.toLowerCase()}.</p>
                </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default ExcellentReviews