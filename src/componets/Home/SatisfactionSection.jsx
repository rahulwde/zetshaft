import React from "react";
import layer from "../../assets/Layer_1.png"
const SatisfactionSection = () => {
  return (
    <section className="bg-[#003e3e] my-3 text-white rounded-2xl py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Merchant and Customer Satisfaction<br />
          is Our First Priority
        </h2>
        <p className="text-sm text-gray-200 mb-6">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Profast courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-yellow-300 text-black font-medium px-5 py-2 rounded-full hover:bg-yellow-400 transition">
            Become a Merchant
          </button>
          <button className="bg-transparent border border-yellow-300 text-yellow-300 px-5 py-2 rounded-full hover:bg-yellow-300 hover:text-black transition">
            Earn with Profast Courier
          </button>
        </div>
      </div>

      {/* Right Image (You can replace with SVG or real image) */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={layer}
          alt="Parcel Illustration"
          className="w-56 md:w-72"
        />
      </div>
    </section>
  );
};

export default SatisfactionSection;
