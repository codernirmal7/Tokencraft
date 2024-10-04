import React, { useState } from "react";
import { cn } from "./lib/utils";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
export default function Navbar({  }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0  w-full z-50  py-3 bg-transparent ${
           isOpen? "" : "bg-opacity-90"
        }`}
      >
        <div className="w-full max-w-[1200px] flex mx-auto justify-between min-[900px]:justify-around items-center px-5">
          <div>
            <a href="/" className=" text-2xl min-[900px]:text-3xl select-none font-extrabold font-protest">
              Token<span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">craft.</span>
            </a>
          </div>
          <nav className="min-[900px]:flex hidden">
            <ul className="flex gap-10">
              <li>
                <Link
                  to="/staking"
                  className="text-gray-300 hover:text-primary font-medium"
                >
                  Staking
                </Link>
              </li>
              <li>
                <Link
                  to="/earn-token"
                  className="text-gray-300 hover:text-primary font-medium"
                >
                  Earn token
                </Link>
              </li>

              <li>
                <Link
                  to="swap-token"
                  className="text-gray-300 hover:text-primary font-medium"
                >
                  Swap token
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-sm text-white font-bold py-2 px-2 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>{" "}
              Connect Wallet
            </button>

            <div
              className={`hamburger min-[900px]:hidden  ${
                isOpen ? "open scaleUp" : ""
              } bg-[#2f2f33] px-2 py-3`}
              onClick={toggleMenu}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </header>
      <NavbarMobile isOpen={isOpen} />
    </>
  );
}
