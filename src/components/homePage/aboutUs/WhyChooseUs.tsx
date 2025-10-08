"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const features = [
  {
    title: "Skilled, Licensed Professionals",
    desc: "Each member of our team is a licensed professional with expertise in various trades. Our specialists deliver precise, high-quality results.",
    icon: "/assets/handymanHomePage/whyChooseUsIcon1.png",
  },
  {
    title: "Comprehensive Service Range",
    desc: "We provide a full spectrum of services, from carpentry and plumbing to renovations and custom projects for residential and commercial needs.",
    icon: "/assets/handymanHomePage/whyChooseUsIcon2.png",
  },
  {
    title: "Quality Workmanship",
    desc: "Our team commits to delivering results that enhance functionality and aesthetics, emphasizing quality and attention to detail.",
    icon: "/assets/handymanHomePage/whyChooseUsIcon3.png",
  },
  {
    title: "Timely and Reliable Service",
    desc: "Deadlines matter. We deliver on time and ensure quality work without delays or compromise.",
    icon: "/assets/handymanHomePage/whyChooseUsIcon4.png",
  },
  {
    title: "Client-Centered Approach",
    desc: "Your satisfaction is our priority. We focus on understanding your needs and executing projects with care to ensure it’s right the first time.",
    icon: "/assets/handymanHomePage/whyChooseUsIcon5.png",
  },
  {
    title: "Competitive, Transparent Pricing",
    desc: "We provide top-tier service without exceeding your budget. Pricing is fair and transparent, ensuring the best value for your investment.",
    icon: "/assets/handymanHomePage/whyChooseUsIcon6.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full mt-10 bg-gray-50 rounded-2xl overflow-hidden flex flex-col lg:flex-row">
      {/* Left Image (20%) with Play Button */}
      <div className="relative order-2 sm:order-1 w-full lg:w-[20%] h-64 lg:h-auto">
        <Image
          src="/assets/handymanHomePage/whyChooseUs.png"
          alt="Why Choose Us"
          fill
          className="object-cover"
          priority
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white hover:scale-110 hover:bg-gray-950 hover:text-white transition-all duration-300 shadow-lg">
            <Play className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Right Content (80%) */}
      <div className="w-full order-1 sm:order-2 lg:w-[80%] p-6 md:p-10 md:pr-[192px] flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Why Choose Us
          <svg
            viewBox="0 0 256 10"
            xmlns="http://www.w3.org/2000/svg"
            className="block mt-2 w-64"
          >
            <path
              d="M0 8C64 2 192 2 256 8"
              stroke="#FACC15"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row-reverse items-center sm:items-start text-center sm:text-left p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              {/* Icon */}
              <div className="relative w-14 h-14 mb-3 sm:mb-0 sm:ml-4 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text Section */}
              <div>
                <h3 className="font-bold text-lg text-[#DFBC00] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
