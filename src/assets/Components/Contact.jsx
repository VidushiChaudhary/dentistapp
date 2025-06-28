import React from "react";
import Contactform from "./Contactform";
import teeth5 from "../pic10.webp";


function Contact() {
  return (
    <div>
    <div className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={teeth5}
        alt="Dental Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* White Overlay for readability */}
      <div className="absolute inset-0  bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-34 md:px-20 flex flex-col justify-start md:justify-center h-full">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Your Smile, Our Priority
          </h1>
          <p className="text-white text-base md:text-lg mb-6">
            Looking for expert dental care? Get in touch with us for
            consultations, checkups, or any dental concerns. We're just a call
            away!
          </p>
          <a
            href="tel:+911234567890"
            className="inline-block bg-blue-200 text-blue-900 font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-800 transition duration-300"
          >
            📞 Call Now
          </a>
        </div>
      </div>
     
    </div>
    <Contactform/>
    </div>
     
  );
}

export default Contact;

