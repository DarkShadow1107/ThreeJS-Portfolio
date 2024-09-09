import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import Tooltip from "./Tooltip";
import { github } from "../../assets";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { projects } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ project: TProject; index: number }> = ({
  project,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`project-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [index]);

  return (
    <div
      id={`project-${index}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: "opacity 0.75s ease-out, transform 0.75s ease-out",
      }}
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#afaad1b3"
        glareBorderRadius="1rem"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[360px]">
          <div className="relative w-full h-[230px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(project.sourceCodeLink, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white text-[24px] font-bold">
              <Tooltip text="Live Demo">
                <div
                  onClick={() => window.open(project.sourceLiveDemoLink, "_blank")}
                  className="cursor-pointer relative progress-underline"
                >
                  {project.name}
                </div>
              </Tooltip>
            </h3>
            <p className="text-secondary mt-2 text-[14px]">
              {project.description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl">
          {config.sections.works.content}
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.name}-${index}`} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
