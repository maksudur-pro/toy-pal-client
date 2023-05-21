import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import updateAni from "../../../assets/update.json";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const toy = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedUser = { price, quantity, description };

    fetch(`https://toy-pal-server.vercel.app/updateToy/${toy._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          navigate("/myToys");
          Swal.fire("Toys updated Successfully!", " ", "success");
        }
      });
  };

  return (
    <div className="hero-content p-0 w-full flex-col-reverse lg:flex-row">
      <div className="text-center lg:text-left lg:w-1/2">
        <Lottie
          className="h-1/2"
          animationData={updateAni}
          loop={true}></Lottie>
      </div>
      <div className="flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
        <form
          onSubmit={handleUpdate}
          className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl text-center font-bold mb-6">
            Product Details
          </h2>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 text-lg font-bold mb-2">
              Price:
            </label>
            <input
              type="text"
              name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={toy?.price}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 text-lg font-bold mb-2">
              Available Quantity:
            </label>
            <input
              type="text"
              name="quantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={toy?.quantity}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-lg font-bold mb-2">
              Detail Description:
            </label>
            <textarea
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              defaultValue={toy?.description}></textarea>
          </div>
          <input
            value="submit"
            type="submit"
            className=" btn-block btn btn-primary font-bold"></input>
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;
