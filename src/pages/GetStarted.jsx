import React from "react";
import HeroSection from "../components/HeroSection";
import HowtoStake from "../components/HowtoStake";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function GetStarted() {
  return (
    <>
     
    <section id="herosection" className="w-full relative flex  pt-6 pb-3 overflow-hidden">
      <div className="max-w-[1200px] mx-auto ">
        <HeroSection />
      </div>
    </section>
    

    <section id="aboutus" className="w-full relative flex  pt-6 pb-3 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 py-14">
        <AboutUs />
      </div>
    </section>


    <section id="faq" className="w-full relative flex pb-10 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <Faq />
      </div>
    </section>

   <footer>
   <div className="max-w-[1200px] mx-auto ">
        <Footer />
      </div>
   </footer>
    </>
  );
}