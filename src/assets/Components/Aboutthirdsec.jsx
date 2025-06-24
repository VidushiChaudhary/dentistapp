import React from "react";
import { Phone } from 'lucide-react'; // Lucide React icons (optional, needs install)
import Home1 from '../Home1.jpg';

function Aboutthirdsec() {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center bg-blue-100 px-6 py-10 gap-10 lg:gap-0">
            
            {/* Left Content */}
            <div className="lg:w-1/2 w-full space-y-4">
                <p className="text-2xl font-extrabold text-blue-900">New Patient?</p>
                <p className="text-xl font-semibold text-gray-800">
                    Contact us now and get over your problem
                </p>
                <p className="text-gray-700 text-base">Our Clinic Contact Number:</p>
                <div className="flex items-center gap-2 text-blue-900 text-lg font-medium">
                    <Phone className="w-5 h-5 text-blue-600" />
                    +91 9555524592 / 0120-4294949
                </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                <img
                    src={Home1}
                    alt="Dental Clinic"
                    className="w-full max-w-md rounded-md shadow-lg object-cover"
                />
            </div>
        </div>
    );
}

export default Aboutthirdsec;
