import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Home from './assets/Components/Home';
import AboutClinic from './assets/Components/AboutClinic';
import About from './assets/Components/About';
import Treatment from './assets/Components/Treatments';
import Contact from './assets/Components/Contact';
import Services from './assets/Components/Services';
import Result from './assets/Components/Result';
import BookAppointment from './assets/Components/BookAppointment';
import Footer from './assets/Components/Footer';
import Aboutfirstsec from './assets/Components/AboutfirstSec';
import AboutDoctor from './assets/Components/AboutDoctor';
import Aboutsecondsec from './assets/Components/Aboutsecondsec';
import Aboutthirdsec from './assets/Components/Aboutthirdsec';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Bookappointment" element={<BookAppointment />} />
        <Route path="/AboutClinic" element={<AboutClinic />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Aboutfirstsec" element={<Aboutfirstsec />} />
        <Route path="/Aboutvideo" element={<AboutDoctor />} />
        <Route path="/Aboutsecondsec" element={<Aboutsecondsec />} />
         <Route path="/Aboutthirdsec" element={<Aboutthirdsec />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

