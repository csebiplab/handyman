"use client";

import Image from "next/image";
import { Phone, Menu, Facebook, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import GetAnEstimateButtonBgBlack from "../common/form/GetAnEstimateButtonBgBlack";

export default function CenterNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  // Arrays for menu items
  const icons = [
    "/assets/navbarIconFacebook.png",
    "/assets/navbarIconHomestars.png",
    "/assets/navbarIconMap.png",
  ];
  const mainMenu = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    {
      title: "Services",
      href: "/services",
      subMenu: [
        { title: "Web Development", href: "/services/web" },
        { title: "Mobile Apps", href: "/services/mobile" },
        { title: "SEO Optimization", href: "/services/seo" },
      ],
    },
    { title: "Gallery", href: "/gallery" },
    { title: "Blog", href: "/blogs" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  const serviceMenu = [
    { title: "Carpentry & Woodwork", href: "/services/carpentry-woodwork" },
    { title: "Drywall & Finishing", href: "/services/drywall-finishing" },
    { title: "Flooring Installation", href: "/services/flooring-installation" },
    { title: "Painting", href: "/services/painting" },
    { title: "Plumbing", href: "/services/plumbing" },
    {
      title: "Electrical (Minor Work)",
      href: "/services/electrical-minor-work",
    },
    { title: "Full Renovation", href: "/services/full-renovation" },
    { title: "Exterior Works", href: "/services/exterior-works" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 py-2 p-x-192 flex justify-between items-center relative">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="/"
          className="relative w-[60px] h-[54px] sm:w-[84px] sm:h-[74px]"
        >
          <Image
            src="/assets/handymanHomePage/centerNavbarLogo.png"
            alt="Toronto Handyman Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <div className="border-l border-gray-500 pl-4">
          <p className="text-sm text-gray-500 leading-none">Professional</p>
          <h1 className="text-base font-semibold text-gray-900 leading-tight">
            Handyman Services
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-6">
        <a
          href="tel:6473269185"
          className="hidden sm:flex items-center gap-2 font-bold text-lg hover:text-yellow-600 transition"
        >
          <Phone className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-900 text-lg sm:text-[20px] font-bold">
            (647) 326-9185
          </span>
        </a>

        <div className="hidden sm:block">
          <GetAnEstimateButtonBgBlack />
        </div>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* 🔥 Overlay (Dark background when menu is open) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/35 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-800 p-2 hover:bg-gray-100 rounded-full"
        >
          <p className="font-bold">Close</p>
        </button>

        <div className="overflow-y-auto flex-1 pb-32">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 mt-10 border-b border-gray-200">
            <div className="relative w-[70px] h-[65px]">
              <Image
                src="/assets/handymanHomePage/centerNavbarLogo.png"
                alt="Toronto Handyman Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="border-l border-gray-400 pl-3">
              <p className="text-sm text-gray-500 leading-none">Professional</p>
              <h1 className="text-base font-semibold text-gray-900 leading-tight">
                Handyman Services
              </h1>
            </div>
          </div>

          {/* MAIN MENU */}
          <div className="px-6 py-4">
            <h2 className="text-gray-900 font-bold text-sm uppercase mb-2 border-b pb-1">
              Main Menu
            </h2>
            <ul className="flex flex-col text-lg font-medium text-gray-800">
              {mainMenu.map((item, index) => (
                <li key={index} className="relative">
                  {item.subMenu ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(!openDropdown)}
                        className="w-full text-left py-2 hover:text-yellow-600 transition flex justify-between items-center"
                      >
                        {item.title}
                        <span className="ml-2">&#x25BC;</span>
                      </button>
                      {openDropdown && (
                        <ul className="mt-2 ml-4 flex flex-col bg-gray-50 rounded shadow-md">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 px-4 hover:text-yellow-600 transition"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 hover:text-yellow-600 transition"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICE MENU */}
          <div className="px-6 pb-4">
            <h2 className="text-gray-900 font-bold text-sm uppercase mb-2 border-b pb-1">
              Service Menu
            </h2>
            <ul className="flex flex-col text-lg font-medium text-gray-800">
              {serviceMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 hover:text-yellow-600 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fixed Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-5 pb-6 pt-4 bg-white border-t border-gray-200">
          <div className="flex gap-6">
            {icons.map((icon, index) => (
              <Link
                key={index}
                href="#"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src={icon}
                  alt={`icon-${index}`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>

          <div className="w-[90%]">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md transition">
              GET AN ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
