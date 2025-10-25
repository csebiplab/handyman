"use client";

import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CenterNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-2 p-x-192 flex justify-between items-center relative">
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
          <span className="text-gray-900 text-lg sm:text-[20px] font-bold">
            (647) 326-9185
          </span>
        </a>

        {/* Estimate button (hidden on small) */}
        <Link
          href="/estimate"
          className="hidden sm:inline-block relative font-semibold text-sm px-8 py-2 text-white uppercase tracking-wide transition-all duration-500 group overflow-hidden"
          style={{
            backgroundColor: "#DDBE00",
            clipPath:
              "polygon(4% 0, 96% 0, 100% 30%, 100% 70%, 96% 100%, 4% 100%, 0% 70%, 0% 30%)",
          }}
        >
          {/* Button Text + Arrow */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>GET AN ESTIMATE</span>

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

        {/* Hamburger icon only on mobile */}
        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-[60%] bg-white border-t border-gray-200 shadow-md sm:hidden z-50">
          <ul className="flex flex-col py-2">
            <li>
              <Link
                href="/about"
                className="block px-6 py-2 text-gray-800 hover:bg-gray-100"
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between w-full items-center px-6 py-2 text-gray-800 hover:bg-gray-100"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <ul className="bg-gray-50">
                  {/* <li>
                    <Link
                      href="/services/home-repair"
                      className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Home Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/painting"
                      className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Painting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/plumbing"
                      className="block px-8 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Plumbing
                    </Link>
                  </li> */}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/blogs"
                className="block px-6 py-2 text-gray-800 hover:bg-gray-100"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block px-6 py-2 text-gray-800 hover:bg-gray-100"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-6 py-2 text-gray-800 hover:bg-gray-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
