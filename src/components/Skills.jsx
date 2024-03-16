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
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
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
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
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
          src="https://github.com/devicons/devicon/blob/v2.16.0/icons/tailwindcss/tailwindcss-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          alt="tech-icon"
          className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white p-1 sm:p-2 rounded-lg"
          data-aos-duration="700"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
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
