import React from "react";
import { useState } from "react";
import { ReactComponent as FolderImage } from "../../assets/images/folder-image.svg";
import { ReactComponent as LinkImage } from "../../assets/images/link-image.svg";
import projectPreview1 from "../../assets/images/AperturePreview.png";
import projectPreview2 from "../../assets/images/SattelitePreview.png";
import projectPreview3 from "../../assets/images/PortfolioPreview.png";
import Button from "../../components/Button";
import gitLogo from "../../assets/images/icon-github.svg";
import verselLogo from "../../assets/images/verselLogo.svg";
import { scrollAvailable, scrollNotAvailable } from "../../scripts/scrollBlock";
import { Popup } from "../../components/Popup";

const projectsData = [
	{
		name: "Aperture Studio",
		technologies: ["HTML", "CSS"],
		description:
			"My first project on HTML,CSS.Also adaptive layout is implemented on it",
		verselLink: "https://aperture-studio-maket.vercel.app/",
		githubLink: "https://github.com/alexkurdyukov/Aperture-Studio-Maket",
		previewBackground: projectPreview1,
		modaleDescription:
			"My first project on which I used html css. I paid a lot of attention to adaptive layout without using frameworks. Adaptive layout is made using media queries, as well as flex and grid technologies. There are also simple animations",
	},
	{
		name: "Sattelite Images",
		technologies: ["HTML", "CSS", "JavaScript"],
		description:
			"Second project. I first time have used JavaScript, made adaptive layout and worked with keyframes animations",
		verselLink: "https://sattelite-images-maket.vercel.app/",
		githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
		previewBackground: projectPreview2,
		modaleDescription:
			"My second project, in which I used not only html, css, but also javascript. Adaptive layout based on flex and grid technologies is implemented in the work. There are a large number of animations, as well as interesting JS features, such as a slider, interactive blocks that appear when scrolling the page, form animations, etc.",
	},
	{
		name: "React Portfolio",
		technologies: ["HTML", "SCSS", "JavaScript", "React"],
		description:
			"It's my first react experiance,where i have used react states, hooks and also SCSS",
		verselLink: "https://sattelite-images-maket.vercel.app/",
		githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
		previewBackground: projectPreview3,
		modaleDescription:
			"My third project. I tried the react library on it. In the process, I created a SPA that contains several pages between which you can switch. On this project, we managed to work with states, props, basic hooks (useEffect,useState), with form validation using reactHookForm. As a bonus, a tic-tac-toe game is written using classic hooks",
	},
];

const Projects = () => {
	const [projectOpen, setProjectOpen] = useState(false);
	const [cardIndex, setCardIndex] = useState(0);
	const [projectState, setProjectState] = useState({});
	return (
		<>
			<div className="projects">
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
			</div>
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


