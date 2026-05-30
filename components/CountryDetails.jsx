import React from "react";
import { useEffect, useState } from "react";
import "./CountryDetails.css";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { useTheme } from "../hooks/useTheme";

const CountryDetails = () => {
  const [isDark] = useTheme();
  const params = useParams();
  const { state } = useLocation();

  console.log(state);
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      official: data.name.official,
      borders: [],
    });

    if (!data.map) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      }),
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders })),
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags`,
    )
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
        console.log(err);
      });
  }, [countryName]);

  if (notFound) {
    return (
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh",
          }}
        >
          Country Not Found
        </h1>
      </div>
    );
  }
  return countryData === null ? (
    <CountryDetailsShimmer />
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName} </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Officials: {countryData.official}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}{" "}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
