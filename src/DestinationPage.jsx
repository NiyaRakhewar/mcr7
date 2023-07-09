import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./data";
import "./CSS/destinationPage.css";

export const DestinationPage = () => {
  const { id, destinationName, countryName } = useParams();

  const filteredContinentData = data?.continents?.find(
    (continent) => continent.name === countryName
  );

  const filteredCountryData = filteredContinentData?.countries?.find(
    (country) => country.name === destinationName
  );

  const filteredDestinationData = filteredCountryData?.destinations?.find(
    (destination) => destination.name === id
  );

  console.log("page", filteredDestinationData);
  return (
    <div className="desc-main-container">
      <h1>{filteredDestinationData.name}</h1>
      <div className="desc-outer-container">
        <img className="desc-img" src={filteredDestinationData.image} alt="" />
        <div className="desc-inner-container">
          <p className="desc">
            <strong>Description:</strong> {filteredDestinationData.description}
          </p>
          <p>
            <strong>Rating:</strong> {filteredDestinationData.ratings}
          </p>
          <p>
            <strong>Review:</strong> {filteredDestinationData.reviews}
          </p>
          <p>
            <strong>Location:</strong> {filteredDestinationData.location}
          </p>
          <p>
            <strong>Opening Hours:</strong>{" "}
            {filteredDestinationData.openingHours}
          </p>
          <p>
            <strong>Ticket Price:</strong> $
            {filteredDestinationData.ticketPrice}
          </p>
          <a href={filteredDestinationData.website} rel="">
            {" "}
            Website{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
