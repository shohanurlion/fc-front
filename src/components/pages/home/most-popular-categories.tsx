import Container from '@/components/shared/Container'
import React from 'react'

const MostPopularCategories = () => {
  return (
    <Container>
        <h1 className="text-4xl font-bold my-8">Most Popular Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example categories, replace with actual data */}
            {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Toys'].map((category, index) => (
            <div key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold">{category}</h2>
                <p className="text-gray-600">Explore the best in {category.toLowerCase()}.</p>
            </div>
            ))}
        </div>
    </Container>
  )
}

export default MostPopularCategories