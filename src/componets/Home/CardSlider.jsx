import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const data = [
  {
    name: "Ayesha Rahman",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Always delivers on time. I'm very satisfied with Profast's reliable service."
  },
  {
    name: "Tariq Hasan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Their customer support is outstanding and delivery is smooth and fast!"
  },
  {
    name: "Riya Ahmed",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description: "The best courier partner for my online clothing business."
  },
  {
    name: "Zahidul Islam",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    description: "Great experience with the parcel return feature. Highly recommend!"
  },
  {
    name: "Sabina Akter",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    description: "Profast helped me grow my handmade crafts business with their COD option."
  }
];

const CardSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Users Say</h2>

        {/* Arrows */}
        <div className="flex justify-end mb-4 gap-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Slider */}
        <Slider {...settings} ref={sliderRef}>
          {data.map((user, index) => (
            <div key={index} className="px-3">
              <div className="bg-blue-100 rounded-xl p-6 shadow-md h-full hover:bg-blue-200 transition duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow"
                  />
                  <h3 className="font-semibold text-lg text-blue-900">{user.name}</h3>
                  <p className="text-sm text-gray-700 mt-2">{user.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CardSlider;
