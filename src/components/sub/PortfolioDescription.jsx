import React from "react";
import { portfolioObj } from "./PortfolioData";
import { useNavigate, useParams } from "react-router-dom";

export default function PortfolioDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const portfolioId = parseInt(id);
  const portfolio = portfolioObj.find((port) => port.id === portfolioId);

  const handleGoBack = () => {
    navigate(-1);
  };

  // Check if the portfolio is not found
  if (!portfolio) {
    return <div>Portfolio not found.</div>;
  }

  return (
    <div className='w-90perc mx-auto px-4 md:px-24'>
      <div className='m-4 h-72 sm:w-1/2 w-full  box-border overflow-hidden'>
        <img
          className='w-full h-full object-cover transition-all duration-500 hover:scale-105'
          src={portfolio.imgName}
          alt={`Portfolio ${portfolioId}`}
        />
      </div>
      <p className='m-4 transition-all duration-500 hover:text-brightRed'>
        {portfolio.name}
      </p>
      <p className='m-4'>
        <b>{portfolio.date}</b>
        <span className='px-3 text-brightRed'>{portfolio.author}</span>
      </p>
      <p className='m-4 text-simpleLight'>{portfolio.description}</p>
      <button
        className='bg-blue-500 rounded text-white py-1 px-3 m-3 transition duration-300 cursor-pointer hover:bg-blue-400 hover:text-black'
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
}
