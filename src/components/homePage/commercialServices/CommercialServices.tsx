"use client";

import Link from "next/link";
import Image from "next/image";

export default function CommercialServices() {
  return (
    <section className="relative w-full bg-gray-100 rounded-lg overflow-hidden pt-10 text-center">
      {/* Heading */}
      <div className="px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Commercial Services
        </h2>

        {/* Curved Yellow Line */}
        <div className="w-96 mx-auto mt-2 max-w-full">
          <svg
            viewBox="0 0 500 40"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6"
          >
            <path
              d="M0 30C125 0 375 0 500 30"
              stroke="#FACC15"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          We support commercial properties, including chain restaurants and cafés,
          by providing ongoing maintenance, repairs, and custom installations.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="tel:(647) 326-9185"
            className="relative inline-block font-semibold text-white text-sm md:text-base px-8 md:px-10 py-3 md:py-3.5 tracking-wide transition-transform duration-300 hover:scale-105"
          >
            <span
              className="absolute inset-0 bg-[#E3BE00] hover:bg-[#c9a800] transition-colors duration-300 rounded-none"
              style={{
                clipPath:
                  "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)",
              }}
            />
            <span className="relative z-10">CALL US TODAY</span>
          </Link>
        </div>
      </div>

      {/* Building Illustration */}
      <div className="relative mt-8 w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <Image
            src="/assets/handymanHomePage/commercialServices.png"
            alt="Commercial Buildings Illustration"
            width={1200}
            height={264}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
