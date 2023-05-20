import React from "react";
import Lottie from "lottie-react";
import returnPolicy from "../../../assets/returnPolicy.json";
import freeShipping from "../../../assets/freeShipping.json";
import giftCard from "../../../assets/giftCard.json";
import quality from "../../../assets/quality.json";

const OurServices = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className=" py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Free Shipping */}
          <div className="flex items-center justify-center flex-col">
            <Lottie
              className="w-28 h-28  mb-4"
              animationData={freeShipping}
              loop={true}></Lottie>
            <h3 className="text-lg font-semibold text-center">Free Shipping</h3>
            <p className="text-center">
              Enjoy free shipping on all orders within the country.
            </p>
          </div>

          {/* className="w-12 h-12 text-indigo-600 mb-4" */}
          {/* Return Policy */}
          <div className="flex items-center justify-center flex-col">
            <Lottie
              className="w-28 h-28  mb-4"
              animationData={returnPolicy}
              loop={true}></Lottie>
            <h3 className="text-lg font-semibold text-center">Return Policy</h3>
            <p className="text-center">
              We offer a hassle-free return policy within 30 days of purchase.
            </p>
          </div>

          {/* Gift Card */}
          <div className="flex items-center justify-center flex-col">
            <Lottie
              className="w-28 h-28  mb-4"
              animationData={giftCard}
              loop={true}></Lottie>
            <h3 className="text-lg font-semibold text-center">Gift Card</h3>
            <p className="text-center">
              Surprise your loved ones with our customizable gift cards.
            </p>
          </div>

          {/* Best Quality */}
          <div className="flex items-center justify-center flex-col">
            <Lottie
              className="w-28 h-28  mb-4"
              animationData={quality}
              loop={true}></Lottie>
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
