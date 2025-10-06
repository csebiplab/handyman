"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-gray-50">
      {/* Background Image (55% width, fully visible) */}
      <div className="absolute hidden sm:block inset-y-0 left-0 w-[55%] h-full">
        <Image
          src="/assets/handymanHomePage/aboutUsImage.png"
          alt="Modern Kitchen"
          fill
          className="object-contain object-left" // ensures the image is fully visible and aligned left
          priority
        />
      </div>

      {/* Overlay Gradient Blur starting from 50% */}
      <div
        className="absolute inset-y-0 left-0 w-[55%] h-full"
        style={{
          backdropFilter: "blur(8px)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-end min-h-[340px]">
        {/* Text Block with Full Blur */}
        <div className="w-full lg:w-[55%] flex items-center backdrop-blur-md rounded-l-2xl shadow-lg">
          <div className="p-6 md:p-10 lg:p-16 text-gray-800">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              About Us
              <svg
                width="160"
                height="8"
                viewBox="0 0 160 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2"
              >
                <path
                  d="M0 6C40 0 120 0 160 6"
                  stroke="#FACC15"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h2>

            <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
              Reliable Handyman Services You Can Trust
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Toronto Handyman is a trusted company offering licensed and expert
              craftsmanship. Our specialists cater to both residential and
              commercial projects, ensuring each task is completed with
              precision and timeliness. We focus on building long-term
              relationships with our clients through exceptional quality,
              consistent service, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
