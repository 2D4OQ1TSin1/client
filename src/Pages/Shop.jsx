import React from "react";
import Hero from "../Components/Hero/Hero";
import Trending from "../Components/Trending/Trending";
import NewArrivals from "../Components/NewArrivals/NewArrivals";
import Subscription from "../Components/Subscription/Subscription";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <NewArrivals />
      <Subscription />
    </div>
  );
};

export default Shop;
