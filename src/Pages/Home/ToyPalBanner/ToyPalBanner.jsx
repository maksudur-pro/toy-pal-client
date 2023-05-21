import React from "react";

const ToyPalBanner = () => {
  return (
    <div className="relative bg-gray-800 py-24">
      <div
        className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}></div>
      <div className="container mx-auto flex flex-col items-center justify-center relative z-10">
        <h1 className="text-6xl font-bold  text-center mb-8">
          Welcome to Toyland
        </h1>
        <p className="text-xl  text-center mb-12">
          Where Imagination Meets Adventure
        </p>
        <button className="btn-primary  font-bold py-4 px-10 rounded-full focus:outline-none focus:shadow-outline">
          Discover Now
        </button>
      </div>
    </div>
  );
};

export default ToyPalBanner;

// src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80"
// alt="Toytopia"
// className="w-full max-w-md rounded-lg shadow-2xl"
