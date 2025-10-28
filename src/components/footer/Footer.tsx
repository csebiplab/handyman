"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    { href: "/about", label: "About Us" },
    { href: "/faqs", label: "FAQs" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Carpentry & Woodwork",
    "Drywall & Finishing",
    "Flooring Installation",
    "Painting",
    "Plumbing",
    "Electrical (Minor Work)",
    "Full Renovation",
    "Exterior Works",
    "Welding & Fabrication",
    "Lathe & Machining",
    "Repairs & Maintenance",
    "Custom Projects",
  ];

  // ✅ Social icons as images
  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: "/assets/navbarIconFacebook.png",
      label: "Facebook",
    },
    {
      href: "https://pinterest.com",
      icon: "/assets/navbarIconHomestars.png",
      label: "Pinterest",
    },
    {
      href: "https://maps.google.com",
      icon: "/assets/navbarIconMap.png",
      label: "Location",
    },
  ];

  return (
    <footer className="text-white">
      {/* 🔹 Top Section with Background */}
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/handymanHomePage/footerBg.png"
            alt="Footer background"
            fill
            className="object-cover object-center"
            priority
            quality={80}
          />
        </div>

        {/* Top content */}
        <div className="p-x-192 py-12 md:py-16">
          <div className="inline-flex items-center bg-white text-black font-semibold rounded-md px-5 py-3 mb-5 hover:bg-yellow-500 hover:text-white transition-all duration-300 cursor-pointer">
            <FaPhoneAlt className="mr-2" /> (647) 326-9185
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Links</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {footerLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="hover:text-yellow-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm text-gray-300">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="hover:text-yellow-500 transition-colors cursor-pointer"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Address + Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                224 Millwood Rd, Toronto,
                <br />
                ON M4S 1J7, Canada
              </p>

              {/* ✅ Social Icons */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={27}
                      height={27}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Mobile Copyright */}
        <div className="block sm:hidden pb-5 text-center text-sm text-gray-300">
          <p className="mb-3">© All Copyright 2025 by Handyman</p>
          <div className="flex justify-center gap-4">
            <Link href="/terms" className="hover:text-yellow-500 transition-all">
              Terms & Condition
            </Link>
            <Link href="/privacy" className="hover:text-yellow-500 transition-all">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-700" />

      {/* 🔹 Bottom Section */}
      <div className="p-x-192 py-1 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 bg-black">
        <div className="flex items-center space-x-2 mb-3 md:mb-0">
          <p className="font-bold text-white">
            WEBSITE DESIGN AND SEO BY :-
          </p>
          <Image
            src="/assets/handymanHomePage/gokundulogo.png"
            alt="GoKundu Logo"
            width={100}
            height={24}
            className="w-[100px] h-auto brightness-0 invert"
          />
        </div>

        <p className="hidden md:block">
          © All Copyright 2025 by Handyman
        </p>

        <div className="hidden md:flex gap-4">
          <Link href="/terms" className="hover:text-yellow-500 transition-all">
            Terms & Condition
          </Link>
          <Link href="/privacy" className="hover:text-yellow-500 transition-all">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
