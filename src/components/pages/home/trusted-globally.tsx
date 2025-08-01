"use client";
import Container from "@/components/shared/Container";
import Image from "next/image";

const TrustedGloball = () => {
  return (
    <Container>
    <div className="py-12">
      <div className="bg-[#0C1121] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Text */}
        <div className="p-8 md:p-12 flex flex-col justify-center text-white">
          <p className="text-orange-500 font-medium mb-2">Grow your business</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            Trusted globally by over 1 million businesses, small to large
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 px-6 rounded">
            START NOW FOR FREE
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-72 md:h-auto">
          <Image
            src="/img/04.jpg" // Replace with your image path
            alt="Businesswoman on phone"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
    </Container>
  );
};

export default TrustedGloball;
