import React from "react";
import { imgArr } from "./PortfolioImgCont";
import FooterSection from "./FooterSection";

const data = {
  name: "Lorem ipsum dolor sit amet",
  date: "July 17, 2019 by",
  author: "Admin",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
};
export default function Blog() {
  return (
    <div>
      <div className='container mx-auto text-center w-full  lg:w-3/4 p-6 md:p-12 lg:p-20 mb-28'>
        <h1 className='text-brightRed text-2xl sm:text-4xl lg:text-6.5xl leading-loose word-spacing-4 lg:px-24 font-bold font-sans mb-12'>
          Blog Updates
        </h1>
        <p className='leading-8 hidden sm:block'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          incidunt vitae fugit harum architecto doloribus facere omnis
          recusandae pariatur porro quis alias quas animi, dignissimos fuga ab
          reprehenderit repudiandae ea?
        </p>
        <p className='leading-8 block sm:hidden'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem
          nulla quos suscipit laborum fugit aspernatur rem pariatur illo.
        </p>
      </div>
      <div className='w-full  bg-white py-16 lg:py-32'>
        <div className='py-12 grid grid-cols-1 gap-4 justify-center items-center sm:grid-cols-2 lg:px-24 lg:grid-cols-3'>
          {imgArr.map((img, index) => (
            <div className='px-8 lg:px-0'>
              <div className='m-4 h-72 lg:h-48 w-full box-border overflow-hidden'>
                <img
                  className='w-full h-full object-cover transition-all duration-500 hover:scale-105'
                  key={index}
                  src={img}
                  alt={`img ${index + 1}`}
                />
              </div>
              <div className='px-6'>
                <p className='pb-4 transition-all duration-500 hover:text-brightRed'>
                  {data.name}
                </p>
                <p className='pb-4'>
                  <b>{data.date}</b>
                  <span className='px-3 text-brightRed'>{data.author}</span>
                </p>
                <p className='text-simpleLight'>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
        <ul className='flex mx-auto w-44 justify-around pt-12'>
          <li>1</li>
          <li className='text-brightRed'>2</li>
          <li className='text-brightRed'>3</li>
          <li className='text-brightRed'>4</li>
        </ul>
      </div>
      <FooterSection />
    </div>
  );
}
