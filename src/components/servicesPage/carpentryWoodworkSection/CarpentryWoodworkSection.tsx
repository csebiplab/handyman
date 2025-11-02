"use client";

import GetInTouchModal from "@/components/common/form/GetInTouchModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CarpentryWoodworkSection() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onModalClose = () => setIsOpen(false);

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

  const serviceDetails = [
    {
      title: "• Decks, Patios, Fences: Design, Build, Enhance",
      description:
        "Transform your outdoor living space with custom-designed decks, patios, and fences. We combine beauty with functionality to create a space you’ll love, offering sturdy, long-lasting solutions that match your style.",
    },
    {
      title: "• Pergolas, Gazebos, Railings: Style, Shade, Comfort",
      description:
        "Add charm and elegance with custom pergolas and gazebos. Our expert woodworkers design structures that provide style, shade, and comfort.",
    },
    {
      title: "• Stairs, Cabinets, Shelving: Craft, Create, Customize",
      description:
        "Whether you need custom stairs, cabinets, or shelving, our skilled carpenters create personalized pieces that fit your exact needs.",
    },
    {
      title: "• Framing, Structural Woodwork: Strength, Stability, Safety",
      description:
        "From new builds to renovations, our framing and structural woodwork provide strength and safety to ensure your space lasts for years to come.",
    },
  ];

  const chooseUs = [
    {
      title: "• Custom Designs:",
      subtitle: "Personalized, Tailored, Unique",
      description:
        "Each project is designed with you in mind. We listen to your ideas and bring them to life, delivering woodwork solutions that are personalized and tailored to your needs.",
    },
    {
      title: "• Durable Construction:",
      subtitle: "Strong, Reliable, Lasting",
      description:
        "We use the highest quality materials and construction methods to ensure your woodwork projects stand the test of time. Durability is key in everything we build, from custom furniture to structural frames.",
    },
    {
      title: "• Expert Craftsmanship:",
      subtitle: "Skilled, Detailed, Precise",
      description:
        "Our carpenters bring years of experience to each project, ensuring the finest craftsmanship in every cut, joint, and finish. We focus on the finest details to guarantee a flawless outcome.",
    },
    {
      title: "• Affordable, Transparent, Fair",
      subtitle: "",
      description:
        "We believe in offering high-quality carpentry services at competitive prices. With transparent pricing and no hidden fees, you can trust that you’re getting great value.",
    },
  ];

  return (
    <section className="py-8 md:py-12 2xl:py-16 grid grid-cols-1 lg:grid-cols-7 lg:gap-6">
      {/* Left and Center Content */}
      <div className="lg:col-span-5 bg-white overflow-hidden order-2 lg:order-1">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Carpentry & Woodwork Services
          </h2>

          <div className="relative w-full h-64 md:h-80 lg:h-96 2xl:h-[436px] mb-6">
            <Image
              src="/assets/servicesPage/carpentryWoodworkSectionImage.png"
              alt="Carpentry Work"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <ul className="space-y-5 text-base px-5">
            {serviceDetails.map((item, index) => (
              <li key={index}>
                <p className="font-bold mb-4">{item.title}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="px-5 mt-10 text-gray-900">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Choose Us?
          </h2>

          <ul className="space-y-6">
            {chooseUs.map((item, index) => (
              <li key={index}>
                <p className="font-bold">
                  {item.title}{" "}
                  {item.subtitle && (
                    <span className="font-semibold">{item.subtitle}</span>
                  )}
                </p>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </li>
            ))}
          </ul>

          {/* Get Started Section */}
          <div className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Started Today!
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ready to transform your home with custom carpentry? Design, Build,
              Enhance your space by contacting us for a free consultation. Let’s
              turn your vision into reality with our expert carpentry and
              woodwork services.
            </p>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="space-y-6 col-span-2 order-1 lg:order-2 mb-6 lg:mb-0">
        {/* Join Section */}
        <div className="relative rounded-2xl shadow-md text-center overflow-hidden">
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

        {/* Social Media Links */}
        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
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

        {/* Services List */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-5">
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
    </section>
  );
}
