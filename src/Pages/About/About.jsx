import React from "react";

const About = () => {
  const data = [
    {
      question: "What is the return policy?",
      answer:
        "Our return policy allows you to return the product within 30 days of purchase for a full refund.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Please check our shipping policy for more details.",
    },
    // Add more question-answer pairs as needed
  ];
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
