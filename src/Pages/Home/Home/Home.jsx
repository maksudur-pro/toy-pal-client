import React from "react";
import BannerTabs from "../BannerTabs/BannerTabsTabs";
import AnimalToyBanner from "../AnimalToyBanner/AnimalToyBanner";
import OurServices from "../OurServices/OurServices";
import DealCarousel from "../DealCarousel/DealCarousel";

const Home = () => {
  return (
    <div>
      <AnimalToyBanner></AnimalToyBanner>
      <BannerTabs></BannerTabs>
      <DealCarousel></DealCarousel>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
