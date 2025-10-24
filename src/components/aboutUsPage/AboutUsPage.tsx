import React from "react";
import AboutUsBanner from "./aboutUsBanner/AboutUsBanner";
import AboutUs from "./aboutUs/AboutUs";
import OurPromise from "./ourPromise/OurPromise";
import ServicesSection from "./servicesSection/ServicesSection";
import CommercialServices from "./commercialServices/CommercialServices";
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import GetInTouch from "./getInTouch/GetInTouch";
import Map from "../common/Map";

const AboutUsPage: React.FC = () => {
  return (
    <main>
      <section className="m-x-192">
        <AboutUsBanner />
      </section>
      <section className=" m-x-192">
        <AboutUs />
      </section>
      <section className=" m-x-192">
        <OurPromise />
      </section>
      <section className=" m-x-192">
        <ServicesSection />
      </section>
      <section className=" m-x-192">
        <CommercialServices />
      </section>
      <section className=" m-x-192">
        <OurServiceAreas />
      </section>
      <section className=" m-x-192">
        <GetInTouch />
      </section>
      <section>
        <Map />
      </section>
    </main>
  );
};

export default AboutUsPage;
