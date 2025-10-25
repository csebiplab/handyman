import React from "react";
import Map from "../common/Map";
import ContactUsBanner from "./contactUsBanner/ContactUsBanner";
import OfficeInfo from "./officeInfo/OfficeInfo";
import GetInTouch from "./getInTouch/GetInTouch";
import OurServiceAreas from "../aboutUsPage/OurServiceAreas/OurServiceAreas";

const ContactUsPage: React.FC = () => {
  return (
    <main>
      <section className="m-x-192 mt-8">
        <ContactUsBanner />
      </section>
      <section className="m-x-192 mt-8">
        <Map />
        <OfficeInfo />
      </section>
      <section className="m-x-192 mt-8">
        <GetInTouch />
      </section>
      <section className="m-x-192">
        <OurServiceAreas />
      </section>
    </main>
  );
};

export default ContactUsPage;
