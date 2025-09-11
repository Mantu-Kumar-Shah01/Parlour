import React from 'react'
import { motion } from 'motion/react'
const About = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white-50 ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-6 py-4 hover:scale-110 transition-transform">
          About Parlour
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-pink-500">Parlour</span>, we believe beauty is not just about appearance — it’s about
          <span className="font-semibold"> confidence, self-care, and well-being</span>.
        </p>

        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          Our mission is to provide <span className="font-medium text-gray-800">high-quality salon and spa services</span> that help you feel
          refreshed, rejuvenated, and radiant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold text-center text-pink-600 mb-2"> Hair Styling & Treatments</h3>
            <p className="text-gray-600 text-center">Trendy cuts, nourishing treatments, and expert styling tailored to you.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold text-center text-pink-600 mb-2"> Skincare & Facials</h3>
            <p className="text-gray-600 text-center">Glow with our natural facials and skin-care therapies for a radiant look.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold text-center text-pink-600 mb-2"> Makeup & Bridal Packages</h3>
            <p className="text-gray-600 text-center">Perfect looks for every occasion, from casual glam to your big day.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold text-center text-pink-600 mb-2"> Spa & Relaxation</h3>
            <p className="text-gray-600 text-center">Unwind with soothing massages and therapies designed for deep relaxation.</p>
          </div>
        </div>

        <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mt-10">
          At <span className="font-semibold text-pink-500">Parlour</span>, it’s not just a service —
          <span className="italic"> it’s an experience designed especially for you.</span>
        </p>
      </motion.div>

    </div>
  )
}


export default About