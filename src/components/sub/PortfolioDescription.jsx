import React from "react";
import { portfolioObj } from "./PortfolioData";
import { useParams } from "react-router-dom";

export default function PortfolioDescription() {
  const { id } = useParams();
  const portfolioId = parseInt(id);
  const portfolio = portfolioObj.find((port) => port.id === portfolioId);

  // Check if the portfolio is not found
  if (!portfolio) {
    return <div>Portfolio not found.</div>;
  }

  return (
    <div>
      <h1>Hello</h1>
      <img src={portfolio.imgName} alt={`Portfolio ${portfolioId}`} />
    </div>
  );
}
