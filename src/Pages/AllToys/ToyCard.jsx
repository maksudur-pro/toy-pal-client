import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { seller_name, toy_name, price, _id, quantity, sub_category } = toy;

  return (
    <>
      <td className="p-2 border">{seller_name}</td>
      <td className="p-2  border">{toy_name}</td>
      <td className="p-2 border">{sub_category}</td>
      <td className="p-2 border">{price}</td>
      <td className="p-2 border">{quantity}</td>
      <td className="p-2 border">
        <Link to={`/details/${_id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            View Details
          </button>
        </Link>
      </td>
    </>
  );
};

export default ToyCard;
