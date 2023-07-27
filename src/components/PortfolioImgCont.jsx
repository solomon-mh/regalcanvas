import React from "react";
import { Link } from "react-router-dom";
import { portfolioObj } from "./sub/PortfolioData";

export default function PortfolioImgCont() {
  return (
    <div className='px-2 mx-16'>
      <h1 className='text-4xl text-black font-sans m-12'>Portfolio</h1>
      <div className='w-full grid grid-cols-1 gap-4 justify-center items-center sm:grid-cols-2 lg:grid-cols-3'>
        {portfolioObj.map((portfolio) => (
          <div
            key={portfolio.id}
            className='m-4 h-48 w-full box-border overflow-hidden'
          >
            <Link to={`/ProfileDescription/${portfolio.id}`}>
              <img
                className='w-full h-full object-cover transition-all duration-500 hover:scale-105'
                key={portfolio.id}
                src={portfolio.imgName}
                alt={`img ${portfolio.id + 1}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
