import React, { useState } from "react";
import Button from "../components/Button";
import { FaCaretDown, FaExchangeAlt } from "react-icons/fa";

export default function SwapToken() {
  const [selectedToken, setSelectedToken] = useState({
    from: "Craft",
    to: "Dragon Craft",
  });
  return (
    <>
      <section className="w-full mt-[100px] pb-14 md:py-6 md:pb-14">
        <div className="max-w-[1200px] mx-auto w-full  flex justify-center px-3">
          <div className="max-w-xl w-full bg-s2 p-10 flex flex-col rounded-7xl">
            <h1 className="text-2xl md:text-3xl font-bold mt-2">Swap Token</h1>

            <div className="mt-7">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400">From</span>
                  <div className="flex items-center cursor-pointer">
                    <span className="text-lg">{selectedToken.from}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400">Current Token :- 4000</span>
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="number"
                  className="w-full bg-s1 p-3 rounded-lg border-none focus:outline-primary"
                  min={1}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-3">
              <FaExchangeAlt
                className="-rotate-90 transition-all hover:scale-110 cursor-pointer bg-primary/[0.1] hover:bg-primary/[0.2] p-3 rounded-full"
                size={45}
                onClick={()=> setSelectedToken((prev)=>{
                  return {
                    from: prev.to,
                    to: prev.from
                  }
                })}
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400">To</span>
                  <div className="flex items-center cursor-pointer">
                    <span className="text-lg">{selectedToken.to}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400">Current Token :- 50</span>
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="number"
                  className="w-full bg-s1 p-3 rounded-lg border-none focus:outline-primary"
                  min={1}
                />
              </div>
            </div>

            <Button
              children={<>Swap</>}
              className="mt-10 w-full justify-center text-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
