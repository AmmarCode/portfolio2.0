import React from "react";

import { FaArrowLeft, FaArrowDown } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="self-center flex flex-col items-center pt-[10rem] pb-[3rem] w-2/3 text-center"
      data-aos-duration="1500"
      data-aos-delay="200"
      data-aos="flip-up"
      data-aos-offset="300"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <h2 className="text-4xl md:text-5xl mb-10 text-[#07f59a]">Contact me</h2>
      <h3 className="text-xl sm:text-2xl">
        Let's talk business!
      </h3>
      <p className="text-lg">
        Click on the Envelope icon to send me an email, or click on your favorite platform icon to connect with me.
      </p>
      <div className="arrow bounceLeft mb-0 sm:my-0 sm:py-0">
        <FaArrowLeft className="text-8xl hidden sm:block mt-[3rem]" />
      </div>
      <div className="arrow bounce my-2 sm:my-0 sm:py-0">
        <FaArrowDown className="text-6xl sm:hidden mt-5 " />
      </div>
    </div>
  );
};

export default Contact;
