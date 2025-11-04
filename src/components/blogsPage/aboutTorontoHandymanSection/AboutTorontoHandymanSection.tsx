"use client";

import GetInTouchModal from "@/components/common/form/GetInTouchModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutTorontoHandymanSection() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onModalClose = () => setIsOpen(false);

  const tableOfContents = [
    { title: "About Toronto Handyman", href: "#about-toronto-handyman" },
    {
      title: "Why Homeowners and Businesses Choose Us",
      href: "#why-choose-us",
    },
    { title: "Our Professional Services", href: "#professional-services" },
    { title: "Commercial Handyman Services", href: "#commercial-services" },
    { title: "Service Areas", href: "#service-areas" },
  ];

  const socialLinks = [
    {
      icon: "/assets/navbarIconFacebook.png",
      href: "https://www.facebook.com/share/1CURMHqadu/?mibextid=wwXIfr",
      alt: "Facebook",
    },
    {
      icon: "/assets/navbarIconHomestars.png",
      href: "https://www.homestars.com/profile/torontohandymans",
      alt: "Homestars",
    },
    {
      icon: "/assets/navbarIconMap.png",
      href: "https://maps.app.goo.gl/1vziReSzQt4oNK5p8?g_st=ipc",
      alt: "Map",
    },
  ];

  const services = [
    "Carpentry & Woodwork",
    "Drywall & Finishing",
    "Flooring Installation",
    "Painting (Interior & Exterior)",
    "Plumbing Services",
    "Electrical (Minor Work)",
  ];

  const whyChooseUs = [
    {
      title: "Licensed & Skilled Professionals",
      description:
        "Our team consists of certified professionals trained in multiple trades — ensuring your project is completed safely, accurately, and to the highest standard.",
    },
    {
      title: "Comprehensive Services Under One Roof",
      description:
        "Whether you need a carpenter, plumber, painter, or renovator, we have the expertise to handle it all.",
    },
    {
      title: "Attention to Detail",
      description:
        "We focus on precision and quality in every job — from perfect paint lines to flawless flooring.",
    },
    {
      title: "Timely & Reliable Service",
      description:
        "We value your time. Our team shows up when promised and delivers results without unnecessary delays.",
    },
  ];

  const professionalServices = [
    {
      icon: "🔨",
      title: "Carpentry & Woodwork",
      description:
        "We design, build, and repair custom wood structures that enhance both indoor and outdoor spaces.",
      subheading: "Our services include:",
      list: [
        "Decks, fences, pergolas, and gazebos",
        "Stairs, railings, and framing",
        "Custom shelves and accent woodwork",
      ],
    },
    {
      icon: "🧱",
      title: "Drywall & Finishing",
      description: "Smooth, seamless walls are our specialty.",
      subheading: "We provide:",
      list: [
        "Drywall installation and repairs",
        "Taping, mudding, sanding, and priming",
        "Interior wall painting and finishing",
      ],
    },
    {
      icon: "🪵",
      title: "Flooring Installation",
      description:
        "Upgrade your floors with professional installation and long-lasting quality.",
      subheading: "We install:",
      list: [
        "Vinyl, laminate, and engineered hardwood",
        "Ceramic and porcelain tile flooring",
      ],
      footer: "Every project is measured, leveled, and finished to perfection.",
    },
    {
      icon: "🎨",
      title: "Painting (Interior & Exterior)",
      description:
        "Add beauty and protection to your home or business with our expert painting services.",
      subheading: "We handle:",
      list: [
        "Interior walls, ceilings, trims, and doors",
        "Exterior siding, decks, and fences",
      ],
      footer:
        "Our painters use high-quality materials for smooth, durable finishes.",
    },
    {
      icon: "🔧",
      title: "Plumbing Services",
      description:
        "From quick fixes to new installations, our licensed plumbers keep your systems running efficiently.",
      subheading: "We provide:",
      list: [
        "Faucet, sink, and toilet installation",
        "Pipe repair and leak detection",
        "Drain cleaning and water line hookups",
      ],
    },
    {
      icon: "💡",
      title: "Electrical (Minor Work)",
      description:
        "Our professionals perform safe, code-compliant electrical work, including:",
      list: [
        "Light fixture and ceiling fan installation",
        "Switch and outlet replacement",
        "Minor troubleshooting and repairs",
      ],
    },
    {
      icon: "🏠",
      title: "Full Home Renovation",
      description:
        "Transform your living space with complete renovation services designed to add comfort and value.",
      subheading: "We manage:",
      list: [
        "Kitchen and bathroom remodeling",
        "Basement finishing",
        "Condo upgrades and open-concept conversions",
      ],
      footer: "From design to completion, we handle everything with precision.",
    },
  ];

  return (
    <section className="py-8 md:py-12 2xl:py-16 grid grid-cols-1 lg:grid-cols-7 lg:gap-6">
      {/* Right Sidebar */}
      <aside className="space-y-6 col-span-2 order-1 lg:order-3 mb-6 lg:mb-0">
        {/* Join Section */}
        <div className="bg-gray-100 relative rounded-2xl shadow-md text-center overflow-hidden">
          <Image
            src="/assets/servicesPage/carpentryWoodworkSectionJoinUsBg.png"
            alt="Join Section Background"
            fill
            className="object-cover"
            priority
          />
          <div className="relative px-6 py-12 z-10">
            <h4 className="text-lg md:text-2xl text-gray-800 mb-1">Handyman</h4>
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">
              Top of the Toronto
            </h3>
            <div className="relative border-2 border-[#DFBC00] rounded-xl py-8 px-4 mb-4 bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-12 h-12 md:w-18 md:h-18 bg-gradient-to-b from-gray-800 to-gray-400 rounded-full mb-4" />
              <p className="text-gray-800 text-lg md:text-2xl font-medium">
                Take a Look
              </p>
              <p className="text-[#DFBC00] font-bold text-lg md:text-2xl">
                Join with Us
              </p>
            </div>
            <button
              onClick={onOpen}
              className="bg-black hover:bg-gray-900 cursor-pointer text-white py-2 px-5 rounded-md text-sm font-semibold inline-block transition"
            >
              GET AN ESTIMATE
            </button>
            <GetInTouchModal isOpen={isOpen} onClose={onModalClose} />
          </div>
        </div>

        {/* Services List */}
        <div className="bg-gray-100 border border-gray-300 rounded-2xl shadow-md p-5">
          <h4 className="text-lg lg:text-2xl font-bold mb-3 flex items-center gap-2">
            <Image
              src="/assets/servicesPage/carpentryWoodworkSectionIcon.png"
              alt="Services Icon"
              width={24}
              height={24}
            />
            Services
          </h4>
          <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
          <ul className="space-y-5 text-gray-800">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex items-center justify-between hover:text-yellow-600 cursor-pointer transition"
              >
                <span>{service}</span>
                <span>›</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Left Content */}
      <div className="space-y-6 col-span-2 order-2 lg:order-1 mb-6 lg:mb-0">
        {/* Table of Content Section */}
        <div className="bg-gray-100 border border-gray-300 rounded-2xl shadow-md p-5">
          <h4 className="text-lg lg:text-2xl font-bold mb-3 flex items-center gap-2">
            <Image
              src="/assets/blogsPage/aboutTorontoHandymanSectionIcon.png"
              alt="Table of Content Icon"
              width={24}
              height={24}
            />
            Table Of Content
          </h4>
          <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
          <ul className="space-y-3 text-gray-800 text-sm md:text-base">
            {tableOfContents.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="hover:text-yellow-600 transition underline underline-offset-2"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-5 border border-gray-200">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <span className="text-lg">🔗</span> Social Media Links
          </h4>
          <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
          <div className="flex gap-4 justify-center items-center">
            {socialLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="col-span-3 bg-white overflow-visible order-3 lg:order-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Carpentry & Woodwork Services
          </h2>

          <div className="relative w-full h-64 md:h-44 lg:h-52 2xl:h-[264px] mb-6">
            <Image
              src="/assets/blogsPage/aboutTorontoHandymanSection.png"
              alt="Carpentry Work"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="text-base space-y-5">
            <p>
              At Toronto Handyman, we take pride in offering expert
              craftsmanship, dependable service, and long-term value. Our
              licensed specialists handle projects of all sizes — from minor
              maintenance to full-scale remodeling — with the same care and
              professionalism.
            </p>
            <p>
              We believe in building trust through consistent communication,
              transparent pricing, and top-quality workmanship that lasts. Our
              goal is to make your space more functional, beautiful, and
              valuable.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="px-5 mt-10 text-gray-900">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Homeowners and Businesses Choose Us
          </h2>

          <ul className="space-y-6">
            {whyChooseUs.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500 text-xl">✅</span>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Services Section */}
        <div className="px-5 mt-10 text-gray-900">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Professional Services
          </h2>

          <ul className="space-y-8">
            {professionalServices.map((service, index) => (
              <li key={index}>
                <p className="font-bold text-lg flex items-center gap-1">
                  <span>{service.icon}</span> {service.title}
                </p>
                <p className="text-gray-700 mt-1">{service.description}</p>
                {service.subheading && (
                  <p className="mt-2 font-medium">{service.subheading}</p>
                )}
                <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                  {service.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {service.footer && (
                  <p className="text-gray-700 mt-2">{service.footer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Commercial Handyman Services */}
        <div className="px-5 mt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Commercial Handyman Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Toronto Handyman also supports commercial properties, restaurants,
            offices, and retail spaces with reliable maintenance and custom
            installations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand the importance of minimal downtime — that’s why we
            provide fast, professional service to keep your business running
            smoothly.
          </p>
        </div>
      </div>
    </section>
  );
}
