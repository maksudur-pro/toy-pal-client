import React from "react";

const ToyPalBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1558060370-d644479cb6f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80")`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-8">
            Welcome to ToyPal
          </h1>
          <p className="text-lg text-gray-300 mb-12">
            Explore our vast collection of toys and experience a world of joy
            and imagination.
          </p>
          <button
            href="/products"
            className="btn-primary text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyPalBanner;

// src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80"
// alt="Toytopia"
// className="w-full max-w-md rounded-lg shadow-2xl"
