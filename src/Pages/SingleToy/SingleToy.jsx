import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SingleToy = () => {
  const toy = useLoaderData();

  const {
    details,
    img,
    price,
    quantity,
    rating,
    seller_name,
    seller_email,
    toy_name,
  } = toy;

  return (
    <HelmetProvider>
      <Helmet>
        <title>Toy Details</title>
      </Helmet>
      <div className="container mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <img
              src={img}
              alt="Animal Toy"
              className="w-full max-w-md rounded-lg "
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {toy_name}
            </h2>
            <p>Seller Name : {seller_name}</p>
            <p className="text-gray-600 mb-2">
              Price: <span className="font-bold">${price}</span>
            </p>
            <p className="text-gray-600 mb-2">
              Available Quantity: {quantity} pieces
            </p>

            <div className="flex items-center  mb-2">
              <span className="text-black-600 mr-2">{rating} </span>
              <Rating
                readonly
                initialRating={rating}
                emptySymbol={<FaRegStar className="text-yellow-400 text-xl" />}
                fullSymbol={<FaStar className="text-yellow-400 text-xl" />}
              />
              <span className="text-black-600 ml-2">
                1,586 ratings | 16 answered questions
              </span>
            </div>
            <p className="text-gray-600 mb-2">
              Availability: <span className="text-green-500">In Stock</span>
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Product Details
            </h3>
            <p className="text-gray-600 mb-4">{details}</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Encourages creativity and imagination</li>
              <li>Suitable for children aged 3 and above</li>
            </ul>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300 mt-8">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default SingleToy;
