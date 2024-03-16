import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="self-center flex flex-col items-center pt-[10rem] pb-[10rem] w-full"
      id="skills"
    >
      <h2 className="text-4xl md:text-5xl mb-10 text-[#07f59a]">Skills</h2>
      <div className="w-[95%] grid grid-cols-3 place-items-center gap-5 md:gap-10 md:grid-cols-5">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/html5/html5-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/css3/css3-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/react/react-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/python/python-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/django/django-plain-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nodejs/nodejs-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/express/express-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postgresql/postgresql-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/git/git-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/vscode/vscode-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/ubuntu/ubuntu-original-wordmark.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
      </div>
    </section>
  );
};

export default Skills;
