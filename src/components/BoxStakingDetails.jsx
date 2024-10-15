import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BoxStakingDetails({ selectedToken , userStakedInfo }) {
  
  return (
    <div className="w-full flex flex-col gap-7 min-[880px]:mt-14">
      
      <div className="w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl">
        <h1 className="text-3xl font-bold">{userStakedInfo.amount} {selectedToken}</h1>
        <span className="text-[#9CA0D2] text-xl font-bold">
          Your locked Token
        </span>
      </div>

      <div className="w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl">
        <h1 className="text-3xl font-bold">{userStakedInfo.totalRewardUserEarned} {selectedToken}</h1>
        <span className="text-[#9CA0D2] text-xl font-bold">
          Total earned Reward
        </span>
      </div>


      
    </div>
  );
}
