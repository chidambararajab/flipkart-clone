import React, { useState } from "react";
import "./Header.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
// import Login from "../Login/Login";
import LoginModel from "../LoginPage/LoginModel";

function Header() {
  const [showLoginModel, setShowLoginModel] = useState(false);

  const loginModelHanding = () => {
    showLoginModel ? setShowLoginModel(false) : setShowLoginModel(true);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img
          alt="ing"
          className="header__logo--image"
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
        />
        <a className="header__link" href="https://www.flipkart.com/plus">
          <em>
            Explore{" "}
            <spam className="header__link--plus">
              Plus
              <img
                alt="ing"
                className="header__link--plusIcon"
                src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
              />
            </spam>
          </em>
        </a>
      </div>

      <div className="header__search">
        <input
          className="header__search--inputBox"
          type="text"
          placeholder="Search for products, brands and more..."
        ></input>
        <SearchRoundedIcon className="header__search--icon" />
      </div>

      <div className="header__options">
        <div className="" onClick={() => loginModelHanding()}>
          <button className="header__options--login">Login</button>
        </div>
        <div className="header__options--more">
          <p>More</p>
          <ExpandMoreRoundedIcon className="header__options--moreIcon" />
        </div>
        <div className="header__options--cart">
          <ShoppingCartRoundedIcon className="header__options--cartIcon" />
          <span>Cart</span>
        </div>
      </div>
      <LoginModel
        showLoginModel={showLoginModel}
        setShowLoginModel={setShowLoginModel}
      />
    </div>
  );
}

export default Header;
