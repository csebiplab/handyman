"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Play } from "lucide-react";

const PastProjectsGallery = () => {
  const galleryImages = [
    "/assets/handymanHomePage/pastProjectsGalleryImage1.png",
    "/assets/handymanHomePage/pastProjectsGalleryImage2.png",
    "/assets/handymanHomePage/pastProjectsGalleryImage3.png",
    "/assets/handymanHomePage/pastProjectsGalleryImage4.png",
    "/assets/handymanHomePage/pastProjectsGalleryImage5.png",
    "/assets/handymanHomePage/pastProjectsGalleryImage6.png",
    "/assets/handymanHomePage/pastProjectsGalleryImage7.png",
    "/assets/handymanHomePage/pastProjectsGalleryImage8.png",
  ];

  return (
    <section className="w-full py-10 bg-white">
      {/* Section Title */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2">
          Our Past Projects Gallery
        </h2>
        <svg
          viewBox="0 0 200 40"
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-6"
        >
          <path
            d="M0 30 Q100 10 200 30"
            stroke="#FACC15"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Video Section */}
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src="/assets/handymanHomePage/pastProjectsGalleryVideo.png"
          alt="Video Thumbnail"
          width={1200}
          height={300}
          className="object-cover w-full h-[150px] sm:h-[250px] md:h-[300px]"
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <button className="flex flex-col items-center">
            <div className="bg-white/90 rounded-full p-4 mb-2">
              <Play size={28} className="text-black" />
            </div>
            <span className="text-sm md:text-base font-medium">Play Now</span>
          </button>
        </div> */}
      </div>

      {/* Continuous Moving Image Slider */}
      <div className="w-full mt-6">
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode={true}
          loop={true}
          slidesPerView={2.2}
          spaceBetween={20}
          speed={3000} // slow, smooth continuous motion
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="cursor-default"
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-[220px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PastProjectsGallery;
