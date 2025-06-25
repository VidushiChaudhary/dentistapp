import React, { useState } from "react";
import img1 from '../dr.abhinay.jpeg';
import img2 from '../dr.megha.jpeg';

function AboutDoctor() {
    const [showFullAbhinay, setShowFullAbhinay] = useState(false);
    const [showFullMegha, setShowFullMegha] = useState(false);

    return (
        <div className="py-12 px-6 bg-blue-100">
            <h2 className="text-center text-4xl font-bold text-blue-800 mb-10">Meet Our Experts</h2>
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto">

                {/* Doctor Card Template */}
                <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col justify-between">
                    <div>
                        <img
                            src={img1}
                            alt="Dr. Abhinay Agarwal"
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 text-center">Dr. Abhinay Agarwal</h3>
                        <p className="text-sm text-gray-600 text-center">BDS, MDS (Conservative Dentistry & Endodontics)</p>

                        {showFullAbhinay && (
                            <div className="text-gray-700 text-sm mt-4 space-y-2 text-left">
                                <p>Dr. Abhinay Agarwal is a highly respected and experienced dental professional, known for his commitment to excellence in patient care and academic leadership. With over 17 years of clinical and academic experience, he has earned a reputation for providing advanced dental treatments with precision, compassion, and integrity.</p>
                                <p>He consistently blends clinical knowledge with modern techniques. His patient-first approach ensures long-term oral health and satisfaction.</p>
                                <div className="mt-2">
                                    <p className="font-semibold text-black">Qualification & Experience</p>
                                    <p>• 17+ years of clinical & academic experience</p>
                                    <p>• Subharti Dental College, Meerut (2008)</p>
                                    <p>• Former Reader at TMU</p>
                                    <p>• Member: IACDE</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        className="mt-4 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
                        onClick={() => setShowFullAbhinay(!showFullAbhinay)}
                    >
                        {showFullAbhinay ? "Show Less" : "Read More"}
                    </button>
                </div>

                {/* Dr. Megha Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col justify-between">
                    <div>
                        <img
                            src={img2}
                            alt="Dr. Megha Agarwal"
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 text-center">Dr. Megha Agarwal</h3>
                        <p className="text-sm text-gray-600 text-center">BDS, Dental Surgeon</p>

                        {showFullMegha && (
                            <div className="text-gray-700 text-sm mt-4 space-y-2 text-left">
                                <p>Dr. Megha Agarwal is a passionate dental surgeon committed to gentle and effective care. Her calming presence and clinical expertise help patients feel truly at ease.</p>
                                <p>She tailors treatments to individual needs and emphasizes education and prevention for long-term oral health.</p>
                                <div className="mt-2">
                                    <p className="font-semibold text-black">Qualification & Interests</p>
                                    <p>• BDS from [Insert College]</p>
                                    <p>• Special Interests:</p>
                                    <ul className="list-disc ml-6">
                                        <li>Preventive Dentistry</li>
                                        <li>Cosmetic Dentistry</li>
                                        <li>Patient Awareness</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        className="mt-4 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
                        onClick={() => setShowFullMegha(!showFullMegha)}
                    >
                        {showFullMegha ? "Show Less" : "Read More"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutDoctor;

