import React from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NavbarMobile({ isOpen }) {
  return (
    <>
      <nav
        className={`w-[300px] flex px-5 flex-col fixed top-0 z-[60]  ${
          isOpen ? "" : "-translate-x-full"
        } transition-all bg-[#05091D]/[0.9]  backdrop-blur-[2px] h-screen py-5 border-r border-primary/[0.2]`}
      >
         <div>
            <a href="/" className=" text-2xl min-[900px]:text-3xl select-none font-extrabold font-protest">
              Token<span className="bg-gradient-primary text-transparent bg-clip-text">craft.</span>
            </a>
          </div>
        <ul className="flex flex-col gap-7 mt-8">
          <li>
            <Link
              to="/staking"
              className="text-gray-300 hover:text-primary font-medium text-base"
            >
              Staking
            </Link>
          </li>
          <li>
            <Link
              to="/earn-token"
              className="text-gray-300 hover:text-primary font-medium text-base"
            >
              Earn token
            </Link>
          </li>

          <li>
            <Link
              to="/swap-token"
              className="text-gray-300 hover:text-primary font-medium text-base"
            >
              Swap token
            </Link>
          </li>
          <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary font-medium text-base"
                >
                  Contact
                </Link>
              </li>
        </ul>
        <div className="border-b border-white/[0.2] my-7"></div>
        <div className="flex gap-3">
        <a
            target="_blank"
            href="https://x.com/codernirmal7"
            className="bg-gradient-primary hover:bg-gradient-hover p-2 rounded-lg"
          >
             <FaXTwitter size={25}/>
          </a>
          <a
            target="_blank"
            href="https://github.com/codernirmal7"
            className="bg-gradient-primary hover:bg-gradient-hover p-2 rounded-lg"
          >
           <FaGithub size={25}/>
          </a>
          <a
            target="_blank"
            href="https://t.me/pixelvirtuos"
            className="bg-gradient-primary hover:bg-gradient-hover p-2 rounded-lg"
          >
           <FaTelegram size={25}/>
          </a>

        </div>
      </nav>
    </>
  );
}
