import React from 'react';


const partners = [
    '/src/assets/partner/Binance.png',
    '/src/assets/partner/Trustwallet.png',
    '/src/assets/partner/Kucoin.webp',
    '/src/assets/partner/Uniswap.png',
    '/src/assets/partner/Coinbase.png',
  ];



const PartnerSlider = () => {
  return (
    <div className="max-w-[1120px] mx-auto overflow-hidden relative pointer-events-none bg-s1 mt-5 md:mt-0">
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
  );
};

export default PartnerSlider;