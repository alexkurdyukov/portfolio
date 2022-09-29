import React, { useState, useEffect } from "react";
import "./assets/scss/index.scss";
import Game from ".//components/Game/index";
import Button from "./components/Button";
import secondPhoto from "./assets/images/mainPhoto2.jpg";
import { ReactComponent as FolderImage } from "./assets/images/folder-image.svg";
import { ReactComponent as LinkImage } from "./assets/images/link-image.svg";
import { Socials } from "./components/Socials";
import { Header, HeaderMobile } from "./components/Header/index";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { useForm } from "react-hook-form";

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
					<Button
						className="intro__button"
						onClick={() => console.log("sdfopasb")}
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
						{windowWidth && windowWidth > 1300 && <Hystogramm />}
					</div>
					<div className="about__photo-container">
						{windowWidth && windowWidth > 900 && (
							<img src={secondPhoto} className="about__photo"></img>
						)}
					</div>
				</div>
				{windowWidth && windowWidth < 1300 && <Hystogramm />}
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
	const [isForm, setForm] = useState(false);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};
	if (isForm) {
		return (
			<div className="contact" onSubmit={handleSubmit(onSubmit)}>
				<div className="contact__wrapper wrapper">
					<div className="input-container">
						<h2  className="input__header">Contact me</h2>
						<form className="input__wrapper">
							<div class="form__element">
								<input className="form__input"
									{...register("firstName", {
										required: "error!field is required",
									})}
									type="text"
									name=""
									required=""
								/>
								<label className="form__label">Name</label>
								<div className="form__error">{errors?.firstName && <p>Error! This field is required!</p>}</div>
							</div>
							<div class="form__element">
								<input className="form__input"  type="text" name="" required="" />
								<label className="form__label">Last name</label>
								<div className="form__error"></div>
							</div>
							<div class="form__element">
								<input className="form__input" type="tel" name="" required="" />
								<label className="form__label">Telephone</label>
								<div className="form__error"></div>
							</div>
							<div class="form__element">
								<input className="form__input" type="mail" name="" required="" />
								<label className="form__label">E-mail</label>
								<div className="form__error"></div>
							</div>
							<textarea className="form__textarea"></textarea>
							<div className="form__buttons">
								<button className="button__sub form__button">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<input  type="submit" value={"Submit"} />
								</button>
								<button
									className="button__back form__button"
									onClick={() => {
										setForm(!isForm);
									}}
								>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									Back
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="contacts">
			<div className="contacts__wrapper wrapper">
				<h3 className="contacts__header">Get in touch</h3>
				<p className="contacts__description">
					Although I’m not currently looking for any new opportunities, my inbox
					is always open. Whether you have a question or just want to say hi,
					I’ll try my best to get back to you!
				</p>
				<Button
					onClick={() => {
						setForm(!isForm);
					}}
				>
					Say Hello
				</Button>
			</div>
		</div>
	);
};

const skillData = [
	{ skillName: "HTML", skillPercent: "90%" },
	{ skillName: "CSS", skillPercent: "85%" },
	{ skillName: "Figma", skillPercent: "85%" },
	{ skillName: "JS", skillPercent: "65%" },
	{ skillName: "React", skillPercent: "35%" },
	{ skillName: "TS", skillPercent: "25%" },
	{ skillName: "Redux", skillPercent: "20%" },
];

const Hystogramm = () => {
	return (
		<div>
			<table className="table">
				<tr className="table__legend">
					{skillData.map((skill, index) => (
						<td key={index} className="table__cell">
							<div
								style={{ maxHeight: skill.skillPercent }}
								className="table__cell-progress"
							>
								{skill.skillPercent}
							</div>
						</td>
					))}
				</tr>
				<tr className="table__technologies">
					{skillData.map((skill, index) => (
						<th key={index} className="table__technology">
							{skill.skillName}
						</th>
					))}
				</tr>
			</table>
		</div>
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
