"use client";

import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VideoGallery() {
  const videos = [
    { id: 1, src: "/Videos/galleryVideo1.mp4" },
    { id: 2, src: "/Videos/galleryVideo2.mp4" },
    { id: 3, src: "/Videos/galleryVideo3.mp4" },
    { id: 4, src: "/Videos/galleryVideo4.mp4" },
    { id: 5, src: "/Videos/galleryVideo5.mp4" },
    { id: 6, src: "/Videos/galleryVideo6.mp4" },
    { id: 7, src: "/Videos/galleryVideo7.mp4" },
    { id: 8, src: "/Videos/galleryVideo8.mp4" },
  ];

  return (
    <section className="w-full py-12 bg-white">
      {/* Title */}
      <div className="mb-10 relative text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block relative">
          Video of <span className="text-gray-800">Our Work</span>
          <svg
            viewBox="0 0 200 40"
            xmlns="http://www.w3.org/2000/svg"
            className="w-80 h-8 mb-10 mx-auto"
          >
            <path
              d="M0 30 Q100 10 200 30"
              stroke="#FACC15"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
        }}
        className="px-4"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="relative group overflow-hidden rounded-xl shadow-sm cursor-pointer">
              {/* Video Thumbnail */}
              <video
                src={video.src}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                muted
                loop
                playsInline
              />

              {/* Light gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent group-hover:from-black/30 transition-all duration-500" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Play size={26} fill="white" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
