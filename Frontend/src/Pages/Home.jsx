import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import LatestCollection from "../Components/LatestCollection/LatestCollection.jsx";
import BestSeller from "../Components/BestSeller/BestSeller.jsx";
import Policy from "../Components/ourPolicy/Policy.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Policy />
    </div>
  )
}

export default Home;
