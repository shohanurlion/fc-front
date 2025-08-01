

import React from 'react';
import Image from 'next/image';
import img from '../../../../public/img/quote-left.png';

const ReviewsCard = ({ review }) => {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300 bg-white">
         <Image
          src={img}
          alt={'Quote Icon'}
          width={50}
          height={50}
          className="object-cover"
        />
      <p className="text-[26px] text-gray-800 my-10">
        {review.description}
      </p>
      <div className="flex items-center gap-4">
              <Image
            src={review.image}
            alt={review.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover aspect-square"
          />

        <div>
          <p className="font-semibold">{review.name}</p>
          <p className="text-gray-500 text-sm">{review.cuntry}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
