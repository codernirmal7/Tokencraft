import React from "react";
import HeroSection from "../components/HeroSection";

export default function GetStarted() {
  return (
    <>
     
      <section id="herosection" className="h-screen w-full bg-black  bg-grid-white/[0.13]  relative flex max-[1060px]:items-center max-[1060px]:justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-[1000px] mx-auto ">
        
        <HeroSection />
      </div>
    </section>
    </>
  );
}
