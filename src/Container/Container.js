import React from "react";
import Banner from "../Banner/Banner.js";
import DealsOfTheDay from "../DealsOfTheDay/DealsOfTheDay.js";
import FurnitureBestsellers from "../FurnitureBestsellers/FurnitureBestsellers.js";
import MiniBanner from "../MiniBanner/MiniBanner";

import "./Container.css";

function Container() {
  return (
    <div className="container">
      <center>
        <Banner />
        <DealsOfTheDay />
        <MiniBanner />
        <FurnitureBestsellers />
      </center>
    </div>
  );
}

export default Container;
