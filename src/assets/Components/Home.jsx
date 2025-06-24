import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import AboutClinic from './AboutClinic';
import Services from './Services';
import Result from './Result';

import Home1 from '../Home1.jpg';
import Home2 from '../Home2.jpg';
import Home3 from '../Home3.jpg';
import Home4 from '../Home4.jpg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <div id="hero" className="w-full">
      <div className="w-full px-0 sm:px-4 py-6">
        <Slider {...settings}>
          {[Home1, Home2, Home3, Home4].map((image, index) => (
            <div key={index} data-aos="fade-up">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <AboutClinic/>
      <Services/>
      <Result/>
    </div>
  );
  
}

export default Home;
