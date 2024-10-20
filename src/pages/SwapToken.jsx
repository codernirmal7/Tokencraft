import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { FaCaretDown, FaExchangeAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import ProcessingAlert from "../components/Alerts/ProcessingAlert";
import SuccessAlert from "../components/Alerts/SuccessAlert";
import ErrorAlert from "../components/Alerts/ErrorAlert";
import {motion} from "framer-motion"
import { FadeUp } from "../components/animation/FadUp";
import { supportChaindId } from "../SupportChainId";

export default function SwapToken() {
  const [selectedToken, setSelectedToken] = useState("Craft Token");
  const [isShowTokenList, setIsShowTokenList] = useState(false);
  const [userTokenInfo, setUserTokenInfo] = useState("0");
  const web3ContentInitialState = useSelector((state) => state.web3Content);
  const [tokenInputValue, setTokenInputValue] = useState(1);
  const [usdtInputValue, setUsdtInputValue] = useState(1);
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
        if (selectedToken === "Craft Token") {
          data =
            await web3ContentInitialState.accountInfo.craftTokenContract.balanceOf(
              web3ContentInitialState.accountInfo.selectedAccount
            );
        } else {
          if (selectedToken === "Dragon Craft Token") {
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
        console.log("An error occurred : ", error);
      }
    };

    web3ContentInitialState.accountInfo.craftTokenContract && getUserToken();
  }, [
    web3ContentInitialState.accountInfo?.craftTokenContract || null,
    web3ContentInitialState.accountInfo?.dragonCraftTokenContract || null,
    web3ContentInitialState.accountInfo?.selectedAccount || null,
    selectedToken,
  ]);

  async function swapToken() {
    const tokenAmount = ethers.parseUnits(tokenInputValue.toString(), 18);

    try {
      let allowance;
      if (selectedToken === "Craft Token") {
        allowance =
          await web3ContentInitialState.accountInfo.craftTokenContract.allowance(
            web3ContentInitialState.accountInfo.selectedAccount,
            web3ContentInitialState.accountInfo.tokenSwapContract.target
          );
      } else {
        if (selectedToken === "Dragon Craft Token") {
          allowance =
            await web3ContentInitialState.accountInfo.dragonCraftTokenContract.allowance(
              web3ContentInitialState.accountInfo.selectedAccount,
              web3ContentInitialState.accountInfo.tokenSwapContract.target
            );
        }
      }

      if (allowance < tokenAmount) {
        let approveTransaction;
        if (selectedToken === "Craft Token") {
          approveTransaction =
            await web3ContentInitialState.accountInfo.craftTokenContract.approve(
              web3ContentInitialState.accountInfo.tokenSwapContract.target,
              tokenAmount
            );
        } else {
          if (selectedToken === "Dragon Craft Token") {
            approveTransaction =
              await web3ContentInitialState.accountInfo.dragonCraftTokenContract.approve(
                web3ContentInitialState.accountInfo.tokenSwapContract.target,
                tokenAmount
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
          if (selectedToken === "Craft Token") {
            transaction =
              await web3ContentInitialState.accountInfo.tokenSwapContract.swapCraftToUsdtWithPermit(
                tokenAmount
              );
          } else {
            if (selectedToken === "Dragon Craft Token") {
              transaction =
                await web3ContentInitialState.accountInfo.tokenSwapContract.swapDragonToUsdtWithPermit(
                  tokenAmount
                );
            }
          }

          setIsOpenLoadingAlert({
            show: true,
            message: "Transaction is pending...",
          });
          const receipt = await transaction.wait();
          if (receipt.status === 1) {
            setIsOpenLoadingAlert({ show: false, message: "" });
            setIsOpenSuccessAlert({
              show: true,
              message: "Transaction completed.",
            });
            setTimeout(() => {
              setIsOpenSuccessAlert({ show: false, message: "" });
            }, 2000);
          }
        }
      } else {
        // Continue with the swap if allowance is sufficient
        let transaction;
        if (selectedToken === "Craft Token") {
          transaction =
            await web3ContentInitialState.accountInfo.tokenSwapContract.swapCraftToUsdtWithPermit(
              tokenAmount
            );
        } else {
          if (selectedToken === "Dragon Craft Token") {
            transaction =
              await web3ContentInitialState.accountInfo.tokenSwapContract.swapDragonToUsdtWithPermit(
                tokenAmount
              );
          }
        }

        setIsOpenLoadingAlert({
          show: true,
          message: "Transaction is pending...",
        });
        const receipt = await transaction.wait();
        if (receipt.status === 1) {
          setIsOpenLoadingAlert({ show: false, message: "" });
          setIsOpenSuccessAlert({
            show: true,
            message: "Transaction completed.",
          });
          setTimeout(() => {
            setIsOpenSuccessAlert({ show: false, message: "" });
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
  }

  function onChangeStakeTokenInputValue(e) {
    setTokenInputValue(e.target.value);
    if (e.target.value != "") {
      setUsdtInputValue(parseInt(e.target.value));
    } else {
      setUsdtInputValue(0);
    }
  }

  return (
    <>
      <section className="w-full mt-[100px] pb-14 md:py-6 md:pb-14">
        <div className="max-w-[1200px] mx-auto w-full  flex justify-center px-3">
          <motion.div 
          className="max-w-xl w-full bg-s2 p-10 flex flex-col rounded-7xl"
           variants={FadeUp(0.3)}
           initial="initial"
           animate="animate" 
          >
            <h1 className="text-2xl md:text-3xl font-bold mt-2">Swap Token</h1>
            <div className="mt-7">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400">From</span>
                  <div
                    className="flex items-center cursor-pointer relative"
                    onClick={() => setIsShowTokenList(!isShowTokenList)}
                  >
                    <span className="text-lg">{selectedToken}</span>
                    <FaCaretDown size={20} />
                    <div
                      className={`absolute max-w-sm w-[10rem] rounded-xl top-8 bg-s3 z-20 p-2 transition-all ${
                        isShowTokenList ? "scale-100" : "scale-0"
                      }`}
                    >
                      <ul className="flex flex-col gap-2">
                        <li
                          className={`${
                            selectedToken === "Craft Token"
                              ? "bg-s4"
                              : "hover:bg-s4/[0.5]"
                          }  p-2 rounded-md`}
                          onClick={() => setSelectedToken("Craft Token")}
                        >
                          Craft Token
                        </li>
                        <li
                          className={`${
                            selectedToken === "Dragon Craft Token"
                              ? "bg-s4"
                              : "hover:bg-s4/[0.5]"
                          }  p-2 rounded-md`}
                          onClick={() => setSelectedToken("Dragon Craft Token")}
                        >
                          Dragon Craft Token
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 max-w-[14rem]">
                    Token :- {Number(userTokenInfo)}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="number"
                  className="w-full bg-s1 p-3 rounded-lg border-none focus:outline-primary"
                  value={tokenInputValue}
                  onChange={onChangeStakeTokenInputValue}
                  min={1}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-3">
              <FaExchangeAlt
                className="-rotate-90 transition-all hover:scale-110 cursor-pointer bg-primary/[0.1] hover:bg-primary/[0.2] p-3 rounded-full"
                size={45}
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400">To</span>
                  <div className="flex items-center cursor-pointer">
                    <span className="text-lg">USDT</span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="number"
                  className="w-full disabled:bg-s1 p-3 rounded-lg border-none focus:outline-primary"
                  disabled
                  value={usdtInputValue}
                />
              </div>
            </div>

            <Button
              children={<>Swap</>}
              className="mt-10 w-full justify-center text-lg disabled:bg-gradient-to-tl disabled:bg-primary/[0.7] disabled:cursor-not-allowed"
              onClick={swapToken}
              disabled={
                web3ContentInitialState.isWalletConnected && web3ContentInitialState.accountInfo.chainId == supportChaindId  ? false : true
              }
            />
          </motion.div>
        </div>
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
      </section>
    </>
  );
}
