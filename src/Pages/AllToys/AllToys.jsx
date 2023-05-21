import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-pal-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center font-bold mb-4">All Toys</h1>
      <div className="flex justify-end mb-5">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border">Seller</th>
            <th className="p-2 border">Toy Name</th>
            <th className="p-2 border">Sub-category</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Available Quantity</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <ToyCard toy={toy}></ToyCard>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
