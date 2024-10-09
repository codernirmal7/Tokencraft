import React from "react";
import Button from "./Button";
import ClipPath from "../assets/svg/ClipPath";

export default function HowtoStake() {
  const features = [
    {
      id: "0",
      step: "1",
      title: "Connect Your Wallet",
      text: "First, ensure your MetaMask or other supported wallet is connected to TokenCraft. You’ll see a prompt to approve the connection.",
      button: {
        icon: (
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
          </>
        ),
        title: "Connect wallet",
      },
    },
    {
      id: "1",
      step: "2",
      title: "Select the Amount",
      text: "Choose the number of tokens you wish to stake. Ensure you have sufficient tokens in your wallet to cover both the staking amount and any transaction fees.",
      button: {
        icon: (
          <>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ffffff"
              width="30px"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 22v-7.1a7 7 0 0 0-2.052-4.95L14.998 8v6.587c0 .89-1.077 1.337-1.707.707L11.996 14c-.5-.5-1.701-.8-2.502 0-.8.8-.5 2 0 2.5l5.504 5.5"
                ></path>
                <path
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 2h2a2 2 0 0 1 2 2v2m-4-4c0 1.333.8 4 4 4m-4-4H9m6 4v6M5 12v2a2 2 0 0 0 2 2h2c0-1.333-.8-4-4-4zm0 0V6m4-4H7a2 2 0 0 0-2 2v2m4-4c0 1.333-.8 4-4 4"
                ></path>
                <circle
                  cx="10"
                  cy="9"
                  r="1"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  transform="rotate(90 10 9)"
                ></circle>
              </g>
            </svg>
          </>
        ),
        title: "Stake now",
      },
    },

    {
      id: "2",
      step: "3",
      title: "Stake Your Tokens",
      text: "Once you’ve selected the amount, confirm the transaction in your wallet. This will lock your tokens for the fixed staking period, during which you will earn rewards.",
    },
    {
      id: "3",
      step: "4",
      title: "Earning Rewards",
      text: "After the staking period begins, your staked tokens will start accumulating rewards based on the predefined APR (Annual Percentage Rate).",
    },

    {
      id: "4",
      step: "5",
      title: "Withdraw After Staking Period",
      text: "Once the fixed staking period ends, you can withdraw your staked tokens along with the rewards earned. You’ll need to confirm the transaction in your wallet again to complete the process.",
    },
  ];

  return (
    <>
      <div className="px-5">
        <h2 className="text-center pb-8 text-3xl lg:text-4xl font-bold mt-10">
          How to Stake
        </h2>
        <div className="relative flex md:flex-wrap flex-nowrap  justify-center gap-9  md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
          {features.map(({ id, step, title, text, button }) => (
            <div
              key={id}
              className="relative z-2 md:px-10 px-5 rounded-lg md:pb-10 pb-5 flex-40 g7 border-2 border-primary/[0.3]"
              style={{ clipPath: "url(#box)" }}
            >
              <div className="w-full flex justify-start items-start">
                <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                  <div className="w-0.5 h-16 bg-s3" />
                  <span className="h-14 w-14 flex justify-center items-center text-3xl border-2 border-primary rounded-full">
                    {step}
                  </span>
                </div>
              </div>

              <h2 className="max-w-400 mb-3 h3 text-primary text-2xl font-bold max-md:mb-6 max-md:h5">
                {title}
              </h2>
              <p className="mb-5 text-gray-300 max-md:mb-8 max-w-sm">{text}</p>
              {button && (
                <Button
                  children={
                    <>
                      {button.icon}
                      {button.title}
                    </>
                  }
                />
              )}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
