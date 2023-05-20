import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Providers/AuthProvider";
import MyToyCard from "./MyToyCard";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Toy Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Available Quantity</th>
            <th className="p-2 border">Details</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy) => (
            <tr key={toy._id}>
              <MyToyCard toy={toy}></MyToyCard>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
