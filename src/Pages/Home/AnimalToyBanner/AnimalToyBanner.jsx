import React from "react";

const AnimalToyBanner = () => {
  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-5xl font-bold  mb-8 text-center">
        Discover the Magic of Animal Toys
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center">
          <img
            src="https://i.ibb.co/wY99DXM/38724.jpg"
            alt="Kids Playing with Animal Toys"
            className="w-full max-w-md rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-3xl font-bold  mb-4">Imagination Unleashed</h3>
          <p className="text-lg  mb-6">
            Our animal toys inspire creativity and imaginative play, allowing
            kids to embark on exciting adventures with their favorite animal
            companions.
          </p>
          <p className="text-lg  mb-6">
            From cuddly plush toys to interactive figures, our collection offers
            a diverse range of options to suit every child's preferences and
            interests.
          </p>
          <button className="bg-white text-indigo-500 text-lg font-semibold py-2 px-6 rounded hover:bg-indigo-100">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalToyBanner;
