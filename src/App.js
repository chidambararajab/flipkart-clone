import React from "react";

import Categories from "./Categories/Categories";
import Header from "./Header/Header";
// import Banner from "./Banner/Banner";
import Container from "./Container/Container.js";
// import Login from "./LoginPage/Login";
// import MiniBanner from "./MiniBanner/MiniBanner";

import "./App.css";
import "react-slideshow-image/dist/styles.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Categories />
      <Container />
    </div>
  );
}
export default App;
