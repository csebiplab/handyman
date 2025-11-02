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
      <div className="flex flex-col justify-center px-3 lg:px-14 py-6 md:py-24 w-full lg:w-[45%] order-2 md:order-1">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4 leading-snug">
          Carpentry & Woodwork Services: Custom, Durable, Precision
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed max-w-[500px]">
          At Toronto Handyman, we specialize in delivering custom, durable, and
          precise carpentry and woodwork services. Our expert team crafts
          high-quality wood solutions that perfectly fit your space, enhancing
          both functionality and aesthetics.
        </p>

        {/* <div>
          <GetAnEstimateButton />
        </div> */}
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
