import AboutUs from "./aboutUs/AboutUs";
import WhyChooseUs from "./aboutUs/WhyChooseUs";
import AddRating from "./addRating/AddRating";
import Banner from "./bannerSection/Banner";
import CommercialServices from "./commercialServices/CommercialServices";
import OurServices from "./ourServices/OurServices";
import PastProjectsGallery from "./pastProjectsGallery/PastProjectsGallery";

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
    </main>
  );
}
