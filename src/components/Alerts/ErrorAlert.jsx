import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";

export default function ErrorAlert({ message, isOpenErrorAlert }) {
  return (
    <>
      <div
        className={`flex items-center p-4 mb-4 text-base rounded-lg bg-gray-800 text-red-400 fixed bottom-0 left-2 z-50 transition-all ${
          isOpenErrorAlert ? "scale-100" : "scale-0"
        }`}
        role="alert"
      >
         <FaCircleExclamation className="mr-2" />
        <span className="sr-only">Info</span>
        <div>{message}</div>
      </div>
    </>
  );
}
