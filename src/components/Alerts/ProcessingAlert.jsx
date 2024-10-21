import React from "react";

export default function ProcessingAlert({ message, isOpenLoadingAlert }) {
  return (
    <>
      <div
        className={`flex items-center p-4 mb-4 text-base rounded-lg bg-gray-800 text-blue-400 fixed bottom-0 z-50 left-2 z-50 transition-all  ${
          isOpenLoadingAlert ? "scale-100" : "scale-0"
        }`}
        role="alert"
      >
          <div className="loader"></div>
        <div>
        
          {message}
        </div>
      </div>
    </>
  );
}
