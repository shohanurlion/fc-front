import React from 'react'

const TrusteCard = ({ trustedService }) => {
  return (
    <div className="flex justify-center items-center bg-white rounded-lg p-4 w-full transition-all duration-300 hover:shadow-[1px_3px_6px_0px_#d6c5c5] hover:-translate-y-2 cursor-pointer">
      <div>
        <div className="flex justify-center items-center">
          <img src={trustedService.image} alt="trusted service" />
        </div>
        <h1 className="text-center text-[20px] text-black font-normal">
          {trustedService.name}
        </h1>
      </div>
    </div>
  );
};

export default TrusteCard;
