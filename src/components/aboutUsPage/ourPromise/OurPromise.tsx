"use client";

import React from "react";
import Image from "next/image";

const OurPromise: React.FC = () => {
  const image = "/assets/aboutUsPage/ourPromiseImage.png";

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
    <section className="bg-white w-full rounded-2xl overflow-hidden">
      {/* Yellow Decorative Line */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Our Promise: Reliable, Precise, Professional
        </h2>
        <svg
          width="160"
          height="8"
          viewBox="0 0 160 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-5"
        >
          <path
            d="M0 6C40 0 120 0 160 6"
            stroke="#FACC15"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Full-Width Gallery Image */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
        <Image
          src={image}
          alt="Our Promise Gallery"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Promise Text Section */}
      <div className="bg-gray-100 px-6 md:px-16 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-gray-800"
            >
              <h3 className="font-bold text-xl mb-3 text-gray-900">
                {promise.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
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
