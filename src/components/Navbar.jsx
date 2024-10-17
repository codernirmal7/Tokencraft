import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  connectWallet,
} from "../redux/slices/web3Content";
import { FaCircleUser } from "react-icons/fa6";
import { supportChaindId } from "../SupportChainId";
export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const dispatch = useDispatch();
  const web3ContentInitialState = useSelector((state) => state.web3Content);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


 


  useEffect(() => {

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full py-4  transition-all duration-500 max-lg:py-4 border-b border-white/[0.1] ${
          isOpen ? "" : "bg-opacity-90"
        } ${hasScrolled ? "pyI-2  bg-gray-900/[0.1] backdrop-blur-[8px]" : ""}`}
      >
        <div className="w-full max-w-[1200px] flex mx-auto justify-between min-[900px]:justify-between items-center px-5 lg:px-10">
          <div>
            <a
              href="/"
              className=" text-2xl min-[900px]:text-3xl select-none font-extrabold font-protest"
            >
              Token
              <span className="bg-gradient-primary text-transparent bg-clip-text">
                craft.
              </span>
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
                  to="/swap-token"
                  className="text-gray-300 hover:text-primary font-medium"
                >
                  Swap token
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {web3ContentInitialState.isWalletConnected ? (
              web3ContentInitialState.accountInfo?.chainId == supportChaindId ? (
                <div className="flex gap-3 items-center cursor-pointer py-2 px-1">
                <FaCircleUser size={30} />
                <span className="">
                  {web3ContentInitialState.accountInfo.selectedAccount.slice(
                    0,
                    6
                  )}
                  ...
                  {web3ContentInitialState.accountInfo.selectedAccount.slice(
                    -4
                  )}
                </span>
              </div>
              )
              :
              <span className="text-xl py-2">Unsupported Chain</span>
            ) : (
              <>
                <Button
                  onClick={() => dispatch(connectWallet())}
                  children={
                    <>
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
                      </svg>
                      Connect Wallet
                    </>
                  }
                />
              </>
            )}
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
