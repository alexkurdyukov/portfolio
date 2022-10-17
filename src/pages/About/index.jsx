import React from "react";
import { useState } from "react";
import { Hystogramm } from "../../UI/Hystogramm";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import secondPhoto from "../../assets/images/mainPhoto2.jpg";
import HobbieLogo from "../../assets/images/hobbie.svg";
import BiographyLogo from "../../assets/images/biography.svg";
import EducationLogo from "../../assets/images/education.svg";
import DevLogo from "../../assets/images/devLogo.svg";
import SoftSkillsLogo from "../../assets/images/softSkills.svg";
import HardSkillsLogo from "../../assets/images/hardSkills.svg";
import { useEffect } from "react";
import Button from "../../components/Button/index.jsx";

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
  useEffect(() => {
    console.log(aboutPage);
  }, [aboutPage]);
  return (
    <div className="about">
      <div className="about__wrapper wrapper">
        <div className="info">
          <h3 className="info__header">Information</h3>
          <div className="info__navigation">
            {infoData.map((point, index) => (
              <div
                key={index}
                className="info-point"
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
          {aboutPage == 'hobbies' && <Hobbies/>}
        </div>
      </div>
    </div>
  );
};

export { About };

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

const Education = () => {
  return (
    <div className="education">
      <ul className="education-list">
        {educationData.map((diploma, index) => (
          <li className="education-list__item" key={index}>
            <a className="education__link-container">
              <h3 className="education__header">{diploma.name}</h3>
              <div className="education__institution">
                {diploma.institution}
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

const hobbiesData = [
  { name: "Gaming", imageLink: `` },
  { name: "Gym", imageLink: `` },
  { name: "Camping", imageLink: `` },
  { name: "Boxing", imageLink: `` },
  { name: "Meditation", imageLink: `` },
  { name: "Drawing", imageLink: `` },
];

const Hobbies = () => {
  return (
    <ul className="hobbies">
      {hobbiesData.map((hobbie, index) => (
        <li key={index} className="hobbie">
          <div className="hobbie__image-container">
            <img className="hobbie__image" />
          </div>
          <span className="hobbie__name">{hobbie.name}</span>
        </li>
      ))}
    </ul>
  );
};
