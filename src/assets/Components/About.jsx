import React from "react";
import video from '../video.mp4';
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
            <div className="w-full h-auto">
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                />
            </div>
            <Aboutfirstsec/>
            <AboutDoctor/>
            <Result/>
            <Aboutsecondsec/>
            <Workinghours/>
            <AboutGallery/>
            <AboutReview/>
            <Aboutthirdsec/>
            
            
           
        </div>
    );
}

export default About;

