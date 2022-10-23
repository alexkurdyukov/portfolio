import React from "react";
import { useState } from "react";

import secondPhoto from "../../assets/images/mainPhoto2.jpg";
import thirdPhoto from "../../assets/images/mainPhoto3.jpg";
import fourthPhoto from "../../assets/images/mainPhoto4.jpg";
import fifthPhoto from "../../assets/images/mainPhoto5.jpg";
import sixthPhoto from "../../assets/images/mainPhoto6.jpg";
import seventhPhoto from "../../assets/images/mainPhoto7.jpg";

import HobbieLogo from "../../assets/images/hobbie.svg";
import BiographyLogo from "../../assets/images/biography.svg";
import EducationLogo from "../../assets/images/education.svg";
import DevLogo from "../../assets/images/devLogo.svg";
import SoftSkillsLogo from "../../assets/images/softSkills.svg";
import HardSkillsLogo from "../../assets/images/hardSkills.svg";

import GameIcon from "../../assets/images/gamingIcon.svg";
import GymIcon from "../../assets/images/GymIcon.svg";
import CampingIcon from "../../assets/images/CampingIcon.svg";
import BoxingIcon from "../../assets/images/BoxingIcon.svg";
import MeditationIcon from "../../assets/images/MeditationIcon.svg";
import DrawingIcon from "../../assets/images/DrawingIcon.svg";

import { useEffect } from "react";
import Button from "../../components/Button/index.jsx";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const infoData = [
  { name: "education", imageLink: EducationLogo },
  { name: "hobbies", imageLink: HobbieLogo },
  { name: "biography", imageLink: BiographyLogo },
  { name: "hard-skills", imageLink: HardSkillsLogo },
  { name: "soft-skills", imageLink: SoftSkillsLogo },
  { name: "dev", imageLink: DevLogo },
];

