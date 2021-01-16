import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Banner.css";
// import BannerOne from "..../flipkart-clone-images/Banner/Banner (1).jpg";
// import myimage from "E:/Personal and Games/study/Programming/React Developer/React Learning/flipkart-clone/src/flipkart-clone-images/Banner/Banner (1).jpg";

const slideImages = [
  "https://rukminim1.flixcart.com/flap/1688/280/image/6932c10e7c7f6d63.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1688/280/image/07502776f9ccaaec.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1688/280/image/84854125721393c2.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1688/280/image/0a535ef2611fba9d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1688/280/image/e64790c8ccc3ce72.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1688/280/image/d62d29a55338f0a1.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1688/280/image/808368faa1d3624a.jpg?q=50",
];

const properties = {
  duration: 5000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Banner = () => {
  return (
    <div className="banner__container">
      <Slide {...properties}>
        <div className="banner__container--slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            {/* <span className="banner__container--slideNumber">Banner One</span> */}
          </div>
        </div>
        <div className="banner__container--slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            {/* <span className="banner__container--slideNumber">Banner Two</span> */}
          </div>
        </div>
        <div className="banner__container--slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            {/* <span className="banner__container--slideNumber">Banner Three</span> */}
          </div>
        </div>
        <div className="banner__container--slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
            {/* <span className="banner__container--slideNumber">Banner Four</span> */}
          </div>
        </div>
        <div className="banner__container--slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}>
            {/* <span className="banner__container--slideNumber">Banner Five</span> */}
          </div>
        </div>
        <div className="banner__container--slide">
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}>
            {/* <span className="banner__container--slideNumber">Banner Six</span> */}
          </div>
        </div>
        <div className="banner__container--slide">
          <div style={{ backgroundImage: `url(${slideImages[6]})` }}>
            {/* <span className="banner__container--slideNumber">Banner Seven</span> */}
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Banner;
