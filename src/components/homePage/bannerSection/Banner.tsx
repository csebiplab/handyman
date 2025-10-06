"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
      {/* Left Section */}
      <div className="flex flex-col justify-center p-8 lg:p-16 w-full lg:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Toronto Handyman <br />
          <span className="text-yellow-400">
            Professional Handyman Services
          </span>{" "}
          <br />
          Across the Greater Toronto Area
        </h2>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Toronto Handyman delivers licensed, high-quality workmanship for
          residential and commercial projects. Our specialists offer reliable
          service, attention to detail, and long-term value.
        </p>

        <Link
          href="#"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition-all w-fit"
        >
          GET AN ESTIMATE
        </Link>
      </div>

      {/* Right Section - Slider */}
      <div className="w-full lg:w-1/2">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
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
