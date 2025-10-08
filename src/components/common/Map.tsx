import React from "react";

const Map = () => {
  return (
    <div className="h-[295px] mt-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.4700247094456!2d-79.39310002382071!3d43.70078027109991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33376bd35b1d%3A0x8bc0b6bf062dc56f!2s224%20Millwood%20Rd%2C%20Toronto%2C%20ON%20M4S%201J7%2C%20Canada!5e0!3m2!1sen!2sbd!4v1759839469770!5m2!1sen!2sbd"
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
