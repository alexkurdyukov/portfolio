import React from "react";
import { useState } from "react";
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
		previewBackground: "../../assets/images/AperturePreview.png",
	},
	{
		name: "Sattelite Images",
		technologies: ["HTML", "CSS", "JavaScript"],
		description:
			"Second project. I first time have used JavaScript, made adaptive layout and worked with keyframes animations",
		verselLink: "https://sattelite-images-maket.vercel.app/",
		githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
		previewBackground: "../../assets/images/SattelitePreview.png",
	},
	{
		name: "React Portfolio",
		technologies: ["HTML", "SCSS", "JavaScript", "React"],
		description:
			"It's my first react experiance,where i have used react states, hooks and also SCSS",
		verselLink: "https://sattelite-images-maket.vercel.app/",
		githubLink: "https://github.com/alexkurdyukov/Sattelite-Images-Maket",
		previewBackground: "../../assets/images/PortfolioPreview.png",
	},
];

const Projects = () => {
	const [projectOpen, setProjectOpen] = useState(false);
	const [cardIndex, setCardIndex] = useState(0);
	const [projectState, setProjectState] = useState({})
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
								setProjectState(project)
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
					<div className="project-popup wrapper">
						<div className="project-container">
							<h3 className="project-popup__header">
								{projectsData[cardIndex].name}
							</h3>
							<div
								className="project-popup__intro"
							></div>
							<div className="project-popup__description">
								{projectsData[cardIndex].description}
							</div>
						</div>
						<div className="project-popup__buttons"></div>
					</div>
					<div
						onClick={() => {
							setProjectOpen(false);
						}}
						className="popup__overlay"
					></div>
				</>
			)}
		</>
	);
};

export { Projects };
