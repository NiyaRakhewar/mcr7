import React from "react";
import { data } from "./data";
import { useNavigate, useParams } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { Destinations } from "./Destinations";
import "./CSS/main.css";

export const Country = () => {
  const { countryName } = useParams();
  const filterData = data.continents.find(
    (continent) => continent.name === countryName
  );

  const navigate = useNavigate();
  const clickHandler = (name) => {
    <Destinations countryName={countryName} />;
    // console.log(name);
    navigate(`/destination/${countryName}/${name}`);
  };

  return (
    <div>
      <h3>Top Countries in {countryName} for your next holiday</h3>
      <div className="options">
        {filterData?.countries?.map((country, i) => (
          <div
            key={i}
            className="card"
            onClick={() => clickHandler(country.name)}
          >
            <img className="image" src={country.image} alt="" />
            <div className="name">
              <IoLocation />
              <p>{country.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
