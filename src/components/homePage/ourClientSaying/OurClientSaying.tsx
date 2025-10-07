"use client";

import "./Review.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperSliderButton";
import Image from "next/image";
import { useState } from "react";

const breakpoints = {
  0: { slidesPerView: 1, spaceBetween: 20 },
  768: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
};

const reviews = [
  {
    google: "/assets/handymanHomePage/ourClientSayingGoogleIcon.png",
    star: "/assets/handymanHomePage/ourClientSayingStarIcon.png",
    text: `Had kitchen tiles installed by Toronto Handyman. Denys made sure every detail was perfect.`,
    author: "Jasmine Dixon",
    location: "Toronto",
  },
  {
    google: "/assets/handymanHomePage/ourClientSayingGoogleIcon.png",
    star: "/assets/handymanHomePage/ourClientSayingStarIcon.png",
    text: `Denys tiled our bathroom, and the work was flawless. Tight grout lines, perfect leveling — it feels like a luxury spa now. The service isn’t the cheapest, but the craftsmanship speaks for itself.`,
    author: "Hal Baldwin",
    location: "Toronto",
  },
  {
    google: "/assets/handymanHomePage/ourClientSayingGoogleIcon.png",
    star: "/assets/handymanHomePage/ourClientSayingStarIcon.png",
    text: `We needed repairs on our deck and fence. Denys from Toronto Handyman did a solid job, making everything sturdy and refreshed.`,
    author: "Tommy Greenwood",
    location: "Toronto",
  },
];

const OurClientSaying = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white mt-[100px] pl-6 md:pl-0">
      <div className="container pt-5">
        <div className="text-center pb-6">
          <h2 className="text-[25px] md:text-[28px] lg:text-[32px] font-bold text-gray-900">
            What Our Clients Are Saying
          </h2>
          <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-2 rounded-full" />
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={800}
          allowTouchMove={true}
          breakpoints={breakpoints}
          spaceBetween={30}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {[...reviews, ...reviews].map((slideInfo, index) => (
            <SwiperSlide
              key={index}
              className="transition-all duration-500 flex justify-center items-center mt-5"
            >
              <div
                className={`rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-500 ${
                  index === activeIndex
                    ? "w-[95%] scale-105 opacity-100 bg-white shadow-md border-gray-400"
                    : "w-[85%] scale-95 opacity-60 bg-gray-100"
                }`}
              >
                <div className="text-left py-6 px-6 md:px-8">
                  {/* Google Logo */}
                  <Image
                    src={slideInfo.google}
                    alt="Google logo"
                    width={80}
                    height={30}
                  />

                  {/* Star Rating */}
                  <div className="pt-3 flex">
                    <Image
                      src={slideInfo.star}
                      alt="star rating"
                      width={120}
                      height={20}
                    />
                  </div>

                  {/* Review Text */}
                  <p
                    className={`text-gray-800 pt-4 leading-[25px] transition-all duration-500 ${
                      index === activeIndex
                        ? "text-[15px] font-normal"
                        : "text-[14px] font-light"
                    }`}
                  >
                    {slideInfo.text}
                  </p>

                  {/* Author */}
                  <p
                    className={`pt-4 transition-all duration-500 ${
                      index === activeIndex
                        ? "text-[15px] font-bold text-gray-900"
                        : "text-[14px] font-semibold text-gray-700"
                    }`}
                  >
                    {slideInfo.author}
                  </p>

                  {/* Location */}
                  <p
                    className={`text-gray-500 transition-all duration-500 ${
                      index === activeIndex
                        ? "text-[12px] font-normal"
                        : "text-[11px] font-light"
                    }`}
                  >
                    {slideInfo.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default OurClientSaying;
