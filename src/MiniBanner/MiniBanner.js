import React from "react";
import miniBannderOne from "../flipkart-clone-images/MiniBanners/4.jpg";
import miniBannderTwo from "../flipkart-clone-images/MiniBanners/5.jpg";
import miniBannderThree from "../flipkart-clone-images/MiniBanners/6.jpg";
import "./MiniBanner.css";

function MiniBanner() {
  return (
    <div className="minibanner">
      <div className="minibanner-one boxshadow__style">
        <a
          className="minibanner-one-link mini_link"
          href="https://www.flipkart.com/furniture-furniturestudio-store?otracker=hp_banner_2_7.bannerX3.BANNER_VFDSZPZMLGKK&fm=neo%2Fmerchandising&iid=M_c64988fb-96b1-41b0-9bb6-c409bd001809_7.VFDSZPZMLGKK&ppt=hp&ppn=homepage&ssid=4f8tbpa7mo0000001610281104852"
        >
          <div className="minibanner-one-secdiv">
            <img
              className="minibanner-one-img mini_img"
              src={miniBannderOne}
              alt="img"
            />
          </div>
        </a>
      </div>

      <div className="minibanner-two boxshadow__style">
        <a
          className="minibanner-two-link mini_link"
          href="https://www.2gud.com/refurbished-zone-store?param=13&ref=flipkart&otracker=hp_banner_2_10.bannerX3.BANNER_1PJIGWELHMN8&fm=neo%2Fmerchandising&iid=M_c64988fb-96b1-41b0-9bb6-c409bd001809_10.1PJIGWELHMN8&ppt=hp&ppn=homepage&ssid=4f8tbpa7mo0000001610281104852"
        >
          <div className="minibanner-two-secdiv">
            <img
              className="minibanner-two-img mini_img"
              src={miniBannderTwo}
              alt="img"
            />
          </div>
        </a>
      </div>

      <div className="minibanner-three boxshadow__style">
        <a
          className="minibanner-three-link mini_link"
          href="https://www.flipkart.com/offers-list/topoffers?screen=dynamic&pk=themeViews%3DBSDBookOffers%3ABSDBookOffersapp%2CBSDBookOffers%3ABSDBookOffersdesk~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&otracker=hp_banner_3_7.bannerX3.BANNER_WU6LXW94P2ME&fm=neo%2Fmerchandising&iid=M_c64988fb-96b1-41b0-9bb6-c409bd001809_7.WU6LXW94P2ME&ppt=hp&ppn=homepage&ssid=4f8tbpa7mo0000001610281104852"
        >
          <div className="minibanner-three-secdiv">
            <img
              className="minibanner-three-img mini_img"
              src={miniBannderThree}
              alt="img"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default MiniBanner;
