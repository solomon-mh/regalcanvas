import React from "react";
import Products from "./sub/Products";
import Testimonial from "./sub/Testimonial";
import FooterSection from "./FooterSection";

export default function About() {
  return (
    <div>
      <div className='container mx-auto text-center w-3/4 pt-28 pb-64'>
        <h1 className='text-brightRed text-6xl font-extrabold font-sans mb-12'>
          About Us
        </h1>
        <p className='leading-8'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
          incidunt vitae fugit harum architecto doloribus facere omnis
          recusandae pariatur porro quis alias quas animi, dignissimos fuga ab
          reprehenderit repudiandae ea?
        </p>
      </div>
      <div className='bg-white py-32'>
        <Products />
        <Testimonial />
      </div>
      <FooterSection />
    </div>
  );
}
