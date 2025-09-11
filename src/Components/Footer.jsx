import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="bg-black  text-white flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Contact Section */}
        <section className="flex-1 py-12 px-6 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-2">Book your appointment today!</p>
          <p className="font-semibold">📍 123 Beauty Lane, YourCity</p>
          <p>📞 +91 73411-72439 | ✉️ info@parlour.com</p>
          <button className="mt-6 px-6 py-3 hover:scale-110 transition-transform bg-pink-500 hover:bg-pink-600 rounded-full font-semibold shadow-lg">
            Book Now
          </button>
        </section>

        {/* Company Links */}
        <div className="flex-1 py-12 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 ">Company</h2>
          <ul className="space-y-2">
            <li className='hover:scale-110 transition-transform'><a href="/home" className=" hover:text-pink-500">Home</a></li>
            <li className='hover:text-pink-500 hover:scale-110 transition-transform'><a href="/services" className=" hover:text-pink-500">Services</a></li>
            <li className='hover:text-pink-500 hover:scale-110 transition-transform'><a href="/about" className=" hover:text-pink-500">About</a></li>
            <li className='hover:text-pink-500 hover:scale-110 transition-transform'><a href="/contact" className=" hover:text-pink-500">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex-1 py-12 px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Subscribe to our Newsletter</h2>
          <p className="text-sm mb-4 text-gray-300">
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full sm:flex-1 p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500  hover:scale-110 transition-transform font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm border-t  border-gray-700 font-medium py-4 bg-black text-white">
        © 2025 Parlour. All rights reserved.
      </div>
    </>
  )
}

export default Footer
