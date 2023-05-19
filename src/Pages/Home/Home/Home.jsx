import React from "react";
import BannerTabs from "../BannerTabs/BannerTabsTabs";
import AnimalToyBanner from "../AnimalToyBanner/AnimalToyBanner";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <AnimalToyBanner></AnimalToyBanner>
      <BannerTabs></BannerTabs>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
