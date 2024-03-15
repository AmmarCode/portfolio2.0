import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="self-center flex flex-col items-center pt-[10rem] pb-[10rem]"
      id="about"
    >
      <h2 className="text-4xl md:text-5xl mb-10 text-[#07f59a]">About me</h2>
      <div
        className="w-auto flex flex-col justify-center items-center sm:flex-row gap-5"
        data-aos="fade-up"
        data-aos-duration="1050"
        data-aos-easing="linear"
        data-aos-delay="150"
        data-aos-once="true"
      >
        <img
          className="rounded-lg w-72"
          src="/assets/Ammar017.jpg"
          alt="Ammar's Image"
        />
        <p className="sm:w-1/2 text-lg">
          I am a former professional Mixed Martial Arts Fighter and Coach turned Software Engineer, embodying humility and a dedication to continuous self-improvement. 
          With a fervor for Software Engineering, I excel as a meticulous problem-solver with a keen eye for detail. 
          My adept communication skills, coupled with fluency in multiple languages (Arabic, English, Mandarin, and Turkish), enhance my ability to connect effectively.
          <br />
          <br />
          With a strong background in both Frontend and Backend Development, I am currently honing my skills in fullstack technologies. 
          Proficient in a wide array of tools including HTML, CSS, JavaScript, React.js, Redux, Tailwindcss, Bootstrap, Node.js, Express, 
          Python, Django, PostgreSQL, Git, Github, and Postman. Beyond coding, 
          I enjoy immersing myself in nature through hiking, refining my target practice abilities at the range, maintaining an active lifestyle through exercise, 
          and cherishing moments with my family and community.
        </p>
      </div>
    </section>
  );
};

export default About;
