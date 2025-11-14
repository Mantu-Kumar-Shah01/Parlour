import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="md:flex flex-col justify-center items-center m-auto w-full h-200 text-white sm:px-6 py-10"
      style={{
        backgroundImage: `url(${assets.home_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-6xl text-center font-bold decoration-1">
          Welcome to Our Parlour
        </h3>
        <p className="m-4 px-4 text-2xl font-light text-center">
          Relax, Refresh and Rejuvenate yourself with our beauty & spa services
        </p>

        <div className="flex justify-center gap-5 items-center">
          <button
            onClick={() => navigate("/Form")}
            className="bg-pink-700 rounded-xl p-3 text-white px-5 border-black hover:scale-110 transition-transform font-semibold hover:bg-pink-800 cursor-pointer"
          >
            Book Appointment
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
