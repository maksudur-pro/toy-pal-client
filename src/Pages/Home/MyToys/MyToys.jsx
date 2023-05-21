import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Providers/AuthProvider";
import MyToyCard from "./MyToyCard";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  // data fetch method
  useEffect(() => {
    fetch(`https://toy-pal-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  // Delete method
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-pal-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mb-10">
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
              <MyToyCard toy={toy} handleDelete={handleDelete}></MyToyCard>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
