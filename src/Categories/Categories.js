import React from "react";
import "./Categories.css";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

function Categories() {
  return (
    <div className="categories">
      <span className="categories__electronics option">
        Electronics
        <ExpandMoreRoundedIcon className="categories__icon" />
      </span>

      <span className="categories__tv option">
        {"TVs & Applicances"}
        <ExpandMoreRoundedIcon className="categories__icon" />
      </span>

      <span className="categories__men option">
        Men
        <ExpandMoreRoundedIcon className="categories__icon" />
      </span>

      <span className="categories__women option">
        Women
        <ExpandMoreRoundedIcon className="categories__icon" />
      </span>

      <span className="categories__baby option">
        {"Baby & Kids"}
        <ExpandMoreRoundedIcon className="categories__icon" />
      </span>

      <span className="categories__home option">
        {"Home & Furniture"}
        <ExpandMoreRoundedIcon className="categories__icon" />
      </span>

      <span className="categories__sports option">
        {"Sports, Books & More"}
        <ExpandMoreRoundedIcon className="categories__icon" />
      </span>

      <a href="" className="categories__flight option">
        Flights
      </a>

      <a href="" className="categories__offer option">
        Offer Zone
      </a>

      <a href="" className="categories__grocery option">
        Grocery
      </a>
    </div>
  );
}

export default Categories;
