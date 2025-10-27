import React from "react";
import Image from "next/image";

const GalleryBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[280px] md:h-[340px] lg:h-[400px] rounded-xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/contactUsPage/contactUsBannerBg.png"
          alt="Contact Us Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Gallery</h1>
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
        <p className="text-sm md:text-base">Home / Gallery</p>
      </div>
    </div>
  );
};

export default GalleryBanner;
