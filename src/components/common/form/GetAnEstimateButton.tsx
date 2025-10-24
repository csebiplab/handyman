"use client";

import { Button } from "@material-tailwind/react";
import { useState } from "react";
import GetInTouchModal from "./GetInTouchModal";

const GetAnEstimateButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = (): void => setIsOpen(true);
  const onModalClose = (): void => setIsOpen(false);

  return (
    <div className="inline-block">
      <Button
        onClick={onOpen}
        aria-label="Get an estimate"
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium 
               py-2.5 px-4 sm:py-3 sm:px-6 
               text-sm sm:text-base 
               rounded-md shadow transition duration-300 text-center flex items-center gap-2"
      >
        <span className="text-white text-xs md:text-base font-bold normal-case">
          Get an Estimate
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              d="M0 10.5902L4.59 6.00095L0 1.41168L1.42 0.00190926L7.42 6.00095L1.42 12L0 10.5902Z"
              fill="white"
            />
          </svg>
        </span>
      </Button>

      {/* Pass props to modal */}
      <GetInTouchModal isOpen={isOpen} onClose={onModalClose} />
    </div>
  );
};

export default GetAnEstimateButton;
