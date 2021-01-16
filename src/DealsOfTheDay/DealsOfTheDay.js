import React from "react";
import Product from "../Product/Product";
import "./DealsOfTheDay.css";

function DealsOfTheDay() {
  return (
    <div className="dealsoftheday">
      <div className="dealsoftheday__left">
        <div className="dealsoftheday__left--title boxshadow__style">
          <p>Deals of the Day</p>
          <button>VIEW ALL</button>
        </div>
        <div className="dealsoftheday__left--products boxshadow__style">
          <Product
            title="Leatherette Office Chair"
            price=" 7,199"
            image="https://rukminim1.flixcart.com/image/416/416/kar44280/office-study-chair/7/4/a/carbon-steel-he-9091-hetal-enterprises-original-imafs8z3zxrncett.jpeg?q=70"
            productBase="Grab it!"
          />
          <Product
            title="Wood Laptop Table"
            price=" 1,799"
            image="https://rukminim1.flixcart.com/image/416/416/khxqt8w0-0/portable-laptop-table/c/f/a/plywood-wood-portable-laptop-table-royatto-black-original-imafxuez3t227s65.jpeg?q=70"
            productBase="Best Deals!"
          />
          <Product
            title="Portable Laptop Table"
            price=" 477"
            image="https://rukminim1.flixcart.com/image/416/416/ki214sw0-0/portable-laptop-table/a/b/c/mfb-melamine-fiberboard-portable-laptop-table-shope-guru-walnut-original-imafxxhfaggwkuwp.jpeg?q=70"
            productBase="Best Selling"
          />
          <Product
            title="Corner Study Table"
            price=" 3,500"
            image="https://rukminim1.flixcart.com/image/416/416/kd69z0w0/office-study-table/n/y/b/particle-board-st-101-fw-spacex-white-original-imafu55yftjjqa2x.jpeg?q=70"
            productBase="Best Selling Range"
          />
          <Product
            title="Apple iPhone XR"
            price=" 6,299"
            image="https://rukminim1.flixcart.com/image/416/416/k0r15e80/office-study-table/z/p/x/mdf-fh-fo-sd-120cr-fw-4homez-frosty-white-original-imafg2qzzxc3pwrc.jpeg?q=70"
            productBase="Sunnglases"
          />
          <Product
            title="Linen Executive Chair"
            price=" 2,677"
            image="https://rukminim1.flixcart.com/image/416/416/jim0x3k0/office-study-chair/x/c/c/pp-dz-nett-0117-02pc-dzyn-furnitures-original-imaf6dhf9zefzpfd.jpeg?q=70"
            productBase="Deals of the Day"
          />
        </div>
      </div>
      <div className="dealsofthedays__right boxshadow__style">
        <img
          className="dealsofthedays__right--ads"
          src="https://i.ibb.co/gmm5PNx/425c4813ea268831.jpg"
          alt="Fashion Deals"
        />
      </div>
    </div>
  );
}

export default DealsOfTheDay;
