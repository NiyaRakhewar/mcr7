import React from "react";
import { data } from "./data";
import { IoLocation } from "react-icons/io5";
export const Continents = () => {
  return (
    <div>
      <h3>Top Continents for your next holiday</h3>
      <div className="options">
        {data.continents.map((continent) => (
          <div className="card">
            <img className="image" src={continent.image} alt="" />
            <div className="name">
              <IoLocation />
              <p>{continent.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
