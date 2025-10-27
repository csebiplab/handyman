import React from "react";
import GalleryBanner from "./galleryBanner/GalleryBanner";

const GalleryPage: React.FC = () => {
  return (
    <main>
      <section className="p-x-192 mt-10">
        <GalleryBanner />
      </section>
    </main>
  );
};

export default GalleryPage;
