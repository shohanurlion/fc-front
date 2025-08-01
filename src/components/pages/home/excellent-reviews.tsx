import Container from '@/components/shared/Container'
import React from 'react'
import ReviewsCard from './reviews-card'

const ExcellentReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      image: '/img/05.jpeg',
      description:
        'Expert in web development and design.|Bespoke Applications and Games for web and mobile.',
      cuntry: 'Raksha',
      rating: 4.5,
      ratingCount: 10,
      review: 'Excellent work, highly recommended.',
      reviewCount: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: '/img/05.jpeg',
      description:
        'Expert in web development and design.|Bespoke Applications and Games for web and mobile.',
      cuntry: 'Canada',
      rating: 4.8,
      ratingCount: 8,
      review: 'Excellent work, highly recommended.',
      reviewCount: 5,
    }
  ]
  return (
    <div>
        <Container>
            <h1 className="text-4xl font-bold my-8">Thousands of excellent reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {reviews.map((review) => (
                    <ReviewsCard key={review.id} review={review} />
                ))}
            </div>
        </Container>
    </div>
  )
}

export default ExcellentReviews