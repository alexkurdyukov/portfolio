import React from "react";
import { useState } from "react";
import { ReactComponent as FolderImage } from "../../assets/images/folder-image.svg";
import { ReactComponent as LinkImage } from "../../assets/images/link-image.svg";
import projectPreview1 from "../../assets/images/AperturePreview.png";
import projectPreview2 from "../../assets/images/SattelitePreview.png";
import projectPreview3 from "../../assets/images/PortfolioPreview.png";
import projectPreview4 from "../../assets/images/mapPreview.png";
import Button from "../../components/Button";
import gitLogo from "../../assets/images/icon-github.svg";
import verselLogo from "../../assets/images/verselLogo.svg";
import {scrollNotAvailable } from "../../utils/scrollBlock";
import { Popup } from "../../components/Popup";

const projectsData = [
  {
    name: "Aperture Studio",
    technologies: ["HTML", "CSS"],
    description:
      "Simply html and css project with accent on adaptive layout",
    verselLink: "https://aperture-studio-maket.vercel.app/",
    githubLink: "https://github.com/alexkurdyukov/Aperture-Studio-Maket",
    previewBackground: projectPreview1,
    modaleDescription:
      "Simply project on html and css. I paid a lot of attention to adaptive layout without using frameworks. Adaptive layout is made using media queries, as well as flex and grid technologies. There are also  animations",
  },
  {
    name: "Sattelite Images",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "Html/scss/JS project. I did JavaScript logics, adaptive layout and worked with keyframes animations",
    verselLink: "https://sattelite-images-maket.vercel.app/",
    githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
    previewBackground: projectPreview2,
    modaleDescription:
      "My that project I used html, css and native javascript. Adaptive layout based on flex and grid technologies is implemented in the work. There are a large number of animations, as well as interesting JS features",
  },
  {
    name: "React Portfolio",
    technologies: ["HTML", "SCSS", "React JS"],
    description:
      "It's my react portfolio. I wrote tic tac toe , some switchable pages about me, and form with validation ",
    verselLink: "https://sattelite-images-maket.vercel.app/",
    githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
    previewBackground: projectPreview3,
    modaleDescription:
      "That is react project. I used a react library on it. In the process, I created a SPA that contains several pages between which you can switch. On this project, we managed to work with states, props, basic hooks (useEffect,useState), with form validation using reactHookForm",
  },
  {
    name: "Attraction interactive map",
    technologies: ["React", "Redux", "SCSS modules", 'Typescript'],
    description:
      "Interesting project with REST API. I used redux store to contain data logic and typescript to tipizate hooks and data",
    verselLink: "https://maps-seven.vercel.app/",
    githubLink: "https://github.com/alexkurdyukov/restaurant-app",
    previewBackground: projectPreview4,
    modaleDescription:
      "Interesting project with REST API. I use rapidAPI.com and their services to take information about cities and attractions in them. I used redux store to contain data logic and typescript to tipizate hooks and data",
  },
];

const Projects = () => {
  const [projectOpen, setProjectOpen] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [projectState, setProjectState] = useState({});
  return (
    <>
      <section className="projects">
        <div className="projects__wrapper wrapper">
          {projectsData.map((project, index) => (
            <div
              className="project"
              onClick={() => {
                setProjectOpen(true);
                setCardIndex(index);
                setProjectState(project);
                scrollNotAvailable();
              }}
              key={index}
            >
              <div className="project__icons icons">
                <a
                  href={project.verselLink}
                  className="icons__folder"
                  target="_blank"
                >
                  <FolderImage />
                </a>
                <a
                  href={project.githubLink}
                  className="icons__link"
                  target="_blank"
                >
                  <LinkImage />
                </a>
              </div>
              <div className="project__content">
                <h3 className="project__header">{project.name}</h3>
                <p className="project__description">{project.description}</p>
              </div>

              <div className="project__technologies">
                {project.technologies.map((technology, index) => (
                  <div className="technology" key={index}>
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {projectOpen && (
        <>
          <Popup setProjectOpen={setProjectOpen} projectState={projectState}>
            <div className="project-container">
              <h3 className="project-popup__header">
                <span className="project-popup__header-name">
                  <span className="project-popup_green">
                    const projectName{" "}
                  </span>{" "}
                  = '{projectState.name}'
                </span>
              </h3>
              <div className="project-popup__description">
                <span className="project-popup_green">
                  const projectDescription ={" "}
                </span>
                {`'`}
                {projectState.modaleDescription}
                {`'`}
              </div>
              <div className="project-popup__image-container">
                <img
                  src={projectState.previewBackground}
                  className="project-popup__image"
                />
              </div>
            </div>
            <div className="project-popup__technologies">
              <span className="project-popup_green">technologies</span>=[
              {projectState.technologies.map((tech, index) => (
                <div className="project-popup__technologies" key={index}>
                  {index == projectState.technologies.length - 1 ? (
                    <span>{tech}</span>
                  ) : (
                    <span>{tech}, </span>
                  )}
                </div>
              ))}
              ]
            </div>
            <div className="project-popup__buttons">
              <Button
                href={projectState.githubLink}
                linkType={true}
                className={`project-popup__button`}
              >
                <div className="project-popup__logo">
                  <img src={gitLogo} />
                </div>
                <span className="project-popup__link">visit gitHub</span>
              </Button>
              <Button
                href={projectState.verselLink}
                linkType={true}
                className={`project-popup__button`}
              >
                <div className="project-popup__logo">
                  <img src={verselLogo} />
                </div>
                <span className="project-popup__link">visit versel</span>
              </Button>
            </div>
          </Popup>
        </>
      )}
    </>
  );
};

export { Projects };
