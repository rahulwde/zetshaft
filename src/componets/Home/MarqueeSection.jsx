import Marquee from "react-fast-marquee";
import brand1 from "../../assets/brands/amazon.png"
import brand2 from "../../assets/brands/amazon_vector.png"
import brand3 from "../../assets/brands/casio.png"
import brand4 from "../../assets/brands/moonstar.png"
import brand5 from "../../assets/brands/randstad.png"
import brand6 from "../../assets/brands/start-people 1.png"
import brand7 from "../../assets/brands/start.png"

const images = [
 brand1,brand2,brand3,brand4,brand5,brand6,brand7
];

const MarqueeSection = () => {
  return (
    <section className="bg-white py-6 my-8 px-4">
      <p className="mb-8 text-center text-3xl font-bold">We've helped thousands of sales teams</p>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="h-6 mx-6 object-contain"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
