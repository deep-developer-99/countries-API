import React from "react";
import "./CountriesListShimmer.css";

const CountriesListShimmer = () => {
  // new Array(10).fill("")

  return (
    <div className="countries-container">
      {Array.from({ length: 100 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
};

export default CountriesListShimmer;
