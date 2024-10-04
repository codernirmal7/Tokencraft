import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FaArrowRight } from "react-icons/fa";
import MetaMask3DModel from "./3dModals/MetaMask3DModel";

export default function HeroSection() {
  return (
    <>
      <div className="w-full rounded-md flex  antialiased  overflow-hidden max-[1060px]:pt-0 pt-36">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className=" p-4  mx-auto relative z-10  w-full  flex items-center justify-center flex-col-reverse min-[1060px]:flex-row min-[1060px]:justify-around">
          <div className="flex flex-col  max-[1060px]:items-center">
          <h1 className="max-w-xl min-[1145px]:max-w-2xl max-[1060px]:max-w-3xl text-5xl space-x-3 lg:text-6xl max-[1060px]:text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Connect your  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">MetaMask wallet</span> 
            </h1>

            <p className="mt-4 font-normal text-base max-[1060px]:text-center max-[1060px]:max-w-2xl text-neutral-400 max-w-lg">
              Connect your MetaMask wallet to easily stake tokens and explore
              exciting play-to-earn opportunities. Join us today and take your
              first step into the world of decentralized finance!
            </p>
            <div className="flex mt-4 gap-4 max-[1060px]:justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 group/btn hover:bg-primary/85 flex items-center gap-1 transition-all">
                Get started
                <FaArrowRight className="group-hover/btn:translate-x-[3px] transition-all" />
              </button>
            </div>
            <div className="flex mt-16 gap-10">
              <button className="flex items-center gap-2 group/btn transition-all">
                <div className="h-4 w-1 bg-white group-hover/btn:bg-primary"></div>
                <a
                  href="#contact-support"
                  className="group-hover/btn:text-primary"
                >
                  Contact support
                </a>
                <FaArrowRight className="group-hover/btn:translate-x-[3px] transition-all group-hover/btn:text-primary" />
              </button>
            </div>
          </div>
          <div className="max-[1060px]:hidden">
            <MetaMask3DModel />
          </div>
        </div>
      </div>
    </>
  );
}
