import React from "react";
import Button from "../components/Button";
import {FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="w-full h-full mt-[100px] pb-14 md:py-6 md:pb-14">
        <div className="max-w-[1200px] mx-auto w-full h-full flex justify-center px-3">
          <div className="max-w-xl w-full bg-s2 p-10 flex flex-col rounded-7xl">
            <div className="flex items-center gap-3">
              <span className="text-lg text-primary">Contact support </span>
              <div className="w-10 h-[2px] bg-primary"></div>
            </div>
            <h1 className="text-4xl font-bold mt-2">Get in touch!</h1>
            <form className="mt-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-t-gray-400 border-b-slate-400 rounded-sm text-white outline-none focus:border-primary bg-transparent "
                  id="firstName"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-t-gray-400 border-b-slate-400 rounded-sm text-white outline-none focus:border-primary bg-transparent "
                  id="lastName"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="text"
                  className="w-full p-3 border-2 border-t-gray-400 border-b-slate-400 rounded-sm text-white outline-none focus:border-primary bg-transparent "
                  id="emailAddress"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  className="w-full p-3 border-2 border-t-gray-400 border-b-slate-400 rounded-sm text-white outline-none focus:border-primary bg-transparent max-h-[10rem]"
                  id="message"
                  required
                />
              </div>

              <Button
                children={
                  <>
                    Send
                    <FaTelegramPlane className="group-hover/btn:translate-x-[3px] transition-all" />
                  </>
                }
                className="mt-10 w-full justify-center text-xl"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
