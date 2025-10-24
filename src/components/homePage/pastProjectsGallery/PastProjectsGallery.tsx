"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (isPlaying) {
        video.pause();
      } else {
        await video.play();
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.error("Video play error:", err);
    }
  };

  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      {/* Section Title */}
      <div className="md:text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2">
          Our Past Projects Gallery
        </h2>
        <svg
          viewBox="0 0 200 40"
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-6 mx-auto"
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
      <div className="relative overflow-hidden rounded-xl shadow-lg group">
        <video
          ref={videoRef}
          src="/Videos/WhatsApp Video 2025-09-20 at 5.50.54 PM.mp4"
          className="w-full h-[180px] sm:h-[250px] md:h-[320px] object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Play/Pause Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button
            onClick={handlePlayPause}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white hover:scale-110 hover:bg-black/50 transition-all duration-300 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Infinite Scrolling Gallery */}
      <div className="relative mt-10 overflow-hidden">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] mx-4 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={img}
                alt={`Gallery image ${(idx % galleryImages.length) + 1}`}
                width={400}
                height={300}
                className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PastProjectsGallery;
