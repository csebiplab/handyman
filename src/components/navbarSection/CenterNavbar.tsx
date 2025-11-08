"use client";

import Image from "next/image";
import { Phone, Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import GetAnEstimateButtonBgBlack from "../common/form/GetAnEstimateButtonBgBlack";
import GetInTouchModal from "../common/form/GetInTouchModal";

export default function CenterNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onModalClose = () => setIsOpen(false);

  // ✅ Disable background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ✅ Icons with links
  const icons = [
    {
      src: "/assets/navbarIconFacebook.png",
      href: "https://www.facebook.com/share/1CURMHqadu/?mibextid=wwXIfr",
      alt: "Facebook",
    },
    {
      src: "/assets/navbarIconHomestars.png",
      href: "https://www.homestars.com/profile/torontohandymans",
      alt: "HomeStars",
    },
    {
      src: "/assets/navbarIconMap.png",
      href: "https://maps.app.goo.gl/1vziReSzQt4oNK5p8?g_st=ipc",
      alt: "Google Maps",
    },
  ];

  const mainMenu = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/aboutUs" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
    { title: "Blog", href: "/blogs" },
    { title: "Contact", href: "/contactUs" },
  ];

  const serviceMenu = [
    { title: "Carpentry & Woodwork", href: "/services/carpentry-woodwork" },
    { title: "Drywall & Finishing", href: "/services/drywall-finishing" },
    { title: "Flooring Installation", href: "/services/flooring-installation" },
    { title: "Painting", href: "/services/painting" },
    { title: "Plumbing", href: "/services/plumbing-minor-work" },
    {
      title: "Electrical (Minor Work)",
      href: "/services/electrical-minor-work",
    },
    { title: "Full Renovation", href: "/services/full-renovation" },
    { title: "Exterior Works", href: "/services/exterior-works" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 py-1 p-x-192 flex justify-between items-center relative">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="/"
          className="relative w-[60px] h-[60px] sm:w-[84px] sm:h-[84px]"
        >
          <Image
            src="/assets/handymanLogo.png"
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

      {/* 🔥 Overlay */}
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
                src="/assets/handymanLogo.png"
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

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-5 pb-6 pt-4 bg-white border-t border-gray-200">
          <div className="flex gap-6">
            {icons.map((icon, index) => (
              <Link
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>

          <div className="w-[90%]">
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md transition"
              onClick={(e) => {
                e.stopPropagation(); // 🛑 Prevent click from bubbling
                onOpen(); // ✅ Open the modal
              }}
            >
              GET AN ESTIMATE
            </button>
            <GetInTouchModal isOpen={isOpen} onClose={onModalClose} />
          </div>
        </div>
      </div>
    </header>
  );
}
