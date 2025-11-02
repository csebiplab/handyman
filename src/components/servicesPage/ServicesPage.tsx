import React from "react";
import Banner from "./bannerSection/Banner";
import CarpentryWoodworkSection from "./carpentryWoodworkSection/CarpentryWoodworkSection";
import ReadyToWorkSection from "../homePage/readyToWorkSection/ReadyToWorkSection";
import OurClientSaying from "../homePage/ourClientSaying/OurClientSaying";
import OurServiceAreas from "../galleryPage/OurServiceAreas/OurServiceAreas";
import Map from "../common/Map";
import GetInTouch from "../homePage/getInTouch/GetInTouch";

const ServicesPage: React.FC = () => {
  return (
    <main>
      <div className="m-x-192">
        <section>
          <Banner />
        </section>
        <section>
          <CarpentryWoodworkSection />
        </section>
        <section>
          <ReadyToWorkSection />
        </section>
        <section>
          <OurClientSaying />
        </section>
        <section>
          <OurServiceAreas />
        </section>
        <section>
          <GetInTouch />
        </section>
      </div>
      <section>
        <Map />
      </section>
    </main>
  );
};

export default ServicesPage;
