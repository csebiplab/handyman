import React from "react";
import GalleryBanner from "./galleryBanner/GalleryBanner";
import WorkGallery from "./workGallery/WorkGallery";
import BeforeAfterImpact from "./beforeAfterImpact/BeforeAfterImpact";
import VideoGallery from "./videoGallery/VideoGallery";
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import Map from "../common/Map";

const GalleryPage: React.FC = () => {
  return (
    <main>
      <section className="p-x-192 mt-10">
        <GalleryBanner />
      </section>
      <section className="p-x-192">
        <WorkGallery />
      </section>
      <section className="p-x-192 my-12">
        <BeforeAfterImpact />
      </section>
      <section className="p-x-192">
        <VideoGallery />
      </section>
      <section className="p-x-192">
        <OurServiceAreas />
      </section>
      <section>
        <Map />
      </section>
    </main>
  );
};

export default GalleryPage;
