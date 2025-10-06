"use client";

import Image from "next/image";
import { Phone, Menu } from "lucide-react";
import Link from "next/link";

export default function CenterNavbar() {
  return (
    <header className="bg-white border-b border-gray-200 py-2 p-x-192 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative w-[60px] h-[54px] sm:w-[84px] sm:h-[74px]">
          <Image
            src="/assets/handymanHomePage/centerNavbarLogo.png"
            alt="Toronto Handyman Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Hide this text on mobile */}
        <div className="hidden sm:block border-l border-gray-500 pl-4">
          <p className="text-sm text-gray-500 leading-none">Professional</p>
          <h1 className="text-base font-semibold text-gray-900 leading-tight">
            Handyman Services
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Phone */}
        <a
          href="tel:6473269185"
          className="flex items-center gap-2 font-bold text-lg hover:text-yellow-600 transition"
        >
          <Phone className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-900 text-lg sm:text-[20px] font-bold">(647) 326-9185</span>
        </a>

        {/* Estimate button (hidden on small) */}
        <Link
          href="/estimate"
          className="hidden sm:inline-block bg-[#E1B900] hover:bg-[#d4a900] text-white font-semibold text-sm px-5 py-2 relative transition-all"
          style={{
            clipPath:
              "polygon(10px 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0% 50%)",
          }}
        >
          GET AN ESTIMATE
        </Link>

        {/* Hamburger icon only on mobile */}
        <button className="sm:hidden">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </header>
  );
}
