"use client";

import React, { useState } from "react";
import {
  Button as MaterialButton,
  ButtonProps as MTButtonProps,
} from "@material-tailwind/react";
import GetInTouchModal from "./GetInTouchModal";

// ✅ Combine Material Tailwind props with standard HTML button attributes
type CustomButtonProps = Partial<
  MTButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  children?: React.ReactNode;
};

const Button: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  // @ts-expect-error: MaterialTailwind types are overly strict — safe to ignore
  return <MaterialButton {...props}>{children}</MaterialButton>;
};

const GetAnEstimateButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onModalClose = () => setIsOpen(false);

  return (
    <div className="inline-block">
      <Button
        onClick={onOpen}
        aria-label="Get an estimate"
        className="relative overflow-hidden flex items-center justify-center gap-2 
        bg-[#DDBE00] text-white uppercase font-semibold text-sm px-6 py-2 tracking-wide 
        transition-all duration-500 group"
        style={{
          clipPath:
            "polygon(4% 0, 96% 0, 100% 30%, 100% 70%, 96% 100%, 4% 100%, 0% 70%, 0% 30%)",
        }}
      >
        <span
          className="relative z-10 flex items-center justify-center gap-2 
          transition-colors duration-500 group-hover:text-black"
        >
          <span className="text-xs md:text-base uppercase font-bold">
            Get an Estimate
          </span>
          <span className="inline-block opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
            →
          </span>
        </span>

        <span
          className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            clipPath:
              "polygon(4% 0, 96% 0, 100% 30%, 100% 70%, 96% 100%, 4% 100%, 0% 70%, 0% 30%)",
          }}
        />
      </Button>

      <GetInTouchModal isOpen={isOpen} onClose={onModalClose} />
    </div>
  );
};

export default GetAnEstimateButton;
