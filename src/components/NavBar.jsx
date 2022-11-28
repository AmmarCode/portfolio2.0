import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FadeIn from "react-fade-in";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const NavBar = ({ showNavBar, openMenu }) => {
  const navOptions = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact me", href: "#contact" },
  ];
  const [activeNavItem, setActiveNavItem] = useState("");
  const handleSetActiveNavItem = (name) => {
    setActiveNavItem(name);
  };

  return (
    <header className="navbar-container" id="home">
      <nav>
        <FadeIn
          delay={200}
          transitionDuration={700}
          className={`nav-list fixed bg-[rgba(24,41,58,0.9)] z-50 ${
            openMenu ? "translate-x-[100vh]" : null
          } left-0 top-0 w-full h-full pt-10 pb-10 flex flex-col items-center justify-between duration-500 md:translate-x-[-100] md:duration-0 md:flex-row md:justify-end md:left-0 md:top-0 md:right-0 md:h-10 md:bg-inherit md:py-10 md:pr-5 md:bg-[rgba(24,41,58,0.9)]`}
        >
          <img
            src="/assets/AmmarCodeLogo.png"
            alt="Ammar's Logo"
            className="fixed left-[25px] top-[20px] w-[46px] h-[46px] hidden md:block"
          />
          {navOptions.map((option) => {
            return (
              <a
                href={option.href}
                className={`${
                  activeNavItem === option.name
                    ? "active-nav-item nav-item"
                    : "nav-item"
                }`}
                onClick={() => {
                  showNavBar();
                  handleSetActiveNavItem(option.name);
                }}
                key={uuidv4()}
              >
                {option.name}
              </a>
            );
          })}
          <a
            href="/assets/01AmmarResume.pdf"
            className="nav-item"
            onClick={showNavBar}
            target="_blank"
          >
            Resume
          </a>
          <a
            className={`hover:cursor-pointer fixed top-[1rem] right-[1rem] text-4xl ${
              !openMenu ? "fixed" : "hidden"
            } md:hidden`}
            onClick={showNavBar}
          >
            <FaTimes />
          </a>
        </FadeIn>
      </nav>
      <a
        className={`hover:cursor-pointer fixed top-[1rem] right-[1rem] text-4xl ${
          !openMenu ? "hidden" : "fixed"
        }  md:hidden z-10`}
        onClick={showNavBar}
      >
        <FaBars />
      </a>

      <section className="fixed bg-[rgba(24,41,58,0.9)] bottom-0 left-0 right-0 h-[3.2rem] rounded-xl sm:h-0 z-10">
        <FadeIn delay={1900} transitionDuration={1000}>
          <ul className="social-media-icon-list flex fixed left-1/2 translate-x-[-50%] gap-3 bottom-[15px] sm:flex-col sm:left-[45px] sm:bottom-[45px]">
            <li className="social-media-icon md:w-[10px]">
              <a href="mailto:ammar.code01@gmail.com">
                <FaEnvelope />
              </a>
            </li>
            <li className="social-media-icon md:w-[10px]">
              <a
                href="https://www.linkedin.com/in/ammarjalabi/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-media-icon md:w-[10px]">
              <a href="https://github.com/AmmarCode" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </FadeIn>
      </section>
    </header>
  );
};

export default NavBar;
