import React, { useState } from 'react'
import BoxStaking from '../components/BoxStaking'
import BoxStakingDetails from '../components/BoxStakingDetails'

export default function Staking() {
  const [selectedToken , setSelectedToken] = useState("Craft")

  return (
    <>
       <div className='w-full pb-10 px-4 py-4 md:px-7 md:py-8 mt-[100px] '>
          <div className='max-w-[1200px] mx-auto flex max-[880px]:flex-col gap-6'>
          <BoxStaking selectedToken={selectedToken} setSelectedToken={setSelectedToken}/>
          <BoxStakingDetails selectedToken={selectedToken}/>
          </div>
       </div>
    </>
  )
}