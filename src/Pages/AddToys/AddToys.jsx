import Swal from "sweetalert2";

const AddToys = () => {
  const handleToyAdd = (event) => {
    event.preventDefault();

    const form = event.target;

    const img = form.img.value;
    const toy_name = form.toy_name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const sub_category = form.sub_category.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const newToy = {
      img,
      toy_name,
      price,
      rating,
      seller_name,
      seller_email,
      sub_category,
      description,
      quantity,
    };
    console.log(newToy);
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Toys added Successfully!", " ", "success");
          form.reset();
        }
      });
  };
  return (
    <div className="mx-auto mt-8">
      <h1 className="text-center text-3xl font-bold">Add Toy</h1>
      <form
        onSubmit={handleToyAdd}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sellerName">
              Seller Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="seller_name"
              type="text"
              required
              placeholder="Enter seller name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sellerEmail">
              Seller Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="seller_email"
              type="email"
              required
              placeholder="Enter seller email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="toyName">
              Toy Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="toy_name"
              required
              type="text"
              placeholder="Enter toy name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity">
              Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="quantity"
              required
              type="number"
              placeholder="Enter quantity"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="price"
              required
              type="number"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ratings">
              Ratings
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="rating"
              type="number"
              required
              placeholder="Enter ratings"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="toyPhoto">
              Toy Photo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="img"
              required
              type="text"
              placeholder="Enter toy photo URL"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="toyCategory">
              Toy Category
            </label>
            <select
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="sub_category"
              placeholder="Select toy category">
              <option value="">Select a category</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Horse">Horse</option>
            </select>
          </div>
          <div className="col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="toyDetails">
              Toy Details
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              required
              placeholder="Enter toy details"
            />
          </div>
        </div>
        <div className="flex items-center mt-3 justify-center">
          <input
            className="bg-blue-500  hover:bg-blue-700 btn-block text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
