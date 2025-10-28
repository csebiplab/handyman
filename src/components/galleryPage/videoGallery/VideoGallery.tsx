"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoGallery() {
  const images = [
    { id: 1, src: "/assets/videos/video1.jpg" },
    { id: 2, src: "/assets/videos/video2.jpg" },
    { id: 3, src: "/assets/videos/video3.jpg" },
    { id: 4, src: "/assets/videos/video4.jpg" },
  ];

  return (
    <section className="w-full py-12 bg-white">
      {/* Title */}
      <div className="mb-10 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block relative">
          Video of <span className="text-gray-800">Our Work</span>
          {/* Yellow curved underline */}
          <svg
            viewBox="0 0 200 40"
            xmlns="http://www.w3.org/2000/svg"
            className="w-80 h-8 mb-10 mx-auto" // ⬅️ wider and slightly taller
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

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-xl shadow-sm cursor-pointer"
          >
            {/* Thumbnail */}
            <Image
              src={image.src}
              alt={`Work ${image.id}`}
              width={400}
              height={280}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
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
        ))}
      </div>
    </section>
  );
}
