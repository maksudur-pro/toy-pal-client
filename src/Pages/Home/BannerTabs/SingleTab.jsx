import React from "react";
import { Link } from "react-router-dom";

const SingleTab = ({ toy }) => {
  const { img, name, _id } = toy;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="img"
          className=" h-52 object-cover rounded-lg mb-4"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">
            <p className="text-xs">years experience</p>
          </div>
        </h2>
        <p>Total recipe : </p>
        <div className="card-actions justify-between">
          <div className="flex justify-center items-center gap-3">like</div>
          <Link to={`/details/${_id}`} className="badge badge-primary p-4">
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTab;
