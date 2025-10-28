"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterImpact() {
  const images = [
    "/assets/gallery/beforeAfterImpactImage1.png",
    "/assets/gallery/beforeAfterImpactImage2.png",
    "/assets/gallery/beforeAfterImpactImage3.png",
    "/assets/gallery/beforeAfterImpactImage4.png",
    "/assets/gallery/beforeAfterImpactImage5.png",
    "/assets/gallery/beforeAfterImpactImage6.png",
  ];

  // ✅ Create refs for navigation buttons
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="w-full py-12 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900">
        Before & After <span>Impact of Works</span>
      </h2>
      <svg
        viewBox="0 0 200 40"
        xmlns="http://www.w3.org/2000/svg"
        className="w-80 h-8 mx-auto"
      >
        <path
          d="M0 30 Q100 10 200 30"
          stroke="#FACC15"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="relative mt-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          onInit={(swiper) => {
            // ✅ Attach navigation buttons after Swiper initializes
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="rounded-xl overflow-hidden"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center bg-black">
                <Image
                  src={src}
                  alt={`Before After Slide ${index + 1}`}
                  width={1542}
                  height={726}
                  className="w-full h-auto object-contain"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Custom Navigation Controls */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center w-full max-w-md">
          {/* Left line */}
          <div className="flex-1 h-[1.5px] bg-yellow-500"></div>

          {/* Buttons */}
          <div className="flex items-center gap-3 px-4">
            {/* Left (Prev) Button */}
            <button
              ref={prevRef}
              className="prev-btn w-10 h-10 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 transition hover:bg-yellow-500 hover:text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right (Next) Button */}
            <button
              ref={nextRef}
              className="next-btn w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white transition hover:bg-yellow-600"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Right line */}
          <div className="flex-1 h-[1.5px] bg-yellow-500"></div>
        </div>
      </div>
    </section>
  );
}
