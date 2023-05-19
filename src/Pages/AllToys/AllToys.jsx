import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
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
