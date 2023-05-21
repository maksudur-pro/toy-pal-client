import React, { useContext } from "react";
import BannerTabs from "../BannerTabs/BannerTabsTabs";
import AnimalToyBanner from "../AnimalToyBanner/AnimalToyBanner";
import OurServices from "../OurServices/OurServices";
import OurBest from "../OurBest/OurBest";
import Gallery from "../Gallery/Gallery";
import LazyLoad from "react-lazy-load";
import { AuthContext } from "../../../Providers/AuthProvider";
import ToyPalBanner from "../ToyPalBanner/ToyPalBanner";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen bg-white">
        <LazyLoad
          className="flex justify-center items-center h-full"
          height={762}>
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </LazyLoad>
      </div>
    );
  }

  return (
    <div>
      <ToyPalBanner></ToyPalBanner>
      <BannerTabs></BannerTabs>
      <OurBest></OurBest>
      <Gallery></Gallery>
      <AnimalToyBanner></AnimalToyBanner>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
