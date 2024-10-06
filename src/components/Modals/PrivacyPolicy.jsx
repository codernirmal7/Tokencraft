import React, { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

export default function PrivacyPolicy({isOpenPrivacyPolicy, setIsOpenPrivacyPolicy }) {
  useEffect(() => {
    if (isOpenPrivacyPolicy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },[isOpenPrivacyPolicy])
  const handelClick = (e) => {
    if (e.target.id === "privacypolicy-modal") {
      setIsOpenPrivacyPolicy(false);
    }
  }
  return (
    <>
      <div
        className={`w-full h-screen fixed z-[99] flex justify-center items-center top-0 left-0 px-7 py-5 bg-gray-900/10  scale-0 transition-all duration-500 ${
          isOpenPrivacyPolicy ? "scale-100" : "scale-0"
        }`}
         onClick={handelClick}
        id='privacypolicy-modal'
        
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0e1434]/[0.5] to-[#1b275a]/[0.5]  backdrop-blur-md overflow-y-scroll h-full max-h-[40rem]">
          <div className=" w-full text-start border-b border-primary/[0.4] flex justify-between items-center p-5 ">
            <h1 className="text-3xl font-bold text-primary">Privacy Policy</h1>
            <FaXmark onClick={() => setIsOpenPrivacyPolicy(false)} className="cursor-pointer"/>
          </div>
          <div className="w-full max-w-3xl p-5 flex flex-col gap-4">
            <p>
              At TokenCraft, we are committed to protecting your privacy and
              ensuring a safe and secure user experience. This Privacy Policy
              outlines the types of personal information we collect and how we
              use, share, and protect that information.
            </p>
            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-medium">1. Information We Collect</h2>
                <ul className="flex flex-col gap-2 list-disc px-3">
                    <li><strong className="text-yellow-500">Personal Information: </strong> When you use TokenCraft, we may collect information such as your wallet address, transaction data, and any other identifiable information that you provide voluntarily.</li>
                    <li><strong className="text-yellow-500">Usage Data: </strong> We collect data on how you interact with our platform, including information about your device, browser type, and IP address.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-3 mt-5">
                <h2 className="text-xl font-medium">2. How We Use Your Information</h2>
                <span>We use the collected data to:</span>
                <ul className="flex flex-col gap-2 list-disc px-3">
                    <li>Facilitate your participation in token staking, swapping, and play-to-earn features.</li>
                    <li>Improve the performance and functionality of the platform.</li>
                    <li>Provide customer support and respond to inquiries.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-3 mt-5">
                <h2 className="text-xl font-medium">3. Sharing of Information</h2>
                <span>We do not sell or share your personal information with third parties except in the following cases:</span>
                <ul className="flex flex-col gap-2 list-disc px-3">
                    <li>Facilitate your participation in token staking, swapping, and play-to-earn features.</li>
                    <li>Improve the performance and functionality of the platform.</li>
                    <li>Provide customer support and respond to inquiries.</li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
