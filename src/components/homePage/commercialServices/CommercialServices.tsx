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
          We support commercial properties, including chain restaurants and
          cafés, by providing ongoing maintenance, repairs, and custom
          installations.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="tel:(647) 326-9185"
            className="relative font-semibold text-sm px-8 py-2 text-white uppercase tracking-wide transition-all duration-500 group overflow-hidden flex items-center justify-center"
            style={{
              backgroundColor: "#DDBE00",
              clipPath:
                "polygon(4% 0, 96% 0, 100% 30%, 100% 70%, 96% 100%, 4% 100%, 0% 70%, 0% 30%)",
            }}
          >
            {/* Button Text + Arrow */}
            <span className="relative z-10 flex items-center justify-center gap-2 text-white transition-all duration-500">
              <span>CALL US TODAY</span>

              {/* Arrow appears only on hover */}
              <span className="inline-block opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                →
              </span>
            </span>

            {/* Black fade background on hover */}
            <span
              className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                clipPath:
                  "polygon(4% 0, 96% 0, 100% 30%, 100% 70%, 96% 100%, 4% 100%, 0% 70%, 0% 30%)",
              }}
            ></span>
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
