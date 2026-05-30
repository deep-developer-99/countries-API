import { Link } from "react-router";

const CountryCard = ({ name, flag, officials, data }) => {
  // console.log(data);
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <img src={flag} alt={name + " Flag"} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        {/* <p>
          <b>Population</b>2,87,371
        </p> */}
        <p>
          <b>Officials: </b>
          {officials}
        </p>
        {/* <p>
          <b>Capital: </b>Bridgetown
        </p> */}
      </div>
    </Link>
  );
};

export default CountryCard;
