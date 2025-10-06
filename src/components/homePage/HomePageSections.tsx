import AboutUs from "./aboutUs/AboutUs";
import AddRating from "./addRating/AddRating";
import Banner from "./bannerSection/Banner";

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
    </main>
  );
}
