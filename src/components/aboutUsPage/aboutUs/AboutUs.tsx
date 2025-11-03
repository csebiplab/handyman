"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-gray-50">
      {/* Full-width Background Image (hidden on small devices) */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src="/assets/aboutUsPage/aboutUsBg.jpg"
          alt="Modern Kitchen"
          fill
          className="object-cover object-center brightness-100"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center lg:justify-end min-h-[340px]">
        {/* Text Section */}
        <div className="w-full lg:w-[50%] flex items-center">
          <div className="p-6 text-gray-900 text-left">
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

            <h3 className="text-lg sm:text-2xl font-semibold mb-4 text-gray-800">
              Your Trusted Handyman: Skilled, Reliable, Affordable
            </h3>

            <p className="leading-relaxed text-sm md:text-lg text-gray-700">
              At Toronto Handyman, we are a growing company with a team of
              skilled, licensed specialists committed to delivering high-quality
              workmanship on both residential and commercial projects. Our
              experts bring reliability, attention to detail, and long-term
              value to every task, ensuring the best results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
