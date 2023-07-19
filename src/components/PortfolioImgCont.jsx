import React from "react";

import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import image5 from "../assets/img5.png";
import image6 from "../assets/img1.png";

const imgArr = [image1, image2, image3, image4, image5, image6];

export default function PortfolioImgCont() {
  return (
    <div>
      <h1 className='text-4xl text-black  m-12'>Portfolio</h1>
      <div className='w-full px-12 grid grid-cols-3 justify-center items-center'>
        {imgArr.map((img, index) => (
          <div className='m-4 h-48 w-90perc box-border overflow-hidden'>
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
