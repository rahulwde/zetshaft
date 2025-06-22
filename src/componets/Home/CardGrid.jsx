import { FaTruck, FaMoneyBillWave, FaStore, FaBuilding } from "react-icons/fa";
import React from "react";

const features = [
  {
    icon: <FaTruck className="text-3xl text-lime-500" />,
    title: "Booking Pick & Drop",
    description: "Doorstep pickup and drop-off for individual and business deliveries."
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-lime-500" />,
    title: "Cash On Delivery",
    description: "Get paid when your product is delivered—simple and secure."
  },
  {
    icon: <FaStore className="text-3xl text-lime-500" />,
    title: "Delivery Hub",
    description: "Drop-off or collect packages from our nearest delivery hub."
  },
  {
    icon: <FaBuilding className="text-3xl text-lime-500" />,
    title: "Booking SME & Corporate",
    description: "Tailored logistics solutions for small, medium, and corporate businesses."
  }
];

const CardGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Section Title */}
      <div className="text-2xl font-bold text-center my-4 text-gray-800">How it Works</div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition duration-300"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
