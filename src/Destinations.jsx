import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "./data";
import { IoLocation } from "react-icons/io5";
import "./CSS/destination.css";
import { DestinationPage } from "./DestinationPage";
export const Destinations = () => {
  const { destinationName, countryName } = useParams();

  const filteredContinentData = data?.continents?.find(
    (continent) => continent.name === countryName
  );

  const filteredCountryData = filteredContinentData?.countries?.find(
    (country) => country.name === destinationName
  );
  const navigate = useNavigate();
  const clickHandler = (id) => {
    <DestinationPage />;
    // console.log(name);
    navigate(`/destinationpage/${countryName}/${destinationName}/${id}`);
  };

  return (
    <div>
      <h3>Top Destinations in {destinationName} for your next holiday</h3>
      <div className="options">
        {filteredCountryData?.destinations?.map((destination, i) => (
          <div
            key={i}
            className="card"
            onClick={() => clickHandler(destination.name)}
          >
            <img className="image" src={destination.image} alt="" />
            <div className="name">
              <IoLocation />
              <p>{destination.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
