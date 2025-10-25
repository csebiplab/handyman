"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-gray-50">
      {/* Background Image (only visible on large and up) */}
      <div className="absolute hidden lg:block inset-y-0 left-0 w-[55%] h-full">
        <Image
          src="/assets/aboutUsPage/aboutUs.png"
          alt="Modern Kitchen"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Gradient Blur (only on large and up) */}
      <div
        className="absolute hidden lg:block inset-y-0 left-0 w-[55%] h-full"
        style={{
          backdropFilter: "blur(8px)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center lg:justify-end min-h-[340px]">
        {/* Text Section */}
        <div className="w-full lg:w-[55%] flex items-center bg-gray-100">
          <div className="p-6 sm:p-8 md:p-10 lg:p-16 text-gray-800 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
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

            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
              Your Trusted Handyman: Skilled, Reliable, Affordable
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-2xl">
              At Toronto Handyman, we are a growing company with a team of skilled, licensed specialists committed to delivering high-quality workmanship on both residential and commercial projects. Our experts bring reliability, attention to detail, and long-term value to every task, ensuring the best results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
