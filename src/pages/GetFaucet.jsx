import React, { useState } from "react";
import ProcessingAlert from "../components/Alerts/ProcessingAlert";
import SuccessAlert from "../components/Alerts/SuccessAlert";
import ErrorAlert from "../components/Alerts/ErrorAlert";
import { useSelector } from "react-redux";
import { supportChaindId } from "../SupportChainId";
import { motion } from "framer-motion";
import { FadeUp } from "../components/animation/FadUp";

export default function GetFaucet() {
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
  const [selectedOption, setSelectedOption] = useState("craftToken");

  const web3ContentInitialState = useSelector((state) => state.web3Content);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };

  async function getFaucet(e) {
    e.preventDefault();
    try {
      let transaction;

      // Check if the selectedOption is valid
      if (selectedOption === "craftToken") {
        transaction =
          await web3ContentInitialState.accountInfo.getFaucetContract.claimCraftFaucet();
      } else if (selectedOption === "dragonCraftToken") {
        transaction =
          await web3ContentInitialState.accountInfo.getFaucetContract.claimDragonCraftFaucet();
      } else {
        throw new Error("Invalid token selected");
      }

      // Show loading alert
      setIsOpenLoadingAlert({
        show: true,
        message: "Transaction is pending...",
      });

      // Wait for transaction confirmation
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setIsOpenLoadingAlert({ show: false, message: "" });
        setIsOpenSuccessAlert({
          show: true,
          message: "Transaction completed.",
        });
        setTimeout(() => {
          setIsOpenSuccessAlert({ show: false, message: "" });
        }, 3000); // Consider increasing the timeout for better UX
      }
    } catch (error) {
      setIsOpenLoadingAlert({
        show: false,
        message: "",
      });

      // Handle specific errors
      if (error.code === "TRANSACTION_REPLACED") {
        console.error("Transaction replaced:", error);
      } else if (error.reason) {
        setIsOpenErrorAlert({
          show: true,
          message: error.reason,
        });
        setTimeout(() => {
          setIsOpenErrorAlert({ show: false, message: "" });
        }, 3000);
      } else if (error.data && error.data.message) {
        console.error("Error message:", error.data.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  }

  return (
    <>
      <section
        id="herosection"
        className="w-full relative flex justify-center items-center pt-6 pb-10 overflow-hidden mt-[100px]"
      >
        <div className="max-w-[1200px] w-full mx-auto px-5 ">
          <motion.div
            className="max-w-2xl w-full md:p-16 rounded-7xl mx-auto bg-s2"
            variants={FadeUp(0.3)}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl font-bold">Ethereum Sepolia Faucet</h1>
            <span className="text-gray-300 text-lg">
              Get free Sepolia ETH sent directly to your wallet.
            </span>
            <form className="mt-5 flex flex-col gap-5" onSubmit={getFaucet}>
              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="tokensList">
                  Select Token
                </label>
                <select
                  id="tokensList"
                  className="bg-s3 p-3 rounded-lg"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="craftToken" className="p-3 ">
                    Craft Token
                  </option>
                  <option value="dragonCraftToken" className="p-3 ">
                    Dragon Craft Token
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="tokensList">
                  Wallet Address
                </label>
                <input
                  type="text"
                  className="p-2 rounded-lg bg-s3 outline-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-36 bg-gradient-primary hover:bg-gradient-hover p-3 rounded-lg disabled:bg-gradient-to-tl disabled:bg-primary/[0.7] disabled:cursor-not-allowed"
                disabled={
                  web3ContentInitialState.isWalletConnected &&
                  web3ContentInitialState.accountInfo.chainId == supportChaindId
                    ? false
                    : true
                }
              >
                Receive tokens
              </button>
            </form>
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
