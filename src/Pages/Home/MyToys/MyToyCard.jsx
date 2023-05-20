import React from "react";
import { Link } from "react-router-dom";
const MyToyCard = ({ toy }) => {
  const {
    seller_name,
    toy_name,
    seller_email,
    price,
    _id,
    quantity,
    description,
    sub_category,
  } = toy;

  return (
    <>
      <td className="p-2 border text-center">{seller_name}</td>
      <td className="p-2 border text-center">{seller_email}</td>
      <td className="p-2 border text-center">{toy_name}</td>
      <td className="p-2 border text-center">{price}</td>
      <td className="p-2 border text-center">{sub_category}</td>
      <td className="p-2 border text-center">{quantity}</td>
      <td className="p-2 border text-center">{description.slice(0, 20)}</td>
      <td className="p-2 border text-center">
        <button className="px-4 mr-4 py-2 btn-error text-white rounded-md">
          Delete
        </button>
        <Link to={`/update/${_id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
        </Link>
      </td>
    </>
  );
};

export default MyToyCard;
