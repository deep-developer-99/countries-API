// import countriesData from "../countriesData";
import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query),
            )
            .map((country, i) => {
              return (
                <CountryCard
                  key={i}
                  name={country.name.common}
                  flag={country.flags.svg}
                  officials={country.name.official}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default CountriesList;
