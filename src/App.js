import React, { useState } from "react";
import Game from ".//components/Game/index";
import ".//assets/scss/components/_index.scss";
import Button from "./components/Button";
import mainPhoto from './assets/images/mainPhoto.jpg';
import secondPhoto from './assets/images/mainPhoto2.jpg'

const HeaderNav = () => {
	return (
		<div className="header__nav">
			<span className="nav__item">About</span>
			<span className="nav__item">Skills</span>
			<span className="nav__item">Projects</span>
			<span className="nav__item">Contact</span>
			<Button>Resume</Button>
		</div>
	);
};

const Header = () => {
	return (
		<div className="header">
			<svg
				className="header__logo"
				width="90"
				height="60"
				viewBox="0 0 138 99"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_d_5_83)">
					<line
						x1="68.4059"
						y1="0.291912"
						x2="4.40594"
						y2="89.2919"
						stroke="#64FFDA"
					/>
				</g>
				<g filter="url(#filter1_d_5_83)">
					<line x1="4" y1="89.5" x2="58" y2="89.5" stroke="#64FFDA" />
				</g>
				<g filter="url(#filter2_d_5_83)">
					<line
						x1="78.9997"
						y1="89.5372"
						x2="134"
						y2="89.5007"
						stroke="#64FFDA"
					/>
				</g>
				<g filter="url(#filter3_d_5_83)">
					<line
						x1="133.596"
						y1="89.2949"
						x2="68.5962"
						y2="0.294894"
						stroke="#64FFDA"
					/>
				</g>
				<g filter="url(#filter4_d_5_83)">
					<line
						x1="68.4116"
						y1="16.2839"
						x2="28.4116"
						y2="74.2839"
						stroke="#64FFDA"
					/>
				</g>
				<g filter="url(#filter5_d_5_83)">
					<line
						x1="28.2353"
						y1="73.5588"
						x2="58.2353"
						y2="89.5588"
						stroke="#64FFDA"
					/>
				</g>
				<g filter="url(#filter6_d_5_83)">
					<path d="M68.5 15.5L133.5 89.5" stroke="#64FFDA" />
				</g>
				<g filter="url(#filter7_d_5_83)">
					<line
						x1="78.5904"
						y1="89.7133"
						x2="92.5904"
						y2="69.7133"
						stroke="#64FFDA"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_5_83"
						x="3.8147e-06"
						y="0"
						width="72.8119"
						height="97.5838"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_83"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_83"
							result="shape"
						/>
					</filter>
					<filter
						id="filter1_d_5_83"
						x="0"
						y="89"
						width="62"
						height="9"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_83"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_83"
							result="shape"
						/>
					</filter>
					<filter
						id="filter2_d_5_83"
						x="74.9993"
						y="89.0007"
						width="63.0007"
						height="9.03656"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_83"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_83"
							result="shape"
						/>
					</filter>
					<filter
						id="filter3_d_5_83"
						x="64.1924"
						y="0"
						width="73.8076"
						height="97.5898"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_83"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_83"
							result="shape"
						/>
					</filter>
					<filter
						id="filter4_d_5_83"
						x="24"
						y="16"
						width="48.8232"
						height="66.5677"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_83"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_83"
							result="shape"
						/>
					</filter>
					<filter
						id="filter5_d_5_83"
						x="24"
						y="73.1177"
						width="38.4706"
						height="24.8823"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_83"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_83"
							result="shape"
						/>
					</filter>
					<filter
						id="filter6_d_5_83"
						x="64.1243"
						y="15.17"
						width="73.7513"
						height="82.6599"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_83"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_83"
							result="shape"
						/>
					</filter>
					<filter
						id="filter7_d_5_83"
						x="74.1808"
						y="69.4265"
						width="22.8192"
						height="28.5735"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_5_83"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_5_83"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
			<HeaderNav />
		</div>
	);
};

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
					<div className="about__content-element">Fast-forward to today, and I’ve had the privilege of working at an
					advertising agency, a start-up, a huge corporation, and a student-led
					design studio. My main focus these days is building accessible,
					inclusive products and digital experiences at Upstatement for a
					variety of clients.</div>
					<div className="about__content-element">I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node and React.</div>
					<div className="about__content-element">Here are a few technologies I’ve been working with recently:</div>
					<ul className="about__technologies">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript (ES6+)</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>Node.js </li>
						<li>Redux</li>
					</ul>
				</div>
				<img src={secondPhoto} className="about__photo"></img>
			</div>
		</div>
	);
};


const App = () => {
	return (
		<div className="layout">
			<Header />
			<About />
		</div>
	);
};

export default App;
