import React from "react";
import HeroSection from "../components/HeroSection";
import HowtoStake from "../components/HowtoStake";
import Faq from "../components/Faq";

export default function GetStarted() {
  return (
    <>
     
      <section id="herosection" className="w-full relative flex  pt-6 pb-3 overflow-hidden">
      <div className="max-w-[1200px] mx-auto ">
        <HeroSection />
      </div>
    </section>
    <section id="howtostake" className="w-full relative flex pb-10 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto ">
        <HowtoStake />
      </div>
    </section>

    <section id="faq" className="w-full relative flex pb-10 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto ">
        <Faq />
      </div>
    </section>

    </>
  );
}