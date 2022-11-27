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
          I'm a former Pro Mixed Martial Arts Fighter/Coach. A humble
          professional, and a master of self-learning, always eager to get
          better. Passionate about Software Engineering, strong problem-solver
          with attention to detail. Gifted with great communication skills
          combined with a fluency in several languages (Arabic, English,
          Mandarin and Turkish).
          <br />
          <br />
          Experienced both Frontend and Backend Development, currently more
          focused on Frontend. Proficient in utilizing a wide variety of
          technologies including HTML, CSS, JavaScript, React.js, Tailwindcss,
          Bootstrap, Next.js, Node.js, Express, Python, Django, PostgreSQL, Git,
          Github, Postman...etc <br />
          <br />
          When I'm not coding, you can find me hiking in the beautiful nature,
          target practice, exercising, or just chilling with my family &
          community.
        </p>
      </div>
    </section>
  );
};

export default About;
