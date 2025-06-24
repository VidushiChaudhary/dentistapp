import React from "react";
import pic8 from '../pic8.avif';

function Aboutsecondsec() {
    return (
        <div className="bg-white px-5 py-15">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                
                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                    <img
                        src={pic8}
                        alt="Dental Clinic"
                        className="w-full h-80 lg:h-[500px] "
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 w-full space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">
                        "Committed to Delivering Exceptional Care with Our Best Features"
                    </h2>
                    <p className="text-gray-700 text-justify">
                        At <strong>Agarwal's Super Speciality Dental Clinic</strong>, our goal is to provide outstanding dental care with a focus on comfort, innovation, and personalized attention. From your first consultation to your final treatment, we strive to create a calm and relaxing environment tailored to your individual needs.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                            <h4 className="text-blue-800 font-semibold">🧘‍♂️ Reduced Anxiety</h4>
                            <p className="text-sm text-gray-700 mt-1">Soothing atmosphere, gentle techniques, and friendly communication to ease dental fear.</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                            <h4 className="text-blue-800 font-semibold">🪑 Enhanced Comfort</h4>
                            <p className="text-sm text-gray-700 mt-1">Modern ergonomic chairs, painless procedures, and compassionate care for all ages.</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                            <h4 className="text-blue-800 font-semibold">🧍 Personalized Care</h4>
                            <p className="text-sm text-gray-700 mt-1">Tailored treatment plans designed around your specific goals, lifestyle, and dental history.</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                            <h4 className="text-blue-800 font-semibold">🦷 Advanced Technology</h4>
                            <p className="text-sm text-gray-700 mt-1">We utilize the latest dental tools and digital equipment to deliver precision care and faster results.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Aboutsecondsec;
