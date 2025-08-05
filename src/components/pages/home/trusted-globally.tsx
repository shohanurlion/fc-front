"use client";
import Container from "@/components/shared/Container";
import Image from "next/image";

const TrustedGloball = () => {
  return (
    <Container>
    <div className="py-12 bg-[#565659] rounded-2xl my-44">
      <div className=" flex justify-center items-center">
        <div className="p-8 md:p-12 text-white">
          <h1 className="text-[52px] font-normal">Freelance services at your <span className="text-[#D7613A]">fingertips</span></h1>
          <div className="flex justify-center items-center mt-10">
            <button className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-md hover:scale-105 transition">
          Join Now
          </button>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default TrustedGloball;
