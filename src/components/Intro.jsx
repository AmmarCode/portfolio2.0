import React from "react";
import FadeIn from "react-fade-in";

const Intro = () => {
  return (
    <section className="self-center my-[25rem] ">
      <FadeIn delay={800} transitionDuration={1000}>
        <img
          src="/assets/AmmarCodeLogo.png"
          alt="Ammar's Logo"
          className="absolute left-[25px] top-[20px] w-[46px] h-[46px] z-10  md:hidden"
        />
        <div className="self-center ">
          <p className="text-lg md:text-xl text-[#07f59a]">Hello, my name is</p>
          <h1 className="text-4xl md:text-8xl">Ammar Jalabi.</h1>
          <h2 className="text-lg md:text-2xl">
            I'm a Software Engineer based in Istanbul, TÜrkiye.
          </h2>
        </div>
      </FadeIn>
    </section>
  );
};

export default Intro;
