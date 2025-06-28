import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import contactmap from '../contactmap.png'

function ContactSection() {
  return (
    <div>
    <div className="bg-blue-200 py-12 px-6 md:px-20 mt-20 lg:px-32 text-gray-900 relative overflow-hidden">
      {/* Decorative angled background */}
      <div className="absolute top-0 left-0 w-full h-full bg-orange-200 rotate-2 origin-top -z-10"></div>

      <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* Left: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="mb-6 text-sm">Fields marked with an <span className="text-blue-600">*</span> are required</p>

          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">
                Name <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-sm bg-white focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Email <span className="text-blue-600">*</span>
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-sm bg-white focus:outline-none"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                Phone <span className="text-blue-600">*</span>
              </label>
              <input
                type="tel"
                className="w-full p-3 rounded-sm bg-white focus:outline-none"
                placeholder="Your phone number"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 font-semibold hover:bg-black transition rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-extrabold mb-6">Get In Touch with Us!</h3>

          <div className="flex items-start gap-4 mb-6">
            <div className="text-white bg-cyan-600 p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="font-semibold text-lg">Clinic Phone</p>
              <p className="text-white">+91 9555524592 / 0120-4294949</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-white bg-cyan-600 p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="font-semibold text-lg">Dental Clinic</p>
              <p className="text-white">
                Shop No. 9B, 9C, 10A Mahagun Mansion,
                <br />
                1/4 Vaibhav Khand, Indirapuram,
                <br />
                Ghaziabad - 201014
              </p>
                <div>
              <h4 className="text-xl font-semibold mt-5 text-black mb-2">Google Maps</h4>
              <a
                href="https://www.google.com/maps/place/Agarwal+Superspeciality+Dental+Clinic/@28.8289451,78.7725753,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
     {/* Clickable Map Image */}
      <div className="mt-10">
        <a
          href="https://www.google.com/maps/place/Agarwal+Superspeciality+Dental+Clinic/@28.8289451,78.7725753,17z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={contactmap}
            alt="Map location"
            className="w-full h-auto rounded-md shadow-md cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactSection;


