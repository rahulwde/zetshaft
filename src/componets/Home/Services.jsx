import {
  FaRocket,
  FaGlobeAsia,
  FaWarehouse,
  FaHandHoldingUsd,
  FaFileContract,
  FaUndoAlt
} from "react-icons/fa";
import React from "react";

const services = [
  {
    icon: <FaRocket className="text-4xl text-white" />,
    title: "Express & Standard Delivery",
    description: "Fast and affordable delivery tailored to your urgency."
  },
  {
    icon: <FaGlobeAsia className="text-4xl text-white" />,
    title: "Nationwide Delivery",
    description: "Deliver to every corner of the country with confidence."
  },
  {
    icon: <FaWarehouse className="text-4xl text-white" />,
    title: "Fulfillment Solution",
    description: "Store, pick, pack, and ship—all from one platform."
  },
  {
    icon: <FaHandHoldingUsd className="text-4xl text-white" />,
    title: "Cash on Home Delivery",
    description: "Get paid at delivery—perfect for businesses and customers alike."
  },
  {
    icon: <FaFileContract className="text-4xl text-white" />,
    title: "Corporate Service Contract",
    description: "Custom logistics contracts for businesses, backed by SLAs."
  },
  {
    icon: <FaUndoAlt className="text-4xl text-white" />,
    title: "Parcel Return",
    description: "Hassle-free returns with doorstep pickup and tracking."
  }
];

const Services = () => {
  return (
    <section className="bg-blue-950 rounded-4xl py-12 px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:bg-amber-200 transition-colors duration-300 rounded-2xl p-6 text-black text-center "
            >
              <div className="mb-4 bg-gray-300 rounded-full w-18 h-18 mx-auto items-center flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
