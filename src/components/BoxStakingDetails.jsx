import React from 'react'

export default function BoxStakingDetails({selectedToken}) {
  return (
    <div className='w-full flex flex-col gap-7 min-[880px]:mt-14'>
        <div className='w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl'>
          <h1 className='text-3xl font-bold'>100 {selectedToken}</h1>
        <span className='text-[#9CA0D2] text-xl font-bold'>Total locked token</span>
        </div>

        <div className='w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl'>
          <h1 className='text-3xl font-bold'>10 {selectedToken}</h1>
        <span className='text-[#9CA0D2] text-xl font-bold'>Your locked Token</span>
        </div>

        <div className='w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl'>
          <h1 className='text-3xl font-bold'>5 {selectedToken}</h1>
        <span className='text-[#9CA0D2] text-xl font-bold'>Total earned Reward</span>
        </div>


        <div className='w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl'>
          <h1 className='text-3xl font-bold'>20%</h1>
        <span className='text-[#9CA0D2] text-xl font-bold'>APY</span>
        </div>

        <div className='w-full bg-s2 p-10 flex flex-col gap-4 rounded-7xl'>
          <h1 className='text-3xl font-bold'>4000</h1>
        <span className='text-[#9CA0D2] text-xl font-bold'>Number of Stakers</span>
        </div>

       
    </div>
  )
}