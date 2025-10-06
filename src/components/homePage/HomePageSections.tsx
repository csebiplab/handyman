import AboutUs from "./aboutUs/AboutUs";
import WhyChooseUs from "./aboutUs/WhyChooseUs";
import AddRating from "./addRating/AddRating";
import Banner from "./bannerSection/Banner";
import OurServices from "./ourServices/OurServices";

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
    </main>
  );
}
