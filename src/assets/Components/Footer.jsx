import React from "react";
import { Link } from "react-router-dom";
import {
  FaTooth,
  FaPlus,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-white py-10 px-6">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
        {/* Left - Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3 relative">
            <FaTooth className="text-white text-5xl md:text-6xl" />
            <FaPlus className="text-white text-xs absolute top-1 left-1" />
            <div className="leading-tight">
              <div className="text-lg md:text-2xl italic font-bold">Agarwal Super</div>
              <div className="text-sm md:text-xl italic">Speciality</div>
              <div className="text-xs md:text-base">Dental Clinic</div>
            </div>
          </div>

          <p className="text-md">
            Your Smile, Our Priority – Providing Trusted<br/> Dental Care for Every Patient.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex flex-col items-center md:items-center gap-2">
          <p className="text-lg font-semibold text-blue-200 mb-2">Overview</p>
          <Link to="/" className="hover:text-sky-300 text-base transition">Home</Link>
          <Link to="/About" className="hover:text-sky-300 text-base transition">About</Link>
          <Link to="/Services" className="hover:text-sky-300 text-base transition">Services</Link>
          <Link to="/Treatment" className="hover:text-sky-300 text-base transition">Treatment</Link>
          <Link to="/Contact" className="hover:text-sky-300 text-base transition">Contact</Link>
        </div>

        {/* Right - Contact Info + Icons */}
        <div className="text-sm leading-relaxed flex flex-col gap-2">
          <p className="text-base font-semibold text-blue-200 mb-1">Contact Us</p>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-white" />
            <p>
              A-87/1, Dr. Abhinay Agarwal's Super Speciality Dental Clinic,<br />
              Chaddha Cinema Road, Prince Road,
              Gandhi Nagar-244001
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <p>9557345251</p>
          </div>

          {/* Social Icons on Right */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/share/1C3ZAHYE2A/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300"
            >
              <FaFacebook className="text-white text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinay-agarwal-7223866"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300"
            >
              <FaLinkedin className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white opacity-30 w-full mt-10 mb-4"></div>

      {/* Copyright */}
      <div className="text-center text-sm sm:text-base">
        © 2025 Dr. Abhinay Agarwal Super Speciality Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;



