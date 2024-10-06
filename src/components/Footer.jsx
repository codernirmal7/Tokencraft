import React from 'react'
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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

  return (
    <div className="py-10 border-t border-primary/[0.2]">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, Tokencraft</p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
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
      </div>
  )
}
