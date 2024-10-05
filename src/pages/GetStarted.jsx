import React from "react";
import HeroSection from "../components/HeroSection";
import HowtoStake from "../components/HowtoStake";

export default function GetStarted() {
  return (
    <>
     
      <section id="herosection" className="w-full relative flex  pt-6 pb-3 overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center"></div>
      <div className="max-w-[1200px] mx-auto ">
        
        <HeroSection />
      </div>
    </section>
    <section id="howtostake" className="w-full relative flex pb-10 overflow-x-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center"></div>
      <div className="max-w-[1200px] mx-auto ">
        <HowtoStake />
      </div>
    </section>
    </>
  );
}