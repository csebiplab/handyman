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

      {/* Center Navigation */}
      <nav className="hidden lg:flex flex-grow justify-end md:gap-5 lg:gap-16 3xl:gap-20 text-gray-800 font-medium mr-8 relative">
        <Link href="/about" className="hover:text-yellow-600 transition">
          About
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <button
            className="hover:text-yellow-600 transition flex items-center gap-1 focus:outline-none"
          >
            Services
            <span className="text-xs">▼</span>
          </button>

          {/* Dropdown Menu */}
          {/* <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 min-w-[180px] border border-gray-100 z-50">
            <Link
              href="/services/home-repair"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home Repair
            </Link>
            <Link
              href="/services/painting"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Painting
            </Link>
            <Link
              href="/services/plumbing"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Plumbing
            </Link>
            <Link
              href="/services/carpentry"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Carpentry
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
          href="https://www.facebook.com/share/1CURMHqadu/?mibextid=wwXIfr"
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
          href="https://maps.app.goo.gl/1vziReSzQt4oNK5p8?g_st=ipc"
          className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition"
        >
          <MapPin className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
