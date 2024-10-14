import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BoxStakingDetails({ selectedToken }) {
  const web3ContentInitialState = useSelector((state) => state.web3Content);
  const [userStakedInfo , setUserStakedInfo] = useState({
     amount : 0,
     totalRewardUserEarned : 0,
     isStaked : false
  })
  
  useEffect(() => {
    const getUserStakedInfo = async () => {
      try {
        let data;
        if (selectedToken === "Craft") {
          data =
            await web3ContentInitialState.accountInfo.craftTokenStakingContract.stakes(web3ContentInitialState.accountInfo.selectedAccount)
          } else {
          if (selectedToken === "Dragon Craft") {
            data =
              await web3ContentInitialState.accountInfo.dragonCraftTokenStakingContract.stakes(
                web3ContentInitialState.accountInfo.selectedAccount
              );

          } else {
            data = null;
          }
        }
        setUserStakedInfo({
          amount : data[0] === "0" ? 0 : ethers.formatEther(data[0]),
          totalRewardUserEarned : data[3],
          isStaked : data[4]
        })
      } catch (error) {
        console.log("Error while getting user available staked token", error);
      }
    };

    web3ContentInitialState.accountInfo.craftTokenContract &&
    getUserStakedInfo();
  }, [
    web3ContentInitialState.accountInfo?.craftTokenContract || null,
    web3ContentInitialState.accountInfo?.selectedAccount || null,
    selectedToken,
  ]);

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
