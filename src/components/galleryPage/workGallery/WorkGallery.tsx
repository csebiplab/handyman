"use client";

import Image from "next/image";
import React from "react";

const galleryImages = [
  "/assets/gallery/workGalleryImage1.png",
  "/assets/gallery/workGalleryImage2.png",
  "/assets/gallery/workGalleryImage3.png",
  "/assets/gallery/workGalleryImage4.png",
  "/assets/gallery/workGalleryImage5.png",
  "/assets/gallery/workGalleryImage6.png",
  "/assets/gallery/workGalleryImage7.png",
  "/assets/gallery/workGalleryImage8.png",
  "/assets/gallery/workGalleryImage9.png",
  "/assets/gallery/workGalleryImage10.png",
  "/assets/gallery/workGalleryImage11.png",
  "/assets/gallery/workGalleryImage12.png",
  "/assets/gallery/workGalleryImage13.png",
];

export default function WorkGallery() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Gallery of Work in <span className="">Toronto Handyman</span>
      </h2>
      <svg
        viewBox="0 0 200 40"
        xmlns="http://www.w3.org/2000/svg"
        className="w-40 h-6 mb-4"
      >
        <path
          d="M0 30 Q100 10 200 30"
          stroke="#FACC15"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300
              ${
                index === 0
                  ? "col-span-2 row-span-2 aspect-[2/2]"
                  : "aspect-square"
              }`}
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
