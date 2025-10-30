import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import LatestCollection from "../Components/LatestCollection/LatestCollection.jsx";
import BestSeller from "../Components/BestSeller/BestSeller.jsx";
import Policy from "../Components/ourPolicy/Policy.jsx";
import NewslatterBox from "../Components/NewsLatterBox/NewslatterBox.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
      <NewslatterBox />
    </div>
  )
}

export default Home;
