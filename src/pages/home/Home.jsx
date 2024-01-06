import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";

function home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
}

export default home;
