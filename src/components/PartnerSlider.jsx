import React from 'react';


const partners = [
    '/src/assets/partner/Binance.png',
    '/src/assets/partner/Trustwallet.png',
    '/src/assets/partner/Kucoin.webp',
    '/src/assets/partner/Uniswap.png',
    '/src/assets/partner/Coinbase.png',
    '/src/assets/partner/etoro.png',
  ];



const PartnerSlider = () => {
  return (
    <>
     <div className="max-w-[1120px] mx-auto overflow-hidden relative pointer-events-none bg-s1 mt-5 md:mt-0 block lg:hidden">
      <div className="flex animate-marquee space-x-8">
        {partners.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index}`}
            className="w-48 h-auto object-contain"
          />
        ))}
      </div>
    </div>
<div>

</div>
    <div className='max-w-[1120px] px-4 mx-auto overflow-hidden relative pointer-events-none  hidden lg:block py-7 '>
      <div className='flex gap-4 justify-center items-center partnerContainer' >
         <div className='flex gap-4 partnerFirstImageContainer '>
            <img
             key={0}
            src={partners[0]}
            alt={`Partner 0`}
            className="w-32 h-auto object-contain"
          />
            <img
             key={1}
            src={partners[1]}
            alt={`Partner 1`}
            className="w-32 h-auto object-contain"
          />
            <img
             key={2}
            src={partners[2]}
            alt={`Partner 2`}
            className="w-32 h-auto object-contain"
          />
           </div>
             <div className=''>
             <div key="ourPartnerDiv" className='animate-bounce w-28 h-28 flex justify-center items-center rounded-full p-[3px] bg-gradient-primary'>
              <div className='w-full h-full bg-s1 rounded-full flex justify-center items-center'>
                <span className='max-w-16 text-xl text-transparent bg-clip-text bg-gradient-primary text-center'>Our Partner</span>
              </div>
            </div>
             </div>
             <div className='flex gap-4  partnerSecondImageContainer p-6'>
             <img
             key={3}
            src={partners[3]}
            alt={`Partner 3`}
            className="w-32 h-auto object-contain"
          />
            <img
             key={4}
            src={partners[4]}
            alt={`Partner 4`}
            className="w-32 h-auto object-contain"
          />
            <img
             key={5}
            src={partners[5]}
            alt={`Partner 5`}
            className="w-32 h-auto object-contain"
          />
             </div>
        </div>
    </div>
    </>
   
  );
};

export default PartnerSlider;