import React, { useState, useEffect } from "react";

import "./assets/scss/index.scss";

import Game from ".//components/Game/index";
import Button from "./components/Button";
import secondPhoto from "./assets/images/mainPhoto2.jpg";
import { ReactComponent as FolderImage } from "./assets/images/folder-image.svg";
import { Socials } from "./components/Socials";
import { Header } from "./components/Header/index";

const Intro = () => {
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
					<Button className="intro__button">Say Hello</Button>
				</div>
				<Game />
			</div>
		</div>
	);
};

const skillData = [
	{ skillName: "HTML", skillPercent: "90%" },
	{ skillName: "CSS", skillPercent: "85%" },
	{ skillName: "Figma", skillPercent: "85%" },
	{ skillName: "JavaScript", skillPercent: "65%" },
	{ skillName: "React", skillPercent: "25%" },
	{ skillName: "Typescript", skillPercent: "1%" },
	{ skillName: "Redux", skillPercent: "1%" },
];

const Skills = () => {
	return (
		<div className="skills">
			{skillData.map((skill) => (
				<div className="skill">
					<span className="skill__name">{skill.skillName}</span>
					<div className="skill__container">
						<div
							style={{ maxWidth: `${skill.skillPercent}` }}
							className="skill__completion"
						></div>
					</div>
				</div>
			))}
			;
		</div>
	);
};

const About = () => {
	return (
		<div className="about">
			<div className="about__header-container">
				<h2 className="about__header">About me</h2>
				<div className="about__stripe"></div>
			</div>
			<div className="about__container">
				<div className="about__content">
					<div className="about__content-element">
						Fast-forward to today, and I’ve had the privilege of working at an
						advertising agency, a start-up, a huge corporation, and a
						student-led design studio. My main focus these days is building
						accessible, inclusive products and digital experiences at
						Upstatement for a variety of clients.
					</div>
					<div className="about__content-element">
						I also recently launched a course that covers everything you need to
						build a web app with the Spotify API using Node and React.
					</div>
					<div className="about__content-element">
						Here are a few technologies I’ve been working with recently:
					</div>
					<ul className="about__technologies">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>Node.js </li>
						<li>Redux</li>
					</ul>
				</div>
				<div className="about__photo-container">
					<img src={secondPhoto} className="about__photo"></img>
				</div>
			</div>
		</div>
	);
};

const projectsData = [
	{
		name: "Aperture Studio",
		technologies: ["HTML", "CSS"],
		description:
			"My first project on HTML,CSS.Also adaptive layout is implemented on the layout",
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
		technologies: ["HTML", "SCSS", "JavaScript",'React',],
		description:
			"It's my first react experianc,where i have used react states, hooks and also SCSS",
		verselLink: "https://sattelite-images-maket.vercel.app/",
		githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
	},	
];
const Projects = () => {
	return (
		<div className="projects projects__wrapper wrapper">
			{(projectsData.map((project) => (		
				<div className="project">
					<div className="project__icons icons">
						<div className="icons__folder">
							<svg
								width="35"
								height="27"
								viewBox="0 0 35 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M31.7188 4.375H18.5938L14.2188 0H3.28125C1.46904 0 0 1.46904 0 3.28125V22.9688C0 24.781 1.46904 26.25 3.28125 26.25H31.7188C33.531 26.25 35 24.781 35 22.9688V7.65625C35 5.84404 33.531 4.375 31.7188 4.375Z"
									fill="#64FFDA"
								/>
							</svg>
						</div>
						<div className="icons__link">
							<svg
								width="35"
								height="35"
								viewBox="0 0 35 35"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M29.5312 21.875H27.3438C27.0537 21.875 26.7755 21.9902 26.5704 22.1954C26.3652 22.4005 26.25 22.6787 26.25 22.9688V30.625H4.375V8.75H14.2188C14.5088 8.75 14.787 8.63477 14.9921 8.42965C15.1973 8.22453 15.3125 7.94633 15.3125 7.65625V5.46875C15.3125 5.17867 15.1973 4.90047 14.9921 4.69535C14.787 4.49023 14.5088 4.375 14.2188 4.375H3.28125C2.41101 4.375 1.57641 4.7207 0.961056 5.33606C0.345702 5.95141 0 6.78601 0 7.65625L0 31.7188C0 32.589 0.345702 33.4236 0.961056 34.0389C1.57641 34.6543 2.41101 35 3.28125 35H27.3438C28.214 35 29.0486 34.6543 29.6639 34.0389C30.2793 33.4236 30.625 32.589 30.625 31.7188V22.9688C30.625 22.6787 30.5098 22.4005 30.3046 22.1954C30.0995 21.9902 29.8213 21.875 29.5312 21.875ZM33.3594 0H24.6094C23.1485 0 22.4185 1.77119 23.4473 2.80273L25.8897 5.24521L9.22852 21.9003C9.07557 22.0527 8.95421 22.2338 8.8714 22.4332C8.7886 22.6327 8.74597 22.8465 8.74597 23.0624C8.74597 23.2783 8.7886 23.4921 8.8714 23.6916C8.95421 23.891 9.07557 24.0721 9.22852 24.2245L10.7782 25.7715C10.9306 25.9244 11.1118 26.0458 11.3112 26.1286C11.5106 26.2114 11.7244 26.254 11.9403 26.254C12.1563 26.254 12.3701 26.2114 12.5695 26.1286C12.7689 26.0458 12.95 25.9244 13.1024 25.7715L29.7555 9.11367L32.1973 11.5527C33.2227 12.5781 35 11.8604 35 10.3906V1.64062C35 1.2055 34.8271 0.788205 34.5195 0.480528C34.2118 0.172851 33.7945 0 33.3594 0V0Z"
									fill="#A8B2D1"
								/>
							</svg>
						</div>
					</div>
					<div className="project__content">
						<h3 className="project__header">{project.name}</h3>
						<p className="project__description">{project.description}</p>
					</div>
					<div className="project__technologies">
						{project.technologies.map((technology) => (
							<div className="technology">
								{technology}
							</div>
						))}
					</div>
				</div>
			)))}
		</div>
	);
};

// const SideBlock = () => {
// 	return (
// 		<div className="sideblock">
// 			<pre className="sideblock__content">
// 				<div>iAm = {"{"} </div>
// 				<div>name : "Alex",</div>
// 				<div>surname: "Kurdyukov",</div>
// 				<div>age : "23",</div>
// 				<div>sex: "male",</div>
// 				<div>education: "MPEI",</div>
// 				<div>location: "Moscow",</div>
// 				<div>{"}"} </div>
// 			</pre>
// 		</div>
// 	);
// };

const App = () => {
	const [page, setPage] = useState("intro");
	// useEffect(() => {
	// 	console.log(page);
	// }, [page]);
	return (
		<div className="layout">
			<Header setPage={setPage} />
			{page === "intro" && <Intro />}
			{page === "about" && <About />}
			{page == "projects" && <Projects />}
			<Socials />
		</div>
	);
};

export default App;
