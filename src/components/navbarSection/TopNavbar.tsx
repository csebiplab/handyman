"use client";

import Link from "next/link";
import { Facebook, MapPin, Instagram } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="bg-white border-b text-sm text-gray-900 flex items-center justify-between p-x-192 py-2">
      {/* Left Section */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-red-600 text-lg">🍁</span>
        <span className="font-semibold whitespace-nowrap">
          Professional Handyman Services in Toronto
        </span>
      </div>

      {/* Center Navigation (shifted right with gap-16) */}
      <nav className="hidden md:flex flex-grow justify-end md:gap-10 lg:gap-16 3xl:gap-20 text-gray-800 font-medium mr-8">
        <Link href="/about" className="hover:text-yellow-600 transition">
          About
        </Link>

        <div className="relative group">
          <Link
            href="/services"
            className="hover:text-yellow-600 transition flex items-center gap-1"
          >
            Services
            <span className="text-xs">▼</span>
          </Link>
          {/* Optional dropdown */}
          {/* <div className="absolute hidden group-hover:block bg-white shadow-md p-2 rounded-md mt-2">
            <Link href="/services/carpentry" className="block px-3 py-1 hover:bg-gray-100">
              Carpentry
            </Link>
            <Link href="/services/painting" className="block px-3 py-1 hover:bg-gray-100">
              Painting
            </Link>
          </div> */}
        </div>

        <Link href="/blogs" className="hover:text-yellow-600 transition">
          Blogs
        </Link>
        <Link href="/projects" className="hover:text-yellow-600 transition">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-yellow-600 transition">
          Contact
        </Link>
      </nav>

      {/* Right Icons */}
      <div className="hidden md:flex items-center gap-4">
        <div className="h-6 w-px bg-gray-300" />
        <Link
          href="#"
          className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition"
        >
          <Facebook className="w-4 h-4" />
        </Link>
        <Link
          href="#"
          className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition"
        >
          <Instagram className="w-4 h-4" />
        </Link>
        <Link
          href="#"
          className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition"
        >
          <MapPin className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
