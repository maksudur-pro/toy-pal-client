import React from "react";

const OurServices = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Shipping */}
          <div className="flex items-center justify-center flex-col">
            <svg
              className="w-12 h-12 text-indigo-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9 4a1 1 0 0 0-1 1v6.586L3.707 9.293A1 1 0 0 0 2.293 10.707l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L10 11.586V5a1 1 0 0 0-1-1z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-center">Free Shipping</h3>
            <p className="text-center">
              Enjoy free shipping on all orders within the country.
            </p>
          </div>

          {/* Return Policy */}
          <div className="flex items-center justify-center flex-col">
            <svg
              className="w-12 h-12 text-indigo-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.828-6.828a1 1 0 0 1 1.414-1.414L10 11.586l2.828-2.828a1 1 0 0 1 1.414 1.414L11.414 13l2.828 2.828a1 1 0 0 1-1.414 1.414L10 14.414l-2.828 2.828a1 1 0 0 1-1.414-1.414L8.586 13 5.758 10.172a1 1 0 0 1 1.414-1.414L10 11.586z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-center">Return Policy</h3>
            <p className="text-center">
              We offer a hassle-free return policy within 30 days of purchase.
            </p>
          </div>

          {/* Gift Card */}
          <div className="flex items-center justify-center flex-col">
            <svg
              className="w-12 h-12 text-indigo-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M17 6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14zm-1 2H4v8h12V8zm0-2H4V5h12v1z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-center">Gift Card</h3>
            <p className="text-center">
              Surprise your loved ones with our customizable gift cards.
            </p>
          </div>

          {/* Best Quality */}
          <div className="flex items-center justify-center flex-col">
            <svg
              className="w-12 h-12 text-indigo-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM5 8a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-center">Best Quality</h3>
            <p className="text-center">
              We pride ourselves on delivering products of the highest quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
