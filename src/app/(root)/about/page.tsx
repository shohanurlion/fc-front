"use client"
import Container from '@/components/shared/Container'
import { MoveRight } from 'lucide-react'
import { useState } from 'react';

const About = () => {
   const [showCoupon, setShowCoupon] = useState(false);
  return (
    <>
          <div className='flex items-center justify-center gap-4 py-10 bg-[#F5FFF6]'>
          <div>
            <h1 className='text-[14px] font-bold md:text-4xl md:font-normal text-gray-400'>Shpoing Cart</h1>
          </div>
          <MoveRight />
            <div>
            <h1 className='text-[14px] font-bold md:text-4xl md:font-normal text-gray-400'>Checkout</h1>
          </div>
          <MoveRight />
            <div>
            <h1 className='text-[14px] font-bold md:text-4xl md:font-normal text-gray-400'>Order Complete</h1>
          </div>
        </div>
        <Container>
      <div className='my-10'>
        {/* cupon code */}
          <div className="mt-6 px-4">
      <p className="text-[16px] text-gray-400 font-bold pb-2">
        Have a coupon?{" "}
        <span
          onClick={() => setShowCoupon(!showCoupon)}
          className="text-blue-800 cursor-pointer hover:underline"
        >
          Click here to enter your code
        </span>
      </p>

      {showCoupon && (
        <div className="flex items-center gap-4 py-6 border-2 border-dashed border-gray-300 px-4 rounded-md max-w-md transition-all duration-300">
          <input
            type="text"
            placeholder="Enter your coupon code"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-200">
            Apply
          </button>
        </div>
      )}
    </div>
        {/* Left and right side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4 bg-white rounded-lg">
      
      {/* Left Side - Billing & Shipping */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Billing & Shipping</h1>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              placeholder="Street address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
              <input
                type="text"
                placeholder="State"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zip</label>
              <input
                type="text"
                placeholder="Zip code"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

          </div>
            <div className="space-y-6 mt-8">
      {/* Checkbox with label */}
      <div className="flex items-start gap-3">
        <input
          id="exclusiveEmails"
          type="checkbox"
          className="mt-1 w-5 h-5 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="exclusiveEmails"
          className="text-sm text-gray-700 dark:text-gray-300"
        >
          I would like to receive exclusive emails with discounts and product information
        </label>
      </div>

      {/* Additional information section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Additional Information</h2>
        <label
          htmlFor="shippingAddress"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Shipping Address
        </label>
        <textarea
          id="shippingAddress"
          placeholder="Write your shipping address..."
          className="w-full h-28 resize-none px-4 py-2 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
        ></textarea>
      </div>
    </div>
        </div>
      </div>

      {/* Right Side - Future Content */}
      <div className="bg-gray-100 rounded-md min-h-[300px] px-6 py-10">
      <h1 className="text-2xl text-center font-bold text-gray-800 mb-8">Your Order</h1>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-gray-700">Product</span>
          <span className="font-semibold text-gray-700">Subtotal</span>
        </div>
        <hr className="mb-4" />

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Pure Delight Combo Pack</span>
          <span className="text-gray-700 font-medium">2,420.00৳</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between items-start mb-2">
          <span className="text-gray-600">Shipping</span>
          <p className="text-gray-600">
            Steadfast Home Delivery: <span className="font-medium text-gray-800">100.00৳</span>
          </p>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">Total</span>
          <span className="text-lg font-semibold text-orange-600">2,520.00৳</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <input
            id="cod"
            type="checkbox"
            className="mt-1 w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="cod" className="text-sm text-gray-700">
            Cash on Delivery
          </label>
        </div>

        <div className="flex items-start gap-3">
          <input
            id="bkash"
            type="checkbox"
            className="mt-1 w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="bkash" className="text-sm text-gray-700 flex items-center">
            bKash Payment Gateway
            <img src="/img/Bkash-Logo.jpg" alt="bKash" className="inline-block w-20 h-10 ml-2" />
          </label>
        </div>
      </div>

      {/* Privacy Info */}
      <hr className="border-gray-300 my-6" />
      <p className="text-sm text-gray-600">
        Your personal data will be used to process your order, support your experience throughout this
        website, and for other purposes described in our privacy policy.
      </p>

      {/* Review Checkbox */}
      <hr className="border-gray-300 my-6" />
      <div className="flex items-start gap-3 mb-6">
        <input
          id="reviewInvite"
          type="checkbox"
          className="mt-1 w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
        />
        <label htmlFor="reviewInvite" className="text-sm text-gray-700">
          Would you like to be invited to review your order? Check here to receive a message from
          CusRev (an independent reviews service) with a review form.
        </label>
      </div>

      {/* Place Order Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium px-6 py-3 w-full rounded-lg shadow transition duration-200">
        Place Order
      </button>
    </div>


    </div>

      </div>
    </Container>
    </>
    
  )
}

export default About