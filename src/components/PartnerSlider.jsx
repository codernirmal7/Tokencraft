import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the base Swiper styles
import 'swiper/css/pagination'; // Import Pagination styles
import 'swiper/css/navigation'; // Import Navigation styles
import { Autoplay } from 'swiper/modules';


const partners = [
    '/src/assets/partner/Binance.png',
    '/src/assets/partner/Trustwallet.png',
    '/src/assets/partner/Kucoin.webp',
    '/src/assets/partner/Uniswap.png',
    '/src/assets/partner/Coinbase.png',
    // Add more partner logos
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