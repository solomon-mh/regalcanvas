import React from "react";
import Testimonial from "./sub/Testimonial";
import Products from "./sub/Products";
import PortfolioImgCont from "./PortfolioImgCont";

export default function SiteSection() {
  return (
    <div className='text-simpleLight bg-white py-20'>
      <Products />
      <PortfolioImgCont />
      <Testimonial />
    </div>
  );
}
