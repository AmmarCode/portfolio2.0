import React from "react";
import { v4 as uuidv4 } from "uuid";

import projectList from "../projectList.json";

const Projects = () => {
  return (
    <section
      className="self-center flex flex-col items-center pt-[10rem] pb-[5rem] w-full"
      id="projects"
    >
      <h2 className="text-4xl md:text-5xl mb-10 text-[#07f59a]">Projects</h2>
      <div
        className="flex flex-wrap justify-center gap-5"
        data-aos-once="true"
        data-aos-duration="700"
        data-aos-delay="500"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="linear"
      >
        {projectList.map((project, index) => {
          return (
            <div
              className="project-container flex flex-col items-center max-w-[450px] rounded-lg relative"
              key={uuidv4()}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image rounded-t-lg min-h-full min-w-full"
              />
              <div className="project-details-container absolute w-full h-full flex items-center">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-lg sm:text-xl px-3">{project.title}</h3>
                  <h4 className="text-base sm:text-lg px-3">
                    {project.techStach}
                  </h4>
                  <p className="text-sm sm:text-base px-3">
                    {project.description}
                  </p>
                  <div className="project-links-container flex justify-center gap-5">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="nav-item"
                      aria-label="Link to a project's live site"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      className="nav-item"
                      aria-label="Link to a project's github repo"
                    >
                      Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
