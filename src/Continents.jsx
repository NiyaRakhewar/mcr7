import React from "react";
import { data } from "./data";
import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Country } from "./Country";
import "./CSS/main.css";
export const Continents = () => {
  const navigate = useNavigate();
  const clickHandler = (name) => {
    <Country />;
    // console.log(name);
    navigate(`/country/${name}`);
  };
  return (
    <div>
      <h3>Top Continents for your next holiday</h3>
      <div className="options">
        {data?.continents?.map((continent, i) => (
          <div
            key={i}
            className="card"
            onClick={() => clickHandler(continent.name)}
          >
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
