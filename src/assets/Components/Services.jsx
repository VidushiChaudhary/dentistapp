import React from "react";
import teeth6 from '../teeth6.avif';
import Services1 from "./Services1";
import Services2 from "./Services2";
import Servicescontact from "./Servicescontact";


function Services() {
  return (
    <div className="bg-white">
      
      {/* Full-screen Image with Left-aligned Overlay Content */}
      <div className="relative w-full h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-screen">
        <img
          src={teeth6}
          alt="Dental Services"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text Content on Left */}
        <div className="absolute inset-0  bg-opacity-50 flex items-center px-4 sm:px-8 md:px-20">
          <div className="text-blue-900 max-w-2xl space-y-4 z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
              Our Dental Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg">
              At Agarwal's Super Speciality Dental Clinic, we are dedicated to providing a full range of dental treatments to help you maintain a healthy and confident smile.
            </p>
            <ul className="list-disc list-inside text-blue-900 text-sm sm:text-base space-y-2">
              <li>General Dentistry & Preventive Care</li>
              <li>Cosmetic Dentistry (Teeth Whitening, Veneers)</li>
              <li>Orthodontics (Braces & Invisalign)</li>
              <li>Root Canal Treatment (RCT)</li>
              <li>Dental Implants & Bridges</li>
              <li>Child Dental Care</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="px-4 sm:px-6 md:px-20 py-12 space-y-10">
        <Services1 />
        <Services2 />
        <Servicescontact/>
      </div>
    </div>
  );
}

export default Services;

