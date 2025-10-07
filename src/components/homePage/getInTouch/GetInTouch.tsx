"use client";

import CommonContactForm from "@/components/common/CommonContactForm";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

export default function GetInTouch() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Get in Touch
      </h2>
      <svg
        viewBox="0 0 200 40"
        xmlns="http://www.w3.org/2000/svg"
        className="w-40 h-6 mx-auto mb-4"
      >
        <path
          d="M0 30 Q100 10 200 30"
          stroke="#FACC15"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="bg-[#F4F4F4] rounded-lg shadow-lg overflow-hidden p-6">
        <div className="grid grid-cols-1 lg:grid-cols-10 items-start gap-6">
          {/* Left Side - Contact Form (70%) */}
          <div className="lg:col-span-7 w-full">
            <CommonContactForm />
          </div>

          {/* Right Side - Contact Information (30%) */}
          <div className="lg:col-span-3 w-full">
            <div className="bg-white shadow-md rounded-xl p-6 h-full">
              <h2 className="text-2xl font-semibold text-gray-800">
                Get an Estimate
              </h2>
              <p className="text-xl text-gray-500 mb-4">
                Contact us today for a free estimate on your project
              </p>

              <div className="space-y-4 text-sm pl-6">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="text-yellow-500 mt-[2px]" size={18} />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">Email</p>
                    <p className="text-gray-600 text-lg">info@torontohandymans.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="text-yellow-500 mt-[2px]" size={18} />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">Address</p>
                    <p className="text-gray-600 text-lg">
                      224 Millwood Rd, Toronto, Canada
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="text-yellow-500 mt-[2px]" size={18} />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">Opening Hours</p>
                    <p className="text-gray-600 text-lg">09:00–17:00</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <Phone className="text-yellow-500 mt-[2px]" size={18} />
                  <div>
                    <p className="text-gray-800 text-sm font-medium">Telephone</p>
                    <p className="text-gray-600 text-lg">(647) 326-9185</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
