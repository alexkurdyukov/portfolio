import React, { useState, useEffect } from "react";
import "./assets/scss/index.scss";
import Game from ".//components/Game/index";
import Button from "./components/Button";
import secondPhoto from "./assets/images/mainPhoto2.jpg";
import { ReactComponent as FolderImage } from "./assets/images/folder-image.svg";
import { ReactComponent as LinkImage } from "./assets/images/link-image.svg";
import { Socials } from "./components/Socials";
import { Header } from "./components/Header/index";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { useForm } from "react-hook-form";
import { Hystogramm } from "./UI/Hystogramm";
import { Input } from "./UI/Input";
import { Textarea } from "./UI/Textarea";

const Intro = (page, setPage) => {
  return (
    <div className="intro">
      <div className="intro__wrapper wrapper">
        <div className="intro__content">
          <p className="intro__title">Hi, my name is</p>
          <h1 className="intro__container">
            <span className="intro__name">Kurdyukov Alexey</span>
            <span className="intro__subtitle">
              I create solution from coding
            </span>
          </h1>
          <p className="intro__description">
            I'm very curious and a self-driven person with a big passion for
            development in general. I'm a very positive and ego-free in approach
            to all aspect of my life, and I carry a strong work ethics with me
            every place I go. I'm the happiest when I am creating, learning,
            exploring and thinking on how to make things better.
          </p>
          <Button
            className="intro__button"
            onClick={() => {
              setPage("contacts");
            }}
          >
            Say Hello
          </Button>
        </div>
        <Game />
      </div>
    </div>
  );
};

const About = () => {
  const windowWidth = useWindowWidth();
  return (
    <div className="about">
      <div className="about__wrapper wrapper">
        <div className="about__header-container">
          <h2 className="about__header">About me</h2>
          <div className="about__stripe"></div>
        </div>
        <div className="about__photo-container">
          {windowWidth && windowWidth <= 900 && (
            <img src={secondPhoto} className="about__photo"></img>
          )}
        </div>
        <div className="about__container">
          <div className="about__photo-container">
            {windowWidth && windowWidth > 900 && (
              <img src={secondPhoto} className="about__photo"></img>
            )}
          </div>
          <div className="about__content">
            <div className="about__content-element">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </div>
            <div className="about__content-element">
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node and React.
            </div>
          </div>
        </div>
        <Hystogramm />
      </div>
    </div>
  );
};

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

const Contacts = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => console.log("Отправлено", data);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__wrapper">
        <h2 className="form__header">Get in touch</h2>
        <p className="form__description">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <div className="form__container">
          <Input
            value="First name"
            name={`firstName`}
            errors={errors}
            register={register}
            regular={/^[a-z ,.'-]+$/}
          />
          <Input
            value="Second name"
            name={`secondName`}
            errors={errors}
            register={register}
            regular={/^[a-z ,.'-]+$/}
          />
          <Input
            value="Phone number"
            name={`phoneNumber`}
            errors={errors}
            register={register}
            regular={/^[0-9]{9,12}$/}
          />
          <Input
            value="Email"
            name={`email`}
            errors={errors}
            register={register}
            regular={/[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/}
          />
        </div>
        <Textarea areaName={`Message :`} />
        <div className="form__buttons">
          <Button type={`submit`} disabled={!isValid}>
            Sumbit
          </Button>

          <Button
            onClick={(el) => {
              setButtonDisabled(!isButtonDisabled);
              reset();
            }}
            type={"reset"}
          >
            Reset
          </Button>
        </div>
      </div>
    </form>
  );
};

const App = () => {
  const [page, setPage] = useState("intro");
  const windowWidth = useWindowWidth();
  return (
    <div className="layout">
      <Header page={page} setPage={setPage} />

      {page === "intro" && <Intro />}

      {page === "about" && <About />}

      {page === "projects" && <Projects />}

      {page === "contacts" && <Contacts />}

      {windowWidth && windowWidth > 1650 && <Socials />}
    </div>
  );
};

export default App;
