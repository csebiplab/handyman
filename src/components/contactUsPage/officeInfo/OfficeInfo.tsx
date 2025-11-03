"use client";

import React from "react";
import { MapPin, Mail, Clock, Phone, Info } from "lucide-react";
import Link from "next/link";

const OfficeInfo: React.FC = () => {
  // Array of contact info items
  const contactItems = [
    {
      icon: <MapPin className="text-yellow-500 w-6 h-6 flex-shrink-0" />,
      label: "Address",
      value: "224 Millwood Rd, Toronto, Canada",
      href: "https://www.google.com/maps?q=224+Millwood+Rd,+Toronto,+Canada",
      isLink: true,
      textColor: "text-gray-900",
    },
    {
      icon: <Mail className="text-yellow-500 w-6 h-6 flex-shrink-0" />,
      label: "Email",
      value: "info@torontohandymans.com",
      href: "mailto:info@torontohandymans.com",
      isLink: true,
      textColor: "text-gray-900",
    },
    {
      icon: <Clock className="text-yellow-500 w-6 h-6 flex-shrink-0" />,
      label: "Opening Hours",
      value: "09:00–17:00",
      isLink: false,
      textColor: "text-gray-900",
    },
    {
      icon: <Phone className="text-yellow-500 w-6 h-6 flex-shrink-0" />,
      label: "Telephone",
      value: "(647) 326-9185",
      href: "tel:+16473269185",
      isLink: true,
      textColor: "text-gray-900",
    },
  ];

  return (
    <section className="bg-[#F4F4F4] w-full px-4 md:px-10 py-10">
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
          Toronto Handyman office
        </h2>
        <p className="text-gray-500 text-sm">Head Office</p>
      </div>

      {/* Info Banner */}
      <div className="max-w-6xl mx-auto bg-gray-50 border border-gray-200 rounded-full flex items-center gap-2 px-4 py-2 mb-8 text-gray-700 text-sm">
        <Info className="w-4 h-4 text-gray-800 flex-shrink-0" />
        <span>
          To visit the office, you must notify a company employee at least 2
          hours before your visit – this is necessary to obtain a pass.
        </span>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        {contactItems.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="flex items-center justify-center md:justify-start gap-3">
              {item.icon}
              <div className="text-left">
                <p className="text-xs uppercase text-gray-500">{item.label}</p>
                {item.isLink && item.href ? (
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    className={`text-sm md:text-base font-medium ${item.textColor} hover:text-yellow-600 transition-colors`}
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p
                    className={`text-sm md:text-base font-medium ${item.textColor}`}
                  >
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeInfo;
