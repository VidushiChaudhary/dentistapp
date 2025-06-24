import React, { useState } from "react";
import img1 from '../dr.abhinay.jpeg';
import img2 from '../dr.megha.jpeg';

function AboutDoctor() {
    const [showFullAbhinay, setShowFullAbhinay] = useState(false);
    const [showFullMegha, setShowFullMegha] = useState(false);

    return (
        <div className="py-12 px-6 bg-blue-900">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-6xl mx-auto">
                
                {/* Doctor Card Template */}
                <div className="bg-white rounded-md shadow-lg p-6 text-center w-full max-w-sm relative">
                   
                    

                    {/* Doctor Image */}
                    <div >
                        <img
                            src={img1}
                            alt="Dr. Abhinay Agarwal"
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow "
                        />
                    </div>

                    {/* Doctor Info */}
                    <h3 className="text-xl font-semibold text-gray-900">Dr. Abhinay Agarwal</h3>
                    <p className="text-sm text-gray-600">BDS, MDS (Conservative Dentistry & Endodontics)</p>

                    {/* Read More */}
                    {showFullAbhinay && (
                        <div className="text-gray-700 text-sm mt-3 text-left">
                            <p>Dr. Abhinay Agarwal is a highly respected and experienced dental professional, known for his commitment to excellence in patient care and academic leadership. With over 17 years of clinical and academic experience, he has earned a reputation for providing advanced dental treatments with precision, compassion, and integrity.</p>
                            <p>Throughout his career, Dr. Agarwal has consistently focused on delivering the highest standard of care, blending his vast clinical knowledge with the latest techniques in modern dentistry. His patient-first approach, combined with a deep understanding of dental science, allows him to offer customized treatment plans that prioritize long-term oral health and patient satisfaction</p>
                            <p>17+ years of clinical & academic experience.</p>
                            <p>College: Subharti Dental College, Meerut (2008)</p>
                            <p>Past: Reader at TMU</p>
                            <p>Member: IACDE</p>
                        </div>
                    )}
                    <button
                        className="text-blue-600 font-medium mt-3 hover:underline"
                        onClick={() => setShowFullAbhinay(!showFullAbhinay)}
                    >
                        {showFullAbhinay ? "Show Less" : "Read More"}
                    </button>
                </div>

                {/* Dr. Megha Card */}
                <div className="bg-white rounded-md shadow-lg p-6 text-center w-full max-w-sm relative">
                    
                   

                    {/* Doctor Image */}
                    <div >
                        <img
                            src={img2}
                            alt="Dr. Megha Agarwal"
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                        />
                    </div>

                    {/* Doctor Info */}
                    <h3 className="text-xl font-semibold text-gray-900">Dr. Megha Agarwal</h3>
                    <p className="text-sm text-gray-600">BDS, Dental Surgeon</p>

                    {/* Read More */}
                    {showFullMegha && (
                        <div className="text-gray-700 text-sm mt-3 text-left">
                            <p>Dr. Megha Agarwal is a passionate and skilled dental surgeon, dedicated to delivering gentle, effective, and personalized dental care. With a degree in Bachelor of Dental Surgery (BDS), she brings both clinical expertise and a comforting presence to her practice.</p>
                            <p>Dr. Megha takes the time to understand each patient’s concerns and tailors treatments to suit their individual needs. Her goal is not just to treat dental issues but to educate and empower her patients to take charge of their oral health. Whether it’s a routine check-up or a complex procedure, she ensures that every patient feels informed, comfortable, and confident in their treatment.</p>
                            <p>BDS from [Insert College]</p>
                            <p>Special Interests:</p>
                            <ul className="list-disc ml-6 text-sm">
                                <li>Preventive Dentistry</li>
                                <li>Cosmetic Dentistry</li>
                                <li>Patient Awareness</li>
                            </ul>
                        </div>
                    )}
                    <button
                        className="text-blue-600 font-medium mt-3 hover:underline"
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
