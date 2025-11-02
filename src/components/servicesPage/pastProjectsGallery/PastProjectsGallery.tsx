"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function PastProjectsGallery() {
  return (
    <section className="w-full py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Our Past Projects Gallery
      </h2>

      {/* Video Section */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-6">
        <Image
          src="/assets/servicesPage/instantofvideo.png"
          alt="Project Video"
          width={1540}
          height={300}
          className="w-full h-auto object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
          <button className="flex flex-col items-center text-white hover:scale-105 transition-transform">
            <div className="bg-white/90 text-black rounded-full p-4 shadow-md">
              <Play className="w-6 h-6" />
            </div>
            <span className="mt-2 font-semibold">Play Now</span>
          </button>
        </div> */}
      </div>

      {/* Before After Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Before Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/assets/servicesPage/pastProjectsGalleryBefore.png"
            alt="Before"
            width={760}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* After Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/assets/servicesPage/pastProjectsGalleryAfter.png"
            alt="After"
            width={760}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
