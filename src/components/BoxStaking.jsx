import React, { useState } from "react";

export default function BoxStaking({selectedToken,setSelectedToken}) {
  const [selectedDurationDetails, setSelectedDurationDetails] = useState({
    duration: 7,
    apy: "1.6%",
  });
  
  return (
    <>
    <div>
      <div className="flex gap-3">
        <button className={`${selectedToken == "Craft" ? "bg-s2" : ""} p-4 rounded-t-xl`} onClick={()=> setSelectedToken("Craft")}>Craft Token</button>
        <button className={`${selectedToken == "Dragon Craft" ? "bg-s2" : ""} p-4 rounded-t-xl`} onClick={()=> setSelectedToken("Dragon Craft")}>Dragon Craft Token</button>
      </div>
        <div className="bg-s2 w-full rounded-b-7xl rounded-tr-7xl p-8 min-[880px]:h-[50rem]">
      <h1 className="text-2xl lg:text-3xl font-bold">Stake {selectedToken} Token</h1>
      <div className="py-7 grid max-[500px]:grid-cols-2 grid-cols-3 lg:grid-cols-4 gap-4 font-bold">
        <button
          className={`${
            selectedDurationDetails.duration == 7
              ? "bg-primary"
              : "bg-primary/[0.2]"
          } text-white py-[12px] px-[24px] rounded-lg transition-all`}
          onClick={() =>
            setSelectedDurationDetails({ duration: 7, apy: "1.6%" })
          }
        >
          7 Days
        </button>
        <button
          className={`${
            selectedDurationDetails.duration == 14
              ? "bg-primary"
              : "bg-primary/[0.2]"
          } text-white py-[12px] px-[24px] rounded-lg transition-all`}
          onClick={() =>
            setSelectedDurationDetails({ duration: 14, apy: "3.2%" })
          }
        >
          14 Days
        </button>
        <button
          className={`${
            selectedDurationDetails.duration == 30
              ? "bg-primary"
              : "bg-primary/[0.2]"
          } text-white py-[12px] px-[24px] rounded-lg transition-all`}
          onClick={() =>
            setSelectedDurationDetails({ duration: 30, apy: "5.6%" })
          }
        >
          30 Days
        </button>
        <button
          className={`${
            selectedDurationDetails.duration == 60
              ? "bg-primary"
              : "bg-primary/[0.2]"
          } text-white py-[12px] px-[24px] rounded-lg transition-all`}
          onClick={() =>
            setSelectedDurationDetails({ duration: 60, apy: "15.6%" })
          }
        >
          60 Days
        </button>
      </div>
      <div className="flex gap-4 items-center mt-5 text-[#9CA0D2] ">
        <div>
          <ul className="w-[100%] flex flex-col gap-3 text-[1.1rem] font-bold">
            <li>Lock duration: {selectedDurationDetails.duration} days</li>
            <li>Extends lock on registration: Yes</li>
            <li>Status: Unlocked</li>
            <li>Early unstake: Not Allowed</li>
          </ul>
        </div>
        <div className="w-[50%] flex justify-end items-end flex-col ">
          <div>
            <h2 className="text-5xl">{selectedDurationDetails.apy}</h2>
            <span>APY*</span>
          </div>
        </div>
      </div>
      <div className="w-full mt-7 flex flex-col gap-5">
        <span className="text-[#9CA0D2] font-bold text-[1.1rem]">Balance : 4000.890091</span>

        <div className="flex gap-3">
          <div className="w-full relative rounded-lg">
            <input
              type="text"
              className="bg-s1 w-full bg-transparent border-2 border-gray-400 outline-none rounded-lg px-4 py-2 focus:border-primary"
              placeholder="0.0"
            />
            <button className="absolute right-0 w-14 h-11 rounded-lg bg-red-700">
              max
            </button>
          </div>
          <button className="bg-gradient-primary hover:bg-gradient-hover text-white py-3 w-44 rounded-lg cursor-pointer z-10">
            Approve
          </button>
        </div>


        <div className="flex gap-3">
          <div className="w-full relative rounded-lg">
            <input
              type="text"
              className="bg-s1 w-full bg-transparent border-2 border-gray-400 outline-none rounded-lg px-4 py-2 focus:border-primary"
              placeholder="0.0"
            />
            <button className="absolute right-0 w-14 h-11 rounded-lg bg-red-700">
              max
            </button>
          </div>
          <button className="bg-gradient-primary hover:bg-gradient-hover text-white py-3 w-44 rounded-lg cursor-pointer z-10">
            Stake
          </button>
        </div>
        

        
        <div className="flex gap-3">
          <div className="w-full relative h-[1.20rem">
            <input
              type="text"
              className="bg-s1 w-full bg-transparent border-2 border-gray-400 outline-none rounded-lg px-4 py-2 focus:border-primary"
              placeholder="0.0"
            />
            <button className="absolute right-0 w-14 h-11 rounded-lg bg-red-700">
              max
            </button>
          </div>
          <button className="bg-gradient-primary hover:bg-gradient-hover text-white w-44 py-3  rounded-lg cursor-pointer z-10">
            UnStake
          </button>
        </div>
      </div>

      <p className="mt-5 text-[#9CA0D2]">
        TokenCraft offers fixed-period staking. By staking your tokens, you
        agree to lock them for the full period. Early withdrawal may not be
        permitted, and any staking rewards will be subject to the platform’s
        terms.
      </p>
      <h3 className="text-xl mt-7 text-[#9CA0D2] font-bold">*APY is fixed</h3>
    </div>
    </div>

    </>

  );
}
