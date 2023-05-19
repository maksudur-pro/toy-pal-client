import React from "react";

const DealCarousel = () => {
  // Mock data for the carousel items
  const carouselItems = [
    {
      id: 1,
      title: "Cat Toy",
      image: "cat-toy.jpg",
      price: "$9.99",
    },
    {
      id: 2,
      title: "Dog Toy",
      image: "dog-toy.jpg",
      price: "$12.99",
    },
    {
      id: 3,
      title: "Horse Toy",
      image: "horse-toy.jpg",
      price: "$19.99",
    },
  ];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Deal of the Day</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="w-64 bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-48 h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealCarousel;
