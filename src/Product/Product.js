import React from "react";
import "./Product.css";

function Product({ title, price, image, productBase }) {
  return (
    <div className="product">
      <div className="product__info"></div>
      <img src={image} alt=""></img>
      <p className="product__info--title">{title}</p>
      <p className="product__info--price">
        From <small>₹</small>
        {price}
      </p>
      <p className="product__info--categorie">{productBase}</p>
    </div>
  );
}

export default Product;
