import React from 'react'
import HeroSection from '../sections/HeroSection';
import Navbar from '../components/Navbar';
import AboutUs from '../sections/AboutUs';
import VisionMission from '../sections/VisionMission.jsx';
import TeamSection from '../sections/TeamSection.jsx'
import Footer from '../components/Footer'
import ServiceSection from '../sections/ServiceSection';
import  ClientsSection from '../sections/ ClientsSection.jsx'
import ContactUs from '../sections/ContactUs';
import Gallary from '../sections/Gallary.jsx'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <VisionMission />
      <ServiceSection />
      <TeamSection />
      < ClientsSection />
      <Gallary />
      <ContactUs />
      <Footer />
    </div>
  );
}

