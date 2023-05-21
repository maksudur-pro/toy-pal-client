import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";

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

  // table data

  const columns = [
    {
      name: "Name",
      selector: (row) => row.seller_name,
    },
    {
      name: "Email",
      selector: (row) => row.seller_email,
    },
    {
      name: "Toy Name",
      selector: (row) => row.toy_name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.sub_category,
    },
    {
      name: "Available Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Details",
      selector: (row) => row.description.slice(0, 20),
    },
    {
      name: "Delete",
      selector: (row) => (
        <button
          onClick={() => handleDelete(row._id)}
          className="px-4 mr-4 py-2 btn-error text-white rounded-md">
          Delete
        </button>
      ),
    },
    {
      name: "Update",
      selector: (row) => (
        <Link to={`/update/${row._id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Update
          </button>
        </Link>
      ),
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>My Toys</title>
      </Helmet>
      <h1 className="text-center text-4xl font-bold mb-6">My Toys</h1>
      <div className="mb-10">
        <DataTable
          pagination
          fixedHeader
          fixedHeaderScrollHeight="400px"
          highlightOnHover
          columns={columns}
          data={myToys}
        />
      </div>
    </HelmetProvider>
  );
};

export default MyToys;
