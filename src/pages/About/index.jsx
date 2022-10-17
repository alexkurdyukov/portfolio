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

import GameIcon from "../../assets/images/gamingIcon.svg";
import GymIcon from "../../assets/images/GymIcon.svg";
import CampingIcon from "../../assets/images/CampingIcon.svg";
import BoxingIcon from "../../assets/images/BoxingIcon.svg";
import MeditationIcon from "../../assets/images/MeditationIcon.svg";
import DrawingIcon from "../../assets/images/DrawingIcon.svg";

import { useEffect } from "react";
import Button from "../../components/Button/index.jsx";
import { useKeenSlider } from "keen-slider/react";

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
					{aboutPage == "hobbies" && <Hobbies />}
					{aboutPage == "biography" && <Biography />}
				</div>
			</div>
		</div>
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
				<li key={index} className="hobbie">
					<div className="hobbie__image-container">
						<img key={index} className="hobbie__image" src={hobbie.imageLink} />
					</div>
					<span className="hobbie__name">{hobbie.name}</span>
				</li>
			))}
		</ul>
	);
};

// const Slider = () => {
// 	const [sliderRef, instanceRef] = useKeenSlider(
// 		{
// 			slideChanged() {
// 				console.log("slide changed");
// 			},
// 		},
// 		[]
// 	);

// 	return (
// 		<div ref={sliderRef} className="keen-slider">
// 			<div className="keen-slider__slide">1</div>
// 			<div className="keen-slider__slide">2</div>
// 			<div className="keen-slider__slide">3</div>
// 		</div>
// 	);
// };

const Biography = () => {
	return (
		<div className="biography">
			<div className="biography-slider">
				<div className="biography__button-before"></div>
				<div className="biography__image-container">
					<img className="biography__image" src={secondPhoto} />
				</div>
				<div className="biography__button-after"></div>
			</div>
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

export { About };
