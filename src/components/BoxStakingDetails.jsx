import React from "react";
import {motion} from "framer-motion"
import { FadeUp } from "./animation/FadUp";

export default function BoxStakingDetails({ selectedToken , userStakedInfo }) {
  
  return (

    <>
     <motion.div 
    className="w-full flex flex-col gap-7 min-[880px]:mt-14 max-[880px]:hidden" 
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
    >
      
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

      <div className="w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl">
        <h1 className="text-3xl font-bold">{userStakedInfo.stakeDuration} days</h1>
        <span className="text-[#9CA0D2] text-xl font-bold">
          Your lock duration
        </span>
      </div>


      
    </motion.div>

    <div 
    className="w-full hidden flex-col gap-7 min-[880px]:mt-14 max-[880px]:flex" 
    >
      
      <motion.div 
      className="w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl"
       variants={FadeUp(0.4)}
       initial="initial"
       animate="animate"
      >
        <h1 className="text-3xl font-bold">{userStakedInfo.amount} {selectedToken}</h1>
        <span className="text-[#9CA0D2] text-xl font-bold">
          Your locked Token
        </span>
      </motion.div>

      <motion.div 
      className="w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl"
      variants={FadeUp(0.6)}
      initial="initial"
      animate="animate"
      >
        <h1 className="text-3xl font-bold">{userStakedInfo.totalRewardUserEarned} {selectedToken}</h1>
        <span className="text-[#9CA0D2] text-xl font-bold">
          Total earned Reward
        </span>
      </motion.div>

      <motion.div 
      className="w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl"
      variants={FadeUp(0.8)}
      initial="initial"
      animate="animate"
      >
        <h1 className="text-3xl font-bold">{userStakedInfo.stakeDuration} days</h1>
        <span className="text-[#9CA0D2] text-xl font-bold">
          Your lock duration
        </span>
      </motion.div>


      
    </div>
    </>
   

  );
}
