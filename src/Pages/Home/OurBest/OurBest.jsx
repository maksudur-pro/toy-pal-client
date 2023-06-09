import React from "react";
import { Link } from "react-router-dom";

const OurBest = () => {
  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Our best and popular
              <br className="hidden md:block" />
              selling toys
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div>
            <Link
              to="/allToys"
              className="inline-flex btn btn-primary items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              See more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-[10rem] w-[10rem] sm:w-48 xl:w-[13rem]"
              src="https://i.ibb.co/6H86C0X/61m0zwehc7-L-AC-SL1500.jpg"
              alt=""
            />
            <img
              className="object-cover w-[6rem] h-[7rem] rounded shadow-lg sm:h-32 xl:h-[12rem] sm:w-32 xl:w-40"
              src="https://i.ibb.co/g4PRGTT/81-S-VWZl-Rs-L-AC-SL1500.jpg"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-[9rem] h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-[18rem]"
              src="https://i.ibb.co/B6Zts7K/81-NUuq-Pyu-OL-AC-SL1500.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBest;
