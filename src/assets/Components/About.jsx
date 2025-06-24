import React from "react";
import video from '../video.mp4';
import Aboutfirstsec from "./AboutfirstSec";
import AboutDoctor from "./AboutDoctor";
import Aboutsecondsec from './Aboutsecondsec';
import Aboutthirdsec from './Aboutthirdsec';

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
            <Aboutsecondsec/>
            <Aboutthirdsec/>
           
        </div>
    );
}

export default About;

