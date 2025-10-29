"use client";

import { useState } from "react";
import GetInTouchModal from "./GetInTouchModal";

const BottomStickyContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onModalClose = () => setIsOpen(false);

  return (
    <div className="fixed bottom-0 z-40 w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-[1.5px] py-3 px-4">
      <div className="flex justify-between md:justify-center items-center gap-3 md:gap-6">
        <button
          onClick={() => onOpen()}
          className="bg-white shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)] text-[12px] md:text-lg font-bold px-1 md:px-4 py-3 w-full md:w-auto text-center min-h-[48px] min-w-[48px]"
        >
          Send Us A Message
        </button>
        <GetInTouchModal isOpen={isOpen} onClose={onModalClose} />

        <a
          href="tel:(647) 449 - 9512"
          className="bg-[#ffffff] text-[11px] flex justify-center items-center md:text-lg font-bold px-1 md:px-4 py-3 w-full md:w-auto text-center min-h-[48px] min-w-[48px]"
        >
          Call - (647) 326-9185
        </a>
      </div>
    </div>
  );
};

export default BottomStickyContact;
