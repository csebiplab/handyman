"use client";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/autoplay";

import { SwiperButton } from "./SwiperButton";
import "./area.css";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const maps = [
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369104.4793833133!2d-79.70773178910238!3d43.71826384376133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sca!4v1711192683290!5m2!1sen!2sca",
    location: "Toronto",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115765.29582683683!2d-79.5372831!3d43.7615373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33349f4b4bdf%3A0x68d8e8f7f2a178d8!2sNorth%20York%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1711192748851!5m2!1sen!2sca",
    location: "North York",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115792.30305609303!2d-79.321787!3d43.7730774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1d97b1a014f%3A0x7e6e0b1a5f61a048!2sScarborough%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1711192851151!5m2!1sen!2sca",
    location: "Scarborough",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183980.1257805948!2d-79.5931173754818!3d43.90369790797781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a4936291733%3A0x5201760ad6b142ed!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sca!4v1711192914194!5m2!1sen!2sca",
    location: "Richmond Hill",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.5428818088157!2d-79.55631162402474!3d43.64685177216179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d2999071e79%3A0x8a516a1cc7f61a0d!2sEtobicoke%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1711192951115!5m2!1sen!2sca",
    location: "Etobicoke",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226635.40281346606!2d-79.73074876561878!3d43.83696658264317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b268883243a77%3A0xdd95317585aa054b!2sVaughan%2C%20ON%2C%20Canada!5e1!3m2!1sen!2sbd!4v1762603898756!5m2!1sen!2sbd",
    location: "Vaughan",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114179.49570958149!2d-79.99580607670839!3d43.38127441551199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b63d2965d93b7%3A0xa44a27764c2b554f!2sBurlington%2C%20ON%2C%20Canada!5e1!3m2!1sen!2sbd!4v1762604039857!5m2!1sen!2sbd",
    location: "Burlington",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114053.67766223439!2d-79.70678173851367!3d43.448041497457666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5b8b8f729979%3A0x5037b28c7231bd0!2sOakville%2C%20ON%2C%20Canada!5e1!3m2!1sen!2sbd!4v1762604139835!5m2!1sen!2sbd",
    location: "Oakville",
  },
];

const OurServiceAreas = ({ classNames }: { classNames?: any }) => {
  return (
    <div className={`${classNames ? classNames?.bg : ""} container pb-10 mb-5`}>
      <div
        className={`${
          classNames ? classNames?.pdy : "2xl:py-[55px] py-[30px]"
        } md:mx-0 xs:mx-[30px]`}
      >
        {/* ======= Section Title ======= */}
        <div className="text-center mb-10">
          <h2 className="text-[25px] md:text-[28px] lg:text-[32px] font-bold text-gray-900">
            Service Areas
          </h2>
          <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-2 rounded-full" />
          <p className="text-base md:text-lg text-gray-700 mt-4">
            We offer services across the Greater Toronto Area, including:
          </p>
        </div>

        {/* ======= Map Cards ======= */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={2000}
          allowTouchMove={true}
          breakpoints={breakpoints}
          className="!px-8 !xl:px-0"
        >
          {maps.map((loc, i) => (
            <SwiperSlide key={i} className="relative rounded-2xl">
              <div className="relative shadow-md overflow-hidden rounded-2xl">
                {/* Map Container with Hover Effect */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <iframe
                    src={loc.src}
                    height="260"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-2xl"
                    title={`Google Map of ${loc.location}`}
                  ></iframe>

                  {/* Hover Overlay - Only on Map Area */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-90 rounded-t-2xl">
                    <button
                      aria-label="Visit map"
                      className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-900 hover:bg-gray-200 transition duration-300"
                    >
                      Visit Map
                    </button>
                  </div>
                </div>

                {/* Location Label - No Hover Effect */}
                <p className="text-white font-semibold py-3 text-center bg-black text-[16px] rounded-b-2xl">
                  {loc.location}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurServiceAreas;