const About = () => {
  const [aboutPage, setAboutPage] = useState("education");
  return (
    <section className="about">
      <div className="about__wrapper wrapper">
        <div className="info">
          <h3 className="info__header">Information</h3>
          <div className="info__navigation">
            {infoData.map((point, index) => (
              <div
                key={index}
                className={`info-point ${
                  aboutPage == point.name ? "--active" : ""
                }`}
                onClick={() => {
                  setAboutPage(point.name);
                }}
              >
                <div className="info-point__image-container">
                  <img src={point.imageLink} />
                </div>
                <h3 className="info-point__name">{point.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="info-content">
          <h2 className="info__title">My {aboutPage}</h2>
          {aboutPage == "education" && <Education />}
          {aboutPage == "hobbies" && <Hobbies />}
          {aboutPage == "biography" && <Biography />}
          {aboutPage == "hard-skills" && <HardSkills />}
          {aboutPage == "soft-skills" && <SoftSkills />}
          {aboutPage == "dev" && <p>ljdfbnksdgnsdjkgndfg</p>}
        </div>
      </div>
    </section>
  );
};

const educationData = [
  {
    name: `School certificate`,
    time: `2006 - 2017`,
    institution: `Gimnasium №5 Sergiev-Posad`,
    type: "Inform-Math class",
    inProgress: false,
    downloadLink: ``,
  },
  {
    name: `Bachelor diploma`,
    time: `2017-2021`,
    institution: `Moscow Power Engeenering Institute`,
    type: `Electrical Power Systems and Networks`,
    inProgress: false,
    downloadLink: ``,
  },
  {
    name: `Master's diploma`,
    time: `2021-2023 `,
    institution: `Moscow Power Engeenering Institute`,
    type: `Engineering in electric power industry`,
    inProgress: true,
    downloadLink: ``,
  },
];

const hobbiesData = [
  { name: "Gaming", imageLink: GameIcon },
  { name: "Gym", imageLink: GymIcon },
  { name: "Adventure", imageLink: CampingIcon },
  { name: "Boxing", imageLink: BoxingIcon },
  { name: "Meditation", imageLink: MeditationIcon },
  { name: "Drawing", imageLink: DrawingIcon },
];

const Education = () => {
  return (
    <div className="education">
      <ul className="education-list">
        {educationData.map((diploma, index) => (
          <li className="education-list__item" key={index}>
            <a className="education__link-container">
              <span className="education__header">{diploma.name}</span>
              <div className="education__institution">
                {diploma.institution}({diploma.time})
              </div>
              <div className="education__description">{diploma.type}</div>
              <Button className={"education__button"}>download</Button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Hobbies = () => {
  return (
    <ul className="hobbies">
      {hobbiesData.map((hobbie, index) => (
        <li
          key={index}
          className="hobbie"
          style={{ animationDelay: `${index / 2.5}s` }}
        >
          <div className="hobbie__image-container">
            <img className="hobbie__image" src={hobbie.imageLink} />
          </div>
          <span className="hobbie__name">{hobbie.name}</span>
        </li>
      ))}
    </ul>
  );
};

const photoData = [
  secondPhoto,
  thirdPhoto,
  fourthPhoto,
  fifthPhoto,
  sixthPhoto,
  seventhPhoto,
];

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider slider-box">
          {photoData.map((photo, index) => (
            <div
              key={index}
              className={`keen-slider__slide number-slide${index + 1}`}
            >
              <img className="slider__image" src={photo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Biography = () => {
  return (
    <div className="biography">
      <Slider />
      <div className="biography-container">
        <span className="biography_orange">Hi everybody!</span> My name is{" "}
        <span className="biography_green">Alexey Kurdyukov</span>, I am frontend
        developer. I started my training in May 2022 and am still studying
        technologies and frameworks that arouse my interest. I started my
        training with basic technologies such as html, css, js. In the process
        of learning, I read books, watched video tutorials, wrote educational
        projects, solved problems on codewars and much more. After basic
        technologies, I began to study current technologies, such as{" "}
        <span className="biography_violet">React</span>,{" "}
        <span className="biography_violet">SASS</span>,{" "}
        <span className="biography_violet">TypeScript</span>,{" "}
        <span className="biography_violet">Redux</span>. I am very inspired by
        the study of new technologies that I can use in practice. At the moment
        I am looking for a junior developer position to start my career and
        learn from professional developers. Write to me in the contact form on
        the 'Contacts' tab or on social networks.
      </div>
    </div>
  );
};

const hardSkillsData = [
  { skillName: "HTML", skillPercent: "90%" },
  { skillName: "CSS", skillPercent: "85%" },
  { skillName: "Figma", skillPercent: "85%" },
  { skillName: "JS", skillPercent: "65%" },
  { skillName: "React", skillPercent: "35%" },
  { skillName: "TS", skillPercent: "25%" },
  { skillName: "Redux", skillPercent: "20%" },
];

const HardSkills = () => {
  const [flag, setFlag] = useState();
  useEffect(() => {
    console.log(flag);
    return () => {
      setFlag(true);
    };
  }, []);
  return (
    <div className="hard-skills">
      {hardSkillsData.map((skill, index) => (
        <div key={index} className="hard-skill">
          <div className="hard-skill__description">
            <span className="hard-skill__name">{skill.skillName}</span>
            <span className="hard-skill__level">
              {parseInt(skill.skillPercent) >= 85 && (
                <span className="hard-skill__indicator">Advanced</span>
              )}
              {parseInt(skill.skillPercent) <= 25 && (
                <span className="hard-skill__indicator">Beginner</span>
              )}
              {parseInt(skill.skillPercent) > 25 &&
                parseInt(skill.skillPercent) < 85 && (
                  <span className="hard-skill__indicator">Medium</span>
                )}
            </span>
          </div>
          <div className="hard-skill__container">
            <div
              style={{
                opacity: `${flag ? "1" : "0"}`,
                maxWidth: skill.skillPercent,
                animationDelay: `${index / 2.5}s`,
              }}
              className="hard-skill__innerline"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const softSkillData = [
  { name: `Time management` },
  { name: `Self-motivation` },
  { name: `Active communication` },
  { name: `Negotiation` },
  { name: `Conflict resolution` },
  { name: `Ability to lead` },
  { name: `Teamwork` },
];

const SoftSkills = () => {
  return (
    <div className="soft-skills">
      {softSkillData.map((softSkill, index) => (
        <div
          style={{ animationDelay: `${index / 2.5}s` }}
          key={index}
          className="soft-skill"
        >
          {softSkill.name}
        </div>
      ))}
    </div>
  );
};

const devData = [
  {
    id:1,
    time: "8 month",
    company: "self-learning",
    description:
      "I use react,sass, typescript. I have developed some react apps as PET projects. You can check it in the project page",
  },
];

const Dev = () => {
  return (
    <div className="dev">
      <div className="dev__wrapper wrapper">
        {devData.map((e, index) => (
          <div className="dev__item" key={index}>
            <h4 className="dev__time">{e.time}</h4>
            <span className="dev__company">{e.company}</span>
            <p className='dev__description'>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { About };
