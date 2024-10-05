import React from "react";
import HeroSection from "../components/HeroSection";

export default function GetStarted() {
  return (
    <>
     
      <section id="herosection" className="w-full relative flex  py-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-[#05091D] "></div>
      <div className="max-w-[1200px] mx-auto ">
        
        <HeroSection />
      </div>
    </section>
    </>
  );
}
// [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]