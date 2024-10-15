import React, { useEffect, useState } from 'react'
import BoxStaking from '../components/BoxStaking'
import BoxStakingDetails from '../components/BoxStakingDetails'
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';

export default function Staking() {
  const [selectedToken , setSelectedToken] = useState("Craft")

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
          totalRewardUserEarned : data[3] === "0" ? 0 : ethers.formatEther(data[3]),
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
    <>
       <div className='w-full pb-10 px-4 py-4 md:px-7 md:py-8 mt-[100px] '>
          <div className='max-w-[1200px] mx-auto flex max-[880px]:flex-col gap-6'>
          <BoxStaking selectedToken={selectedToken} setSelectedToken={setSelectedToken} userStakedInfo={userStakedInfo}/>
          <BoxStakingDetails selectedToken={selectedToken} userStakedInfo={userStakedInfo}/>
          </div>
       </div>
    </>
  )
}