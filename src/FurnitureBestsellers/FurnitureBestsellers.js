import React from "react";
import Product from "../Product/Product";
import "./FurnitureBestsellers.css";

function FurnitureBestsellers() {
  return (
    <div className="bestsellers">
      <div className="bestsellers--title boxshadow__style">
        <p>Furniture Bestsellers</p>
        <button>VIEW ALL</button>
      </div>
      <div className="bestsellers--products boxshadow__style">
        <Product
          title="Apple iPhone XR"
          price="49999"
          image="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
          productBase="Grab it!"
        />
        <Product
          title="Apple iPhone XR"
          price="49999"
          image="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
          productBase="Deals of the Day"
        />
        <Product
          title="Apple iPhone XR"
          price="49999"
          image="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
          productBase="Best Deals!"
        />
        <Product
          title="Apple iPhone XR"
          price="49999"
          image="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
          productBase="Best Selling"
        />
        <Product
          title="Apple iPhone XR"
          price="49999"
          image="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
          productBase="Best Selling Range"
        />
        <Product
          title="Apple iPhone XR"
          price="49999"
          image="https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/u/b/g/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpeg?q=70"
          productBase="Sunnglases"
        />
      </div>
    </div>
  );
}

export default FurnitureBestsellers;
