"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

const bannerImages = [
  "/assets/handymanHomePage/homePageBannerImage1.png",
  "/assets/handymanHomePage/homePageBannerImage2.png",
  "/assets/handymanHomePage/homePageBannerImage3.png",
];

export default function Banner() {
  return (
    <section className="flex flex-col lg:flex-row items-stretch bg-black text-white rounded-xl overflow-hidden">
      {/* Left Section (Text) */}
      <div className="flex flex-col justify-center p-4 lg:p-14 w-full lg:w-[45%] order-2 md:order-1">
        <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-4 leading-snug">
          Toronto Handyman <br />
          <span>Professional Handyman Services</span> <br />
          Across the Greater Toronto Area
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed max-w-md">
          Toronto Handyman delivers licensed, high-quality workmanship for
          residential and commercial projects. Our specialists offer reliable
          service, attention to detail, and long-term value.
        </p>

        <div>
          <Link
            href="/estimate"
            className="hidden sm:inline-block bg-[#E1B900] hover:bg-[#d4a900] text-white font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-2.5 sm:py-3 relative transition-all duration-300"
            style={{
              clipPath:
                "polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)",
            }}
          >
            GET AN ESTIMATE
          </Link>
        </div>
      </div>

      {/* Right Section (Image Slider) */}
      <div className="w-full lg:w-[55%] order-1 md:order-2">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          speed={3000}
          loop
          className="h-full"
        >
          {bannerImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full">
                <Image
                  src={img}
                  alt={`Banner ${idx + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
