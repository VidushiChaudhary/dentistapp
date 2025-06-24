import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaTooth, FaPlus } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Scrolling Header */}
           {/* Scrolling Header */}
      <div className="h-13 p-2 w-full bg-blue-900 text-white text-center text-sm md:text-xl font-semibold px-4 whitespace-nowrap overflow-hidden overflow-x-auto">
        Welcome to Agarwal Super Speciality Dental Clinic
      </div>
      {/*<div className="h-13 p-3 w-full bg-blue-900 text-white text-sm md:text-xl font-semibold overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee"> Welcome to Agarwal Super Speciality Dental Clinic</div>

  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }

      .animate-marquee {
        display: inline-block;
        white-space: nowrap;
        animation: marquee 10s linear infinite;
      }
    `}
  </style> 
</div>*/}

      {/* Navbar */}
      <div className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <FaTooth className="text-blue-800 text-5xl md:text-6xl" />
              <FaPlus className="text-blue-800 text-xs absolute top-1 left-1" />
            </div>
            <div className="text-blue-900 font-semibold leading-tight">
              <div className="text-lg md:text-2xl italic">Agarwal Super</div>
              <div className="text-sm md:text-xl italic">Speciality</div>
              <div className="text-xs md:text-base font-sans">Dental Clinic</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-base font-medium items-center">
            <Link to="/" className="text-blue-900 text-lg hover:text-sky-700">Home</Link>
            <Link to="/About" className="text-blue-900 text-lg hover:text-sky-700">About</Link>
            <Link to="/Treatment" className="text-blue-900 text-lg hover:text-sky-700">Treatment</Link>
            <Link to="/Contact" className="text-blue-900 text-lg hover:text-sky-700">Contact</Link>
            <Link
              to="/Appointment"
              className="bg-blue-800 text-white px-4 py-2 text-lg rounded-md hover:bg-blue-700"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-900">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-blue-50">
            <Link to="/" className="block text-blue-900 text-lg hover:text-sky-700">Home</Link>
            <Link to="/About" className="block text-blue-900 text-lg hover:text-sky-700">About</Link>
            <Link to="/Treatments" className="block text-blue-900 text-lg hover:text-sky-700">Treatment</Link>
            
            <Link to="/Contact" className="block text-blue-900 text-lg hover:text-sky-700">Contact</Link>
            <Link
              to="/Appointment"
              className="block bg-blue-800 text-white text-center px-3 py-2 rounded-md text-lg hover:bg-blue-700"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

