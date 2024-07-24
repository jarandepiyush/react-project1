
import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
// import Home from './components/Home'
import Mainnav from './components/Mainnav'
import Practice from './components/Practice'
import Service from './components/Service'
import About from './components/About'
import Attorneys from './components/Attorneys'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Commonimg from './components/Commonimg'
import Experience from './components/Experience'
import Experiencejs from './components/Experiencejs'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Nav/>} />
        {/* <Route path="/Home" element={<Home/>} /> */}
        <Route path="/Mainnav" element={<Mainnav />} />
        <Route path="/Practice"element={<Practice  />}  />
        <Route path="/Service" element={<Service  />} />
        <Route path="/Attorneys" element={<Attorneys  />} />
        <Route path="/About" element={<About  />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Commonimg" element={<Commonimg />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Experiencejs" element={<Experiencejs />} />
        
      </Routes>
    </React.Fragment>
  );
}




