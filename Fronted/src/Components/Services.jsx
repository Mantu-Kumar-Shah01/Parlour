import React from "react";
import { motion } from "motion/react";
const Services = () => {
  const services = [
    { title: " Hair Styling", desc: "Trendy cuts and styling by experts" },
    { title: " Facial & Skin Care", desc: "Glow with our natural treatments" },
    { title: " Spa & Relaxation", desc: "Rejuvenate with soothing spa therapies" },
    { title: " Hair Coloring", desc: "Vibrant shades and highlights to match your style" },
    { title: " Manicure & Pedicure", desc: "Pamper your hands and feet with care" },
    { title: " Makeup Services", desc: "Flawless looks for every occasion" },
    { title: " Bridal Packages", desc: "Complete makeover for your special day" },
    { title: " Massage Therapy", desc: "Relieve stress with expert massage techniques" },
    { title: " Waxing & Threading", desc: "Smooth and flawless skin guaranteed" },
    { title: " Body Treatments", desc: "Scrubs, wraps, and rejuvenating therapies" },
    { title: " Hair Treatments", desc: "Nourishing care for healthy, shiny hair" },
    { title: " Aromatherapy", desc: "Relax your senses with essential oils" },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-12 px-6 md:px-20">
      <motion.div
      initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}  >
      

      {/* Section Title */}
      <h1 
      
      className="text-4xl font-extrabold text-pink-600 text-center mb-10 hover:scale-110 transition-transform">
        Our Services
      </h1>

      {/* Services Grid */}
      <div
       
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
          key={index}
          className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <h3 className="text-xl text-center font-semibold text-pink-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
        </motion.div>
    </div>
  );
};

export default Services;
