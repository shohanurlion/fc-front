import Container from '@/components/shared/Container'
import React from 'react'

const ExpertFreelancer = () => {
  return (
   <Container>
        <div>
            <h1 className="text-4xl font-bold my-8">Expert Freelancer</h1>
            <p className="text-lg text-gray-700 mb-6">Find the best freelancers for your projects.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example freelancers, replace with actual data */}
            {['John Doe', 'Jane Smith', 'Michael Johnson', 'Sarah Lee'].map((freelancer, index) => (
            <div key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold">{freelancer}</h2>
                <p className="text-gray-600">Hire {freelancer.toLowerCase()} for your project.</p>
            </div>
            ))}        
        </div>  
   </Container>
  )
}

export default ExpertFreelancer