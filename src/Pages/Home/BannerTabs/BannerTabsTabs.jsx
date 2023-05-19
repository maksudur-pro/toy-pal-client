import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import SingleTab from "./SingleTab";

const BannerTabs = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  const [toyCategory, setToyCategory] = useState("Cat");

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${toyCategory}`)
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
      <h1 className="text-5xl font-bold mb-4">Deal Of The Day</h1>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-3">
        {categoryToys.map((toy) => (
          <SingleTab key={toy._id} toy={toy}></SingleTab>
        ))}
      </div>
    </div>
  );
};

export default BannerTabs;
