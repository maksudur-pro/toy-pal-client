import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import SingleTab from "./SingleTab";

const BannerTabs = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  const [toyCategory, setToyCategory] = useState("Cat");

  useEffect(() => {
    fetch(`https://toy-pal-server.vercel.app/toys/${toyCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryToys(data.slice(0, 3));
      });
  }, [toyCategory]);

  const handleTabClick = (tabName) => {
    setToyCategory(tabName);
  };
  return (
    <div className="text-center mt-4">
      <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">
        Explore Our Animal Toy Collection
      </h2>
      <p className="text-lg text-gray-600 mb-12 text-center">
        Discover a wide range of animal toys that spark joy and inspire
        imagination.
      </p>
      <div className=" tabs-boxed ">
        <button
          onClick={() => handleTabClick("Cat")}
          className={`tab ${toyCategory === "Cat" && "tab-active"}`}>
          Cat
        </button>
        <button
          onClick={() => handleTabClick("Dog")}
          className={`tab ${toyCategory === "Dog" && "tab-active"}`}>
          Dog
        </button>
        <button
          onClick={() => handleTabClick("Horse")}
          className={`tab ${toyCategory === "Horse" && "tab-active"}`}>
          Horse
        </button>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-3">
        {categoryToys.map((toy) => (
          <SingleTab key={toy._id} toy={toy}></SingleTab>
        ))}
      </div>
    </div>
  );
};

export default BannerTabs;
