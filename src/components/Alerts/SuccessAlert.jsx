import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function SuccessAlert({ message, isOpenSuccessAlert }) {
  return (
    <>
      <div
        className={`flex items-center p-4 mb-4 text-base rounded-lg bg-gray-800 text-green-400 fixed bottom-0 left-2 transition-all ${
          isOpenSuccessAlert ? "scale-100" : "scale-0"
        }`}
        role="alert"
      >
        <FaCircleCheck className="mr-2"/>
        <div>{message}</div>
      </div>
    </>
  );
}
