"use client";

import CommonContactForm from "@/components/common/CommonContactForm";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <div>
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Get in Touch
      </h2>

      {/* Decorative Line */}
      <svg
        viewBox="0 0 200 40"
        xmlns="http://www.w3.org/2000/svg"
        className="w-40 h-6 mb-4"
      >
        <path
          d="M0 30 Q100 10 200 30"
          stroke="#FACC15"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Contact Form + Image Section */}
      <div className="bg-[#F4F4F4] rounded-lg shadow-lg overflow-hidden p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Side - Contact Form (70%) */}
          <div className="lg:col-span-8 w-full">
            <CommonContactForm />
          </div>

          {/* Right Side - Image (30%) */}
          <div className="lg:col-span-4 w-full">
            <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-full rounded-lg overflow-hidden">
              <Image
                src="/assets/contactUsPage/contactUsGetInTouchImage.png"
                alt="Get in Touch"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
