import { FaLinkedin, FaXTwitter, FaFacebook, FaYoutube } from "react-icons/fa6";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-8 md:py-12 text-center rounded-b-xl">
      {/* Logo and Description */}
      <div className="max-w-xl mx-auto border border-dotted p-6 rounded-md mb-6">
        <div className="flex justify-center items-center mb-3">
             <img src={logo} alt=""  />
               <span className='font-bold text-xl -ms-2'>Profast</span>
        </div>
        <p className="text-sm text-gray-400">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center text-sm text-gray-400 gap-x-4 mb-6">
        <a href="#" className="hover:text-white">Services</a>
        <span>......</span>
        <a href="#" className="hover:text-white">Coverage</a>
        <span>......</span>
        <a href="#" className="hover:text-white">About Us</a>
        <span>......</span>
        <a href="#" className="hover:text-white">Pricing</a>
        <span>......</span>
        <a href="#" className="hover:text-white">Blog</a>
        <span>......</span>
        <a href="#" className="hover:text-white">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-white text-xl">
        <a href="#" className="hover:text-lime-400"><FaLinkedin /></a>
        <a href="#" className="hover:text-lime-400"><FaXTwitter /></a>
        <a href="#" className="hover:text-lime-400"><FaFacebook /></a>
        <a href="#" className="hover:text-lime-400"><FaYoutube /></a>
      </div>
    </footer>
  );
};

export default Footer;
