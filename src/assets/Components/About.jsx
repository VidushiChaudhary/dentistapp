import React from "react";
import pic10 from '../pic10.webp';
import Aboutfirstsec from "./AboutfirstSec";
import AboutDoctor from "./AboutDoctor";
import Aboutsecondsec from './Aboutsecondsec';
import Aboutthirdsec from './Aboutthirdsec';
import Workinghours from './Workinghours';
import AboutReview from './AboutReview';
import Result from './Result';
import AboutGallery from './AboutGallery';

function About() {
    return (
        <div className="px-0 py-0">
            {/* Hero Section with Left Content */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]">
                <img
                    src={pic10}
                    alt="About Banner"
                    className="w-full h-full object-cover"
                />
                {/* Overlay content on the left */}
                <div className="absolute inset-0  bg-opacity-40 flex items-center px-6 sm:px-10 md:px-20 z-10">
                    <div className="text-blue-900 max-w-2xl space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            About Agarwal's Dental Clinic
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl">
                            With over 17 years of excellence in dental care, we are committed to creating beautiful, healthy smiles using advanced technology and personalized treatment in a calm, patient-friendly environment.
                        </p>
                        <p className="hidden sm:block text-sm text-blue-950">
                            Discover who we are, meet our expert team, explore our services, and see how we’re making a difference — one smile at a time.
                        </p>
                    </div>
                </div>
            </div>

            {/* Remaining Sections */}
            <Aboutfirstsec />
            <AboutDoctor />
            <Result />
            <Aboutsecondsec />
            <Workinghours />
            <AboutGallery />
            <AboutReview />
            <Aboutthirdsec />
        </div>
    );
}

export default About;


