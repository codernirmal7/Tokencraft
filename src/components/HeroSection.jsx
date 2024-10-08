import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import PartnerSlider from "./PartnerSlider";

export default function HeroSection() {
  return (
    <>
      <div className="rounded-md flex antialiased ">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="p-4 mx-auto relative z-10 h-[690px] md:h-[600px] md:pt-16  w-full  flex items-center justify-center flex-col-reverse min-[1060px]:flex-row min-[1060px]:justify-around min-[1145px]:px-10">
          <div className="flex flex-col  max-[1060px]:items-center">
            <h1 className="max-w-xl min-[1145px]:max-w-5xl max-[1060px]:max-w-3xl  uppercase text-4xl space-x-3 lg:text-6xl max-[1060px]:text-center font-black bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Connect your{" "}
              <span className="bg-gradient-primary  leading-8 text-transparent bg-clip-text">
                MetaMask wallet
              </span>
            </h1>

            <p className="mt-4 font-normal text-base max-[1060px]:text-center max-[1060px]:max-w-2xl text-neutral-400 max-w-lg">
              Connect your MetaMask wallet to easily stake tokens and explore
              exciting play-to-earn opportunities. Join us today and take your
              first step into the world of decentralized finance!
            </p>
            <div className="flex mt-4 gap-4 max-[1060px]:justify-center">
              <Button
                children={
                  <>
                    Get started
                    <FaArrowRight className="group-hover/btn:translate-x-[3px] transition-all" />
                  </>
                }
                className="px-4 py-2"
              />
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
          <div className="w-[800px] max-[1145px]:max-w-sm heroimage pointer-events-none">
            <img
              src="hero.png" // Fallback image for browsers that don't support srcset
              srcSet="
    hersectionImage/image-320px.png 320w,
    hersectionImage/image-480px.png 480w,
    hersectionImage/image-768px.png 768w,
    hersectionImage/image-1024px.png 1024w,
    hersectionImage/image-1440px.png 1440w,
    hersectionImage/image-1920px.png 1920w,
    hersectionImage/image-2460px.png 2460w
  "
              sizes="
    (max-width: 320px) 320px,
    (max-width: 640px) 640px,
    (max-width: 1024px) 1024px,
    100vw
  "
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </div>
      <PartnerSlider />

    </>
  );
}
