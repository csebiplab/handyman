"use client";

import Image from "next/image";

export default function CommercialServices() {
  return (
    <section className="relative w-full bg-gray-100 rounded-lg overflow-hidden pt-6 text-center">
      {/* Heading */}
      <div className="px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Commercial Services
        </h2>

        {/* Curved Yellow Line */}
        <div className="w-96 mx-auto mt-2">
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
        <p className="text-gray-700 mt-6 text-base leading-relaxed max-w-2xl mx-auto">
          We support commercial properties, including chain restaurants and cafés,
          by providing ongoing maintenance, repairs, and custom installations.
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-md">
            CALL US TODAY
          </button>
        </div>
      </div>

      {/* Building Illustration */}
      <div className="relative mt-6 w-full flex justify-center">
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
