"use client";

import React from "react";
import Image from "next/image";

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
    <section className="w-full py-10 bg-white overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-6">
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
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src="/assets/handymanHomePage/pastProjectsGalleryVideo.png"
          alt="Video Thumbnail"
          width={1200}
          height={300}
          className="object-cover w-full h-[150px] sm:h-[250px] md:h-[300px]"
        />
      </div>

      {/* Pure CSS Infinite Scroll - Pauses on hover */}
      <div className="relative mt-10 overflow-hidden">
        <div className="flex infinite-scroll-animation hover-pause">
          {[...galleryImages, ...galleryImages, ...galleryImages].map((img, idx) => (
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
    </section>
  );
};

export default PastProjectsGallery;