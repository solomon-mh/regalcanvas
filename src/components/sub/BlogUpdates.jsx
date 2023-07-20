import React from "react";
import { imgArr } from "../PortfolioImgCont";
import person1 from "../../assets/person_1.jpg";

export default function BlogUpdates() {
  return (
    <div className='mx-16 px-2'>
      <div style={{ wordSpacing: "1px" }} className='py-12 w-3/5'>
        <h1 className='text-3xl text-black font-sans font-bold my-6'>
          Blog Updates
        </h1>
        <p className='leading-9 text-xl pr-10'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          ducimus facere quam eos tempore beatae non eius, provident
        </p>
      </div>
      <div>
        <div className='w-full grid gap-4 grid-cols-3 justify-center items-center'>
          {imgArr.map((img, index) => (
            <div>
              <div className='m-4 h-48 w-full box-border overflow-hidden'>
                <img
                  className='w-full h-full object-cover transition-all duration-500 hover:scale-105'
                  key={index}
                  src={img}
                  alt={`img ${index + 1}`}
                />
              </div>
              <div className='m-4'>
                <p className='text-lg font-semibold'>October 18, 2019</p>
                <h2 className='text-2xl font-semibold font-sans'>
                  Google saying psudo-telophoto is more important
                </h2>
              </div>
              <div className='flex justify-around pr-4'>
                <div className='w-14 h-14  rounded-full overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={person1}
                    alt=''
                  />
                </div>
                <p>
                  by John freeman <br /> Thinker and Designer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
