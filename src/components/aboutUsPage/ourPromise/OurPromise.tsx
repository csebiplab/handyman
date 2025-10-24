"use client";

import React from "react";
import Image from "next/image";

const OurPromise: React.FC = () => {
  const images = [
    "/assets/aboutUsPage/promise1.png",
    "/assets/aboutUsPage/promise2.png",
    "/assets/aboutUsPage/promise3.png",
    "/assets/aboutUsPage/promise4.png",
    "/assets/aboutUsPage/promise5.png",
    "/assets/aboutUsPage/promise6.png",
    "/assets/aboutUsPage/promise7.png",
    "/assets/aboutUsPage/promise8.png",
    "/assets/aboutUsPage/promise9.png",
  ];

  const promises = [
    {
      title: "Reliable Service",
      text: "We promise dependable and trustworthy service on every job, ensuring that our clients feel confident in our work from start to finish.",
    },
    {
      title: "Precise Workmanship",
      text: "Our team focuses on precision, ensuring that every detail is handled with care to deliver top-tier results.",
    },
    {
      title: "Professionalism",
      text: "From our trained experts to our courteous approach, professionalism is the core of our business, delivering excellence with every project.",
    },
  ];

  return (
    <section className="bg-white w-full">
      {/* Optional Yellow Decorative Curve */}
      <div className="w-full h-4 bg-gradient-to-r from-yellow-400 to-transparent rounded-tr-full"></div>

      {/* Image Grid Section */}
      <div className="w-full flex justify-center items-center bg-gray-50 overflow-hidden py-8 md:py-12">
        <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-9 gap-2 md:gap-3 px-2 sm:px-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] overflow-hidden rotate-45 rounded-lg shadow-md"
            >
              <div className="-rotate-45 w-full h-full relative">
                <Image
                  src={src}
                  alt={`Our Promise Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="bg-gray-100 text-center md:text-left px-6 md:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-2">{promise.title}:</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {promise.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
