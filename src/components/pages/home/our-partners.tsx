import React from "react";

import Image from "next/image";

import Marquee from "react-fast-marquee";
import Container from "@/components/shared/Container";


const partners = [
  "/partner1.png",
  "/partner2.png",
  "/partner3.png",
  "/partner4.png",
  "/partner5.png",
  "/partner6.png",
  "/partner7.png",
];

export default function OurPartners() {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center my-8">TRUSTED BY</h1>
      <Marquee>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-40">
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner}
              width={200}
              height={200}
              alt={`Partner ${index + 1}`}
              className="my-4 h-fit max-h-12 w-fit max-w-40"
            />
          ))}
        </div>
      </Marquee>
    </Container>

   
  );
}