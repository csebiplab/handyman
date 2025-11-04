import React from "react";
import Banner from "./bannerSection/Banner";
import AboutTorontoHandymanSection from "./aboutTorontoHandymanSection/AboutTorontoHandymanSection";

const BlogsPage: React.FC = () => {
  return (
    <main>
      <div className="m-x-192">
        <section>
          <Banner />
        </section>
        <section>
          <AboutTorontoHandymanSection />
        </section>
      </div>
    </main>
  );
};

export default BlogsPage;
