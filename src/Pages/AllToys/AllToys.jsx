import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DataTable from "react-data-table-component";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    fetch("https://toy-pal-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilterSearch(data);
      });
  }, []);

  // table data

  const columns = [
    {
      name: "Seller Name",
      selector: (row) => row.seller_name,
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
      selector: (row) => (
        <Link to={`/details/${row._id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            View Details
          </button>
        </Link>
      ),
    },
  ];

  // search field

  const handleSearch = () => {
    const result = toys.filter((toy) => {
      return toy.toy_name.toLowerCase().match(search.toLowerCase());
    });
    setFilterSearch(result);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>All Toys</title>
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-bold mb-4">All Toys</h1>

        <DataTable
          pagination
          fixedHeader
          fixedHeaderScrollHeight="400px"
          highlightOnHover
          columns={columns}
          data={filterSearch}
          subHeader
          subHeaderComponent={
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button onClick={handleSearch} className="btn btn-square">
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
          }
        />
      </div>
    </HelmetProvider>
  );
};

export default AllToys;
