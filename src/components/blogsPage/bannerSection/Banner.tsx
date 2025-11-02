"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import GetAnEstimateButton from "@/components/common/form/GetAnEstimateButton";

const bannerImages = [
  "/assets/handymanHomePage/homePageBannerImage1.png",
  "/assets/handymanHomePage/homePageBannerImage2.png",
  "/assets/handymanHomePage/homePageBannerImage3.png",
];

export default function Banner() {
  return (
    <section className="my-10 flex flex-col lg:flex-row items-stretch bg-black text-white rounded-xl overflow-hidden">
      {/* Left Section (Text) */}
      <div className="flex flex-col justify-center px-3 lg:px-8 py-6 md:py-24 w-full lg:w-[40%] order-2 md:order-1">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4 leading-snug">
          Toronto Handyman Services – Trusted, Licensed, and Professional Work
          Across the GTA
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed md:pr-10">
          When it comes to dependable handyman services in Toronto, homeowners
          and businesses trust Toronto Handyman for quality, reliability, and
          precision. Whether it’s a small repair or a complete home renovation.
        </p>

        {/* <div>
          <GetAnEstimateButton />
        </div> */}
      </div>

      {/* Right Section (Image Slider) */}
      <div className="w-full lg:w-[60%] order-1 md:order-2">
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
