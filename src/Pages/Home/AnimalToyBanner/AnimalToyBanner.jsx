import React from "react";

const AnimalToyBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-6">
      <div className="container mx-auto flex items-center justify-center">
        <img
          className="h-12 w-auto mr-3 filter drop-shadow-lg"
          src="https://i.ibb.co/WkgsCHZ/horseclub.jpg"
          alt="Animal Toy Logo"
        />
        <div>
          <h1 className="text-4xl font-semibold text-white">Animal Toy Shop</h1>
          <p className="text-lg text-gray-200">
            Get your favorite animal toys now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimalToyBanner;
