import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProcessingAlert from "./Alerts/ProcessingAlert";
import SuccessAlert from "./Alerts/SuccessAlert";
import ErrorAlert from "./Alerts/ErrorAlert";
import {motion} from "framer-motion"
import { FadeUp } from "./animation/FadUp";
import { supportChaindId } from "../SupportChainId";

export default function BoxStaking({
  selectedToken,
  setSelectedToken,
  userStakedInfo,
}) {
  const [selectedDurationDetails, setSelectedDurationDetails] = useState({
    duration: 7,
    apy: 10,
  });
  const web3ContentInitialState = useSelector((state) => state.web3Content);
  const [userTokenInfo, setUserTokenInfo] = useState("0");
  const [tokenApprovalInputValue, setTokenApprovalInputValue] = useState(0);
  const [stakeTokenInputValue, setStakeTokenInputValue] = useState(0);
  const [isOpenLoadingAlert, setIsOpenLoadingAlert] = useState({
    show: false,
    message: "",
  });
  const [isOpenSuccessAlert, setIsOpenSuccessAlert] = useState({
    show: false,
    message: "",
  });
  const [isOpenErrorAlert, setIsOpenErrorAlert] = useState({
    show: false,
    message: "",
  });

  useEffect(() => {
    const getUserToken = async () => {
      try {
        let data;
        if (selectedToken === "Craft") {
          data =
            await web3ContentInitialState.accountInfo.craftTokenContract.balanceOf(
              web3ContentInitialState.accountInfo.selectedAccount
            );
        } else {
          if (selectedToken === "Dragon Craft") {
            data =
              await web3ContentInitialState.accountInfo.dragonCraftTokenContract.balanceOf(
                web3ContentInitialState.accountInfo.selectedAccount
              );
          } else {
            data = null;
          }
        }
        const tokenInEthers = ethers.formatEther(data);
        setUserTokenInfo(tokenInEthers);
      } catch (error) {
        console.log("Error while getting user available staked token", error);
      }
    };

    web3ContentInitialState.accountInfo.craftTokenContract && getUserToken();
  }, [
    web3ContentInitialState.accountInfo?.craftTokenContract || null,
    web3ContentInitialState.accountInfo?.selectedAccount || null,
    selectedToken,
  ]);

 

  const stakeToken = async () => {
    if(!stakeTokenInputValue > 0){
      return;
    }
    if (stakeTokenInputValue > parseInt(userTokenInfo)) {
       setIsOpenErrorAlert({
        show: true,
        message: "Insufficient token",
      });
      setTimeout(() => {
        setIsOpenErrorAlert({
          show: false,
          message: "",
        });
      }, 2000);
      return;
    }
    const amountToSend = ethers.parseUnits(stakeTokenInputValue.toString(), 18);
    try {
      let allowance;
      if (selectedToken === "Craft") {
        allowance =
          await web3ContentInitialState.accountInfo.craftTokenContract.allowance(
            web3ContentInitialState.accountInfo.selectedAccount,
            web3ContentInitialState.accountInfo.craftTokenStakingContract.target
          );
      } else {
        if (selectedToken === "Dragon Craft") {
          allowance =
            await web3ContentInitialState.accountInfo.dragonCraftTokenContract.allowance(
              web3ContentInitialState.accountInfo.selectedAccount,
              web3ContentInitialState.accountInfo
                .dragonCraftTokenStakingContract.target
            );
        }
      }

      if (allowance < amountToSend) {
        let approveTransaction;
        if (selectedToken === "Craft") {
          approveTransaction =
            await web3ContentInitialState.accountInfo.craftTokenContract.approve(
              web3ContentInitialState.accountInfo.craftTokenStakingContract
                .target,
              amountToSend
            );
        } else {
          if (selectedToken === "Dragon Craft") {
            approveTransaction =
              await web3ContentInitialState.accountInfo.dragonCraftTokenContract.approve(
                web3ContentInitialState.accountInfo
                  .dragonCraftTokenStakingContract.target,
                amountToSend
              );
          }
        }

        setIsOpenLoadingAlert({ show: true, message: "Approving tokens..." });
        const approveWait = await approveTransaction.wait();

        if (approveWait.status === 1) {
          setIsOpenLoadingAlert({ show: false, message: "" });
          setIsOpenSuccessAlert({
            show: true,
            message: "Token approved successfully.",
          });
          setTimeout(() => {
            setIsOpenSuccessAlert({ show: false, message: "" });
          }, 2000);

          // Proceed with the swap
          let transaction;
          if (selectedToken === "Craft") {
            transaction =
              await web3ContentInitialState.accountInfo.craftTokenStakingContract.stake(
                amountToSend,
                selectedDurationDetails.duration * 86400
              );
          } else {
            if (selectedToken === "Dragon Craft") {
              transaction =
                await web3ContentInitialState.accountInfo.dragonCraftTokenStakingContract.stake(
                  amountToSend,
                  selectedDurationDetails.duration * 86400
                );
            } else {
              transaction = null;
            }
          }
          setIsOpenLoadingAlert({
            show: true,
            message: "Transaction is pending...",
          });
          const receipt = await transaction.wait();
          if (receipt.status == 1) {
            setIsOpenLoadingAlert({
              show: false,
              message: "",
            });
            setIsOpenSuccessAlert({
              show: true,
              message: "Transaction completed.",
            });
            setTimeout(() => {
              setIsOpenSuccessAlert({
                show: false,
                message: "",
              });
            }, 2000);
          }
        }
      } else {
        let transaction;
        if (selectedToken === "Craft") {
          transaction =
            await web3ContentInitialState.accountInfo.craftTokenStakingContract.stake(
              amountToSend,
              selectedDurationDetails.duration * 86400
            );
        } else {
          if (selectedToken === "Dragon Craft") {
            transaction =
              await web3ContentInitialState.accountInfo.dragonCraftTokenStakingContract.stake(
                amountToSend,
                selectedDurationDetails.duration * 86400
              );
          } else {
            transaction = null;
          }
        }
        setIsOpenLoadingAlert({
          show: true,
          message: "Transaction is pending...",
        });
        const receipt = await transaction.wait();
        if (receipt.status == 1) {
          setIsOpenLoadingAlert({
            show: false,
            message: "",
          });
          setIsOpenSuccessAlert({
            show: true,
            message: "Transaction completed.",
          });
          setTimeout(() => {
            setIsOpenSuccessAlert({
              show: false,
              message: "",
            });
          }, 2000);
        }
      }
    } catch (error) {
      setIsOpenLoadingAlert({
        show: false,
        message: "",
      });
      if (error.code === "TRANSACTION_REPLACED") {
        console.error("Transaction replaced:", error);
      } else if (error.reason) {
        setIsOpenErrorAlert({
          show: true,
          message: error.reason,
        });
        setTimeout(() => {
          setIsOpenErrorAlert({
            show: false,
            message: "",
          });
        }, 2000);
      } else if (error.data && error.data.message) {
        console.error("Error message:", error.data.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  const unStakeToken = async () => {
    try {
      let transaction;
      if (selectedToken === "Craft") {
        transaction =
          await web3ContentInitialState.accountInfo.craftTokenStakingContract.unStake();
      } else {
        if (selectedToken === "Dragon Craft") {
          transaction =
            await web3ContentInitialState.accountInfo.dragonCraftTokenStakingContract.unStake();
        } else {
          transaction = null;
        }
      }
      setIsOpenLoadingAlert({
        show: true,
        message: "Transaction is pending...",
      });
      const receipt = await transaction.wait();
      if (receipt.status == 1) {
        setIsOpenLoadingAlert({
          show: false,
          message: "",
        });
        setIsOpenSuccessAlert({
          show: true,
          message: "Transaction completed.",
        });
        setTimeout(() => {
          setIsOpenSuccessAlert({
            show: false,
            message: "",
          });
        }, 2000);
      }
    } catch (error) {
      setIsOpenLoadingAlert({
        show: false,
        message: "",
      });
      if (error.code === "TRANSACTION_REPLACED") {
        console.error("Transaction replaced:", error);
      } else if (error.reason) {
        setIsOpenErrorAlert({
          show: true,
          message: error.reason,
        });
        setTimeout(() => {
          setIsOpenErrorAlert({
            show: false,
            message: "",
          });
        }, 2000);
      } else if (error.data && error.data.message) {
        console.error("Error message:", error.data.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };


  function onChangeStakeTokenInputValue(e) {
      setStakeTokenInputValue(e.target.value)
  }

  const calculateReward = () => {
    if (stakeTokenInputValue == 0) {
      return 0;
    }
    const stakeValue = parseInt(stakeTokenInputValue);
    const apr = selectedDurationDetails.apy;
    const duration = selectedDurationDetails.duration * 86400;
    const oneYearInSeconds = 31536000;

    return (stakeValue * apr * duration) / (oneYearInSeconds * 100);
  };

  return (
    <>
      <motion.div  
       variants={FadeUp(0.3)}
       initial="initial"
       animate="animate" 
      >
        <div className="flex gap-3">
          <button
            className={`${
              selectedToken == "Craft" ? "bg-s2" : ""
            } p-4 rounded-t-xl`}
            onClick={() => setSelectedToken("Craft")}
          >
            Craft Token
          </button>
          <button
            className={`${
              selectedToken == "Dragon Craft" ? "bg-s2" : ""
            } p-4 rounded-t-xl`}
            onClick={() => setSelectedToken("Dragon Craft")}
          >
            Dragon Craft Token
          </button>
        </div>
        <div className="bg-s2 w-full rounded-b-7xl rounded-tr-7xl p-8">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Stake {selectedToken} Token
          </h1>
          <div className="py-7 grid max-[500px]:grid-cols-2 grid-cols-3 lg:grid-cols-4 gap-4 font-bold">
            <button
              className={`${
                selectedDurationDetails.duration == 7
                  ? "bg-primary"
                  : "bg-primary/[0.2]"
              } text-white py-[12px] px-[24px] rounded-lg transition-all`}
              onClick={() =>
                setSelectedDurationDetails({ duration: 7, apy: 10 })
              }
            >
              7 Days
            </button>
            <button
              className={`${
                selectedDurationDetails.duration == 30
                  ? "bg-primary"
                  : "bg-primary/[0.2]"
              } text-white py-[12px] px-[24px] rounded-lg transition-all`}
              onClick={() =>
                setSelectedDurationDetails({ duration: 30, apy: 20 })
              }
            >
              30 Days
            </button>
            <button
              className={`${
                selectedDurationDetails.duration == 365
                  ? "bg-primary"
                  : "bg-primary/[0.2]"
              } text-white py-[12px] px-[24px] rounded-lg transition-all`}
              onClick={() =>
                setSelectedDurationDetails({ duration: 365, apy: 50 })
              }
            >
              365 Days
            </button>
          </div>
          <div className="flex gap-4 items-center mt-5 text-[#9CA0D2] ">
            <div>
              <ul className="w-[100%] flex flex-col gap-3 text-[1.1rem] font-bold">
                <li>Lock duration: {selectedDurationDetails.duration} days</li>
                <li>Extends lock on registration: Yes</li>
                <li>Status: Unlocked</li>
                <li>Early unstake: Not Allowed</li>
              </ul>
            </div>
            <div className="w-[50%] flex justify-end items-end flex-col ">
              <div>
                <h2 className="text-5xl">{selectedDurationDetails.apy}%</h2>
                <span>APY*</span>
              </div>
            </div>
          </div>
          <div className="w-full mt-7 flex flex-col gap-5">
            <span className="text-[#9CA0D2] font-bold text-[1.1rem]">
              Balance : {parseInt(userTokenInfo)}
            </span>

            <div>
              <div className="flex gap-3">
                <div className="w-full relative rounded-lg">
                  <input
                    type="number"
                    min={1}
                    className="bg-s1 w-full bg-transparent border-2 border-gray-400 outline-none rounded-lg px-4 py-2 focus:border-primary"
                    placeholder="0.0"
                    value={stakeTokenInputValue}
                    onChange={onChangeStakeTokenInputValue}
                  />
                  <button
                    className="absolute right-0 w-14 h-11 rounded-lg bg-red-700"
                    onClick={() => setStakeTokenInputValue(userTokenInfo)}
                  >
                    max
                  </button>
                </div>
                <button
                  className="bg-gradient-primary hover:bg-gradient-hover text-white py-3 w-44 rounded-lg cursor-pointer z-10 disabled:bg-gradient-to-tl disabled:bg-primary/[0.7] disabled:cursor-not-allowed"
                  onClick={stakeToken}
                  disabled={
                    web3ContentInitialState.isWalletConnected && web3ContentInitialState.accountInfo.chainId == supportChaindId  ? false : true
                  }
                >
                  Stake
                </button>
              </div>

              <span className="text-gray-300">
                You will get {calculateReward()}
              </span>
            </div>

            <div className="flex gap-3">
              <div className="w-full relative h-[1.20rem">
                <input
                  type="text"
                  className="bg-gray-700 w-full bg-transparent border-2 border-gray-400 outline-none rounded-lg px-4 py-2 focus:border-primary "
                  disabled
                  value={userStakedInfo.amount}
                />
              </div>
              <button
                className="bg-gradient-primary hover:bg-gradient-hover text-white w-44 py-3  rounded-lg cursor-pointer z-10 disabled:bg-gradient-to-tl disabled:bg-primary/[0.7] disabled:cursor-not-allowed"
                onClick={unStakeToken}
                disabled={
                  web3ContentInitialState.isWalletConnected && web3ContentInitialState.accountInfo.chainId == supportChaindId  ? false : true
                }
              >
                UnStake
              </button>
            </div>
          </div>

          <p className="mt-5 text-[#9CA0D2]">
            TokenCraft offers fixed-period staking. By staking your tokens, you
            agree to lock them for the full period. Early withdrawal may not be
            permitted, and any staking rewards will be subject to the platform’s
            terms.
          </p>
          <h3 className="text-xl mt-7 text-[#9CA0D2] font-bold">
            *APY is fixed
          </h3>
        </div>

       
      </motion.div>
      <ProcessingAlert
          message={isOpenLoadingAlert.message}
          isOpenLoadingAlert={isOpenLoadingAlert.show}
        />
        <SuccessAlert
          message={isOpenSuccessAlert.message}
          isOpenSuccessAlert={isOpenSuccessAlert.show}
        />
        <ErrorAlert
          message={isOpenErrorAlert.message}
          isOpenErrorAlert={isOpenErrorAlert.show}
        />
    </>
  );
}
