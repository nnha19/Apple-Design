import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface IProps {
  question: string;
  children: React.ReactNode;
}

const Accordion = ({ question, children }: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="border-b-[1px] border-[#00000045] w-full overflow-hidden p-4 "
      style={{
        height: !open ? "4rem" : "max-content",
      }}
    >
      <div className="w-full flex justify-between items-center">
        <span className="text-[19px] md:text-[24px] font-medium">
          {question}
        </span>
        <span className="text-[24px]">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      {children}
    </button>
  );
};

export default Accordion;
