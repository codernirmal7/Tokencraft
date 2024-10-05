import clsx from "clsx";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);

  const active = activeId === item.id;

  const onOpen = () => {
    if (active) {
      setActiveId(null);
    } else {
      setActiveId(item.id);
    }
  };
  return (
    <div
      className={`relative z-2 mb-2 md:mb-7 p-2 rounded-3xl transition-colors duration-500 ${
        active && "g7"
      }`}
    >
      {active && (
        <div className="absolute top-0 left-5 rounded-md w-[8rem] bg-primary h-1 transition-all"></div>
      )}
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={onOpen}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              " text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 lg:text-xl max-md:items-center",
              active && "text-p1"
            )}
          >
            {item.question}
          </div>
        </div>

        <div
          className={`relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            ${active && "before:bg-p1 after:rotate-0 after:bg-p1"}`}
        >
          <div className="g4 size-11/12 rounded-full shadow-300 flex justify-center items-center">
             <FaPlus/>
          </div>
        </div>
      </div>

      <SlideDown>
        {activeId === item.id && (
          <div className="max-w-sm px-7 py-3.5 text-gray-300">{item.answer}</div>
        )}
      </SlideDown>
    </div>
  );
};
export default FaqItem;
