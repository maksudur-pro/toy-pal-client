import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleTab = ({ toy }) => {
  const { img, toy_name, _id, price, rating } = toy;
  return (
    <div className=" border  rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center mb-4">
        <img src={img} alt="Product" className="w-48 h-48 object-contain" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold leading-tight mb-2">{toy_name}</h3>
        <p className="text-pink-600 text-sm mb-2">${price}</p>
        <div className="flex items-center justify-center mb-2">
          <Rating
            readonly
            initialRating={rating}
            emptySymbol={<FaRegStar className="text-yellow-400 text-xl" />}
            fullSymbol={<FaStar className="text-yellow-400 text-xl" />}
          />
          <span className="text-black-600 ml-2">{rating}</span>
        </div>
        <Link to={`/details/${_id}`}>
          <button className="bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-full text-sm font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTab;
