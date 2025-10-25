import React from "react";
import Image from "next/image";

const AboutUsBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[280px] md:h-[340px] lg:h-[400px] rounded-xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/aboutUsPage/aboutUsBanner.png"
          alt="About Us Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Optional overlay for dark effect */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">About Us</h1>
        <svg
          className="w-40 h-3 mb-2"
          viewBox="0 0 160 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10 Q80 -10 160 10"
            stroke="#FACC15"
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-sm md:text-base">Home / About Us</p>
      </div>
    </div>
  );
};

export default AboutUsBanner;
