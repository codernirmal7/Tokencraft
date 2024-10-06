import React, { useState } from 'react'
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import PrivacyPolicy from './Modals/PrivacyPolicy';
import TermsofUse from './Modals/TermsofUse';

export default function Footer() {
     const socials = [
        {
          id: "0",
          icon: <FaXTwitter size={25}/>,
          url: "https://x.com/codernirmal7",
        },
      
        {
          id: "1",
          icon: <FaGithub size={25}/>,
          url: "https://github.com/codernirmal7",
        },
        {
          id: "2",
          icon: <FaTelegram size={25}/>,
          url: "https://t.me/pixelvirtuos",
        },
      ];

    const [isOpenPrivacyPolicy , setIsOpenPrivacyPolicy] = useState(false);
    const [isOpenTermsofUse , setIsOpenTermsofUse] = useState(false);

  return (
    <div className="py-10 border-t border-primary/[0.2]">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, Tokencraft</p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p onClick={()=> setIsOpenPrivacyPolicy(true)} className="legal-after relative cursor-pointer mr-9 text-p5 transition-all duration-500 hover:text-primary">
              Privacy Policy
            </p>
            <p onClick={()=> setIsOpenTermsofUse(true)} className="text-p5 cursor-pointer transition-all duration-500 hover:text-primary">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon }) => (
              <li key={id}>
                <a href={url} target='_blank' className="social-icon">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
         <PrivacyPolicy setIsOpenPrivacyPolicy={setIsOpenPrivacyPolicy} isOpenPrivacyPolicy={isOpenPrivacyPolicy}/>
         <TermsofUse isOpenTermsofUse={isOpenTermsofUse} setIsOpenTermsofUse={setIsOpenTermsofUse}/>
      </div>
  )
}