import React from "react";
import BannerTabs from "../BannerTabs/BannerTabsTabs";
import AnimalToyBanner from "../AnimalToyBanner/AnimalToyBanner";
import OurServices from "../OurServices/OurServices";
import OurBest from "../OurBest/OurBest";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <AnimalToyBanner></AnimalToyBanner>
      <BannerTabs></BannerTabs>
      <OurBest></OurBest>
      <Gallery></Gallery>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
