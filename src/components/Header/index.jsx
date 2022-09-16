import React from "react";
import { useEffect } from "react";
import Button from "../Button";

const headerData = [
	{ name: "intro", id: "01" },
	{ name: "about", id: "02" },
	{ name: "projects", id: "03" },
	{ name: "contact", id: "04" },
];

const Header = ({ setPage }) => {
	return (
		<div className="header">
			<div className="header__wrapper">
				<svg
					className="header__logo"
					width="120"
					height="96"
					viewBox="0 0 120 96"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M58 0L119.055 96H55.3064H0L58 0Z" fill="#64FFDA" />
					<path
						d="M58 9L110 90.5H76L82.5 71L70.5 96H54.2013L18.5 75L37 44L58 9Z"
						fill="#020C1B"
					/>
				</svg>
				<nav className="header__nav">
					{headerData.map((item) => (
						<div
							className="nav__item"
							key={item.id}
							onClick={() => {
								setPage(item.name);
							}}
						>
							<span className="header__number">{item.id}.</span> {item.name}
						</div>
					))}
				</nav>
				<Button>Resume</Button>
			</div>
		</div>
	);
};

export { Header };
