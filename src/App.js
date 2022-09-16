import React, { useState, useEffect } from "react";

import "./assets/scss/index.scss";

import Game from ".//components/Game/index";
import Button from "./components/Button";
import secondPhoto from "./assets/images/mainPhoto2.jpg";
import { Socials } from "./components/Socials";
import { Header } from "./components/Header/index";

const IntroContent = () => {
	return (
		<div className="intro__wrapper">
			<div className="intro__content">
				<p className="intro__title">Hi, my name is</p>
				<h1 className="intro__container">
					<span className="intro__name">Kurdyukov Alexey</span>
					<span className="intro__subtitle">I create solution from coding</span>
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
	);
};

const Intro = () => {
	return (
		<div className="intro">
			<IntroContent />
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
			<div className="about__wrapper">
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

const SideBlock = () => {
	return (
		<div className="sideblock">
			<pre className="sideblock__content">
				<div>iAm = {"{"} </div>
				<div>name : "Alex",</div>
				<div>surname: "Kurdyukov",</div>
				<div>age : "23",</div>
				<div>sex: "male",</div>
				<div>education: "MPEI",</div>
				<div>location: "Moscow",</div>
				<div>{"}"} </div>
			</pre>
		</div>
	);
};

const App = () => {
	const [page, setPage] = useState('intro');
	// useEffect(() => {
	// 	console.log(page);
	// }, [page]);
	return (
		<div className="layout">
			<Header setPage={setPage} />
			<div className="wrapper">
				{page === "intro" && <Intro />}
				{page === "about" && <About />}
			</div>
			<Socials />
			{/* <SideBlock /> */}
		</div>
	);
};

export default App;
