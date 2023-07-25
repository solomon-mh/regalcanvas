import React from "react";

import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import image5 from "../assets/img5.png";
import image6 from "../assets/img1.png";

export const imgArr = [image1, image2, image3, image4, image5, image6];

export default function PortfolioImgCont() {
  return (
    <div className='px-2 mx-16'>
      <h1 className='text-4xl text-black font-sans m-12'>Portfolio</h1>
      <div className='w-full grid grid-cols-1 gap-4 justify-center items-center sm:grid-cols-2 lg:grid-cols-3'>
        {imgArr.map((img, index) => (
          <div
            key={index}
            className='m-4 h-48 w-full box-border overflow-hidden'
          >
            <img
              className='w-full h-full object-cover transition-all duration-500 hover:scale-105'
              key={index}
              src={img}
              alt={`img ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
