import React from "react";

const ToyCard = ({ toy }) => {
  return (
    <>
      <td className="p-2 border">toy.seller</td>
      <td className="p-2  border">toy.toyName</td>
      <td className="p-2 border">toy.subCategory</td>
      <td className="p-2 border">toy.price</td>
      <td className="p-2 border">toy.quantity</td>
      <td className="p-2 border">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          View Details
        </button>
      </td>
    </>
  );
};

export default ToyCard;
