import React, { useEffect } from 'react'
import { FaXmark } from 'react-icons/fa6'

export default function TermsofUse({isOpenTermsofUse, setIsOpenTermsofUse }) {
  useEffect(() => {
    if (isOpenTermsofUse) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },[isOpenTermsofUse])

  const handelClick = (e) => {
    if (e.target.id === 'termsofuse-modal') {
      setIsOpenTermsofUse(false)
    }
  }

  return (
    <>
       <div
        className={`w-full h-screen fixed z-[99] flex justify-center items-center top-0 left-0 px-7 py-5 bg-gray-900/10  scale-0 transition-all duration-500 ${
            isOpenTermsofUse ? "scale-100" : "scale-0"
        }`}
        onClick={handelClick}
        id='termsofuse-modal'
        
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0e1434]/[0.5] to-[#1b275a]/[0.5]  backdrop-blur-md overflow-y-scroll h-full max-h-[40rem]">
          <div className=" w-full text-start border-b border-primary/[0.4] flex justify-between items-center p-5 ">
            <h1 className="text-3xl font-bold text-primary">Terms of Use</h1>
            <FaXmark onClick={() => setIsOpenTermsofUse(false)} className="cursor-pointer"/>
          </div>
          <div className="w-full max-w-3xl p-5 flex flex-col gap-4">
            <p>
            Welcome to TokenCraft. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-medium text-yellow-500">1. Acceptance of Terms</h2>
                <p>By using the TokenCraft platform, you agree to be legally bound by these Terms of Use, as well as any additional terms and policies referenced herein.</p>
            </div>

            <div className="flex flex-col gap-3 mt-5">
                <h2 className="text-xl font-medium text-yellow-500">2. Eligibility</h2>
                <span>We use the collected data to:</span>
                <p>To use TokenCraft, you must be at least 18 years old and fully able to form a legally binding contract under applicable law.</p>
            </div>

            <div className="flex flex-col gap-3 mt-5">
                <h2 className="text-xl font-medium text-yellow-500">3. Use of the Platform</h2>
                <p>You agree not to use the platform for any unlawful purpose or in a manner that could harm the platform or its users. TokenCraft provides token staking, swapping, and other features that should only be used as intended.</p>
            </div>

            <div className="flex flex-col gap-3 mt-5">
                <h2 className="text-xl font-medium text-yellow-500">4. Staking and Transactions</h2>
                <p>TokenCraft offers fixed-period staking. By staking your tokens, you agree to lock them for the full period. Early withdrawal may not be permitted, and any staking rewards will be subject to the platform’s terms.</p>
            </div>

            <div className="flex flex-col gap-3 mt-5">
                <h2 className="text-xl font-medium text-yellow-500">5. Intellectual Property</h2>
                <p>All content, logos, and materials on TokenCraft are the intellectual property of the platform. You are not permitted to reproduce or distribute this content without our prior written consent.</p>
            </div>

            <div className="flex flex-col gap-3 mt-5">
                <h2 className="text-xl font-medium text-yellow-500">6. Limitation of Liability</h2>
                <p>TokenCraft is not responsible for any loss, damages, or claims arising from your use of the platform. Your use of the platform is at your own risk.</p>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}
