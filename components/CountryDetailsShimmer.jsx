import React from "react";
import "./CountryDetailsShimmer.css";

const CountryDetailsShimmer = () => {
  return (
    <main>
      <div className="country-details-container">
        <div className="back-button shimmer"></div>

        <div className="country-details">
          <div className="shimmer flag-shimmer"></div>

          <div className="details-text-container">
            <div className="shimmer title-shimmer"></div>

            <div className="details-text">
              <div className="shimmer text-shimmer"></div>
              <div className="shimmer text-shimmer"></div>
              <div className="shimmer text-shimmer"></div>
              <div className="shimmer text-shimmer"></div>
              <div className="shimmer text-shimmer"></div>
              <div className="shimmer text-shimmer"></div>
              <div className="shimmer text-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetailsShimmer;
