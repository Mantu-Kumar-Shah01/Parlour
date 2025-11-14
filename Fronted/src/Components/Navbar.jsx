import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)  

  return (
    <div className='sticky top-0 z-50  overflow-y-scroll scrollbar-hide'>
      <div className="header flex justify-around items-center p-2 px-8 md:px-20 lg:px-32" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      
        {/* Logo */}
        <div className="logo md:flex items-center justify-center mx-4 px-4">
         <img src="logo_transparent.png" alt="logo" width={40} />
          <h1 className="text-2xl font-bold text-pink-500">Parlour</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block lg:block">
          <ul className="flex gap-8">
            <Link to="/" className="hover:scale-150 transition-transform hover:text-pink-500"><li>Home</li></Link>
            <Link to="/services" className=" hover:scale-150 transition-transform hover:text-pink-500"><li>Services</li></Link>
            <Link to="/about" className="hover:scale-150 transition-transform hover:text-pink-500"><li>About</li></Link>
            <Link to="/contact" className="hover:scale-150 transition-transform hover:text-pink-500"><li>Contact</li></Link>
          </ul>
        </div>

        {/* ------ Mobile Menu Icon ------ */}
        <div className="menu md:hidden lg:hidden">
          <img onClick={() => setShowMenu(true)} src={assets.menu_icon} alt="menu_icon" />
        </div>

        {/* ------ Mobile Menu ------ */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full bg-white transition-transform duration-500 ease-in-out
          ${showMenu ? "translate-x-0 w-3/4" : "translate-x-full w-0"}`}
        >
          {/* Cross Button */}
          <div className="cross flex justify-end p-4">
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="cross_icon"
              className="w-6 cursor-pointer"
            />
          </div>

          {/* Mobile Nav Links */}
          <div className="mobile-menu md:hidden lg:hidden">
            <ul className="flex flex-col gap-8 p-6 text-lg text-center">
              <Link to="/home" className="hover:text-xl duration-150 ease-in hover:text-pink-500" onClick={()=>{setShowMenu(false)}}><li>Home</li></Link>
              <Link to="/services" className="hover:text-xl duration-150 hover:text-pink-500" onClick={()=>{setShowMenu(false)}}><li>Services</li></Link>
              <Link to="/about" className="hover:text-xl duration-150 hover:text-pink-500" onClick={()=>{setShowMenu(false)}}><li>About</li></Link>
              <Link to="/contact" className="hover:text-xl duration-150 hover:text-pink-500" onClick={()=>{setShowMenu(false)}}><li>Contact</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
