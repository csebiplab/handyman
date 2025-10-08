"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    { href: "/about", label: "About Us" },
    { href: "/faqs", label: "FAQs" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // 🔹 12 total services
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
    "Custom Projects",
    "Tile Installation",
    "Door & Window Repair",
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: FaFacebookF,
      size: 16,
      label: "Facebook",
    },
    {
      href: "https://pinterest.com",
      icon: FaPinterestP,
      size: 16,
      label: "Pinterest",
    },
    {
      href: "https://maps.google.com",
      icon: MdOutlineLocationOn,
      size: 18,
      label: "Location",
    },
  ];

  return (
    <footer className="text-white">
      {/* 🔹 Top Section with Background */}
      <div className="relative overflow-hidden">
        {/* Background image only for this section */}
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
          <div className="inline-flex items-center bg-white text-black font-semibold rounded-md px-5 py-3 mb-5 hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer">
            <FaPhoneAlt className="mr-2" /> (647) 326-9185
          </div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Phone + Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Links</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {footerLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="hover:text-green-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Services in 3-column grid */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm text-gray-300">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="hover:text-green-500 transition-colors cursor-pointer"
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

              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 border border-white/20"
                      aria-label={social.label}
                    >
                      <Icon size={social.size} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:hidden pb-5">
          <p className="mb-3 md:mb-0 text-center">© All Copyright 2025 by Handyman</p>
          <div className="flex justify-center gap-4">
            <Link href="/terms" className="hover:text-green-500 transition-all">
              Terms & Condition
            </Link>
            <Link
              href="/privacy"
              className="hover:text-green-500 transition-all"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-700" />

      {/* 🔹 Bottom Section without Background */}
      <div className="p-x-192 py-1 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 bg-black">
        <div className="flex items-center space-x-2 mb-3 md:mb-0">
          <p className="font-bold text-white">WEBSITE DESIGN AND SEO BY :-</p>
          <Image
            src="/assets/handymanHomePage/gokundulogo.png"
            alt="GoKundu Logo"
            width={100}
            height={24}
            className="w-[100px] h-auto brightness-0 invert"
          />
        </div>
        <p className="mb-3 md:mb-0 hidden md:block">© All Copyright 2025 by Handyman</p>
        <div className="hidden md:flex gap-4">
          <Link href="/terms" className="hover:text-green-500 transition-all">
            Terms & Condition
          </Link>
          <Link href="/privacy" className="hover:text-green-500 transition-all">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
