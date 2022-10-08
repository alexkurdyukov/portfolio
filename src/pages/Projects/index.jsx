import React from "react";
import { ReactComponent as FolderImage } from "../../assets/images/folder-image.svg";
import { ReactComponent as LinkImage } from "../../assets/images/link-image.svg";

const projectsData = [
    {
      name: "Aperture Studio",
      technologies: ["HTML", "CSS"],
      description:
        "My first project on HTML,CSS.Also adaptive layout is implemented on it",
      verselLink: "https://aperture-studio-maket.vercel.app/",
      githubLink: "https://github.com/alexkurdyukov/Aperture-Studio-Maket",
    },
    {
      name: "Sattelite Images",
      technologies: ["HTML", "CSS", "JavaScript"],
      description:
        "Second project. I first time have used JavaScript, made adaptive layout and worked with keyframes animations",
      verselLink: "https://sattelite-images-maket.vercel.app/",
      githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
    },
    {
      name: "React Portfolio",
      technologies: ["HTML", "SCSS", "JavaScript", "React"],
      description:
        "It's my first react experiance,where i have used react states, hooks and also SCSS",
      verselLink: "https://sattelite-images-maket.vercel.app/",
      githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
    },
  ];
  
  const Projects = () => {
    return (
      <div className="projects">
        <div className="projects__wrapper wrapper">
          {projectsData.map((project, index) => (
            <div className="project" key={index}>
              <div className="project__icons icons">
                <div className="icons__folder">
                  <FolderImage />
                </div>
                <div className="icons__link">
                  <LinkImage />
                </div>
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
      </div>
    );
  };

  export {Projects}