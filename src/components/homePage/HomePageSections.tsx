import AboutUs from "./aboutUs/AboutUs";
import WhyChooseUs from "./aboutUs/WhyChooseUs";
import AddRating from "./addRating/AddRating";
import Banner from "./bannerSection/Banner";
import CommercialServices from "./commercialServices/CommercialServices";
import GetInTouch from "./getInTouch/GetInTouch";
import OurClientSaying from "./ourClientSaying/OurClientSaying";
import OurServiceAreas from "./OurServiceAreas/OurServiceAreas";
import OurServices from "./ourServices/OurServices";
import PastProjectsGallery from "./pastProjectsGallery/PastProjectsGallery";
import ReadyToWorkSection from "./readyToWorkSection/ReadyToWorkSection";

export default function HomePageSections() {
  return (
    <main>
      <section className="p-x-192 mt-2">
        <Banner />
      </section>
      <section>
        <AddRating />
      </section>
      <section className="p-x-192 mt-2">
        <AboutUs />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <OurServices />
      </section>
      <section className=" p-x-192">
        <CommercialServices />
      </section>
      <section className=" p-x-192">
        <PastProjectsGallery />
      </section>
      <section className=" p-x-192">
        <ReadyToWorkSection />
      </section>
      <section className=" p-x-192">
        <OurClientSaying />
      </section>
      <section className=" p-x-192">
        <OurServiceAreas />
      </section>
      <section className=" p-x-192">
        <GetInTouch />
      </section>
    </main>
  );
}
