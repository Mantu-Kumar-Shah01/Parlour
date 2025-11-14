import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Review = () => {
    return (
        <div className="bg-gradient-to-b from-pink-200 to-pink-50 py-12 px-6 md:px-20 rounded-2xl shadow-lg">
            <div className="container w-full h-full mx-auto my-10 lg:px-32 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}  >

                    <h1 className="relative z-20 text-5xl 
           bg-gradient-to-r from-white via-gray-100 to-white 
           bg-clip-text text-transparent drop-shadow-lg sm:text-4xl font-bold mb-2 text-center ">
                        What Our Happy <span className="underline underline-offset-4 decoration-1 font-light">Clients Say</span>
                    </h1>
                    <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
                        “Hear from those who experienced our care and service.”
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-6">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            className="max-w-[340px] mb-6 rounded-2xl  px-8 py-12  text-center  bg-white shadow-md border border-pink-100 transition-all 
                duration-300  hover:scale-105  hover:-translate-y-2  hover:shadow-2xl  hover:bg-gradient-to-b  hover:from-pink-50 hover:to-white
              ">
                            <img
                                className="w-20 h-20 rounded-full mx-auto mb-4 ring-4 ring-pink-200 shadow-sm transition-transform duration-300 hover:scale-110"
                                src={testimonial.image}
                                alt={testimonial.alt}
                            />

                            <h2 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-pink-500">
                                {testimonial.name}
                            </h2>
                            <p className="text-sm text-gray-500 mb-2">{testimonial.title}</p>

                            <div className="flex justify-center items-center gap-1 text-pink-500 mb-4">
                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                    <img key={i} src={assets.Star_icon} alt="star" className="w-5 h-5" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic leading-relaxed">“{testimonial.text}”</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Review
