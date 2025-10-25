import React from "react";

const Map = () => {
  return (
    <div className="h-[295px] mt-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7098.557432329101!2d-79.390396!3d43.700299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x693caf0f0b1cafc9%3A0x69b6307f66dcf9!2sToronto%20Handyman!5e1!3m2!1sen!2sbd!4v1761330374873!5m2!1sen!2sbd"
        title="google map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;