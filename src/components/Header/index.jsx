import React, { useRef } from "react";
import { useEffect } from "react";
import Button from "../Button";
import { ReactComponent as HeaderLogo } from "../../assets/images/header-logo.svg";
import { useState } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const headerData = [
	{ name: "intro", id: "01" },
	{ name: "about", id: "02" },
	{ name: "projects", id: "03" },
	{ name: "contacts", id: "04" },
];

const HeaderDesktop = ({ page, setPage }) => {
	return (
		<>
			<div className="header__logo-container">
				<HeaderLogo />
			</div>
			<nav className={`header__nav nav`}>
				{headerData.map((item) => (
					<div
						className={`nav__item ${item.name === page ? "--active" : ""}`}
						key={item.id}
						onClick={() => {
							setPage(item.name);
						}}
					>
						<span className="nav__item-number">{item.id}</span>.{" "}
						<span className="nav__item-text">{item.name}</span>
					</div>
				))}
			</nav>
			<Button linkType>Resume</Button>
		</>
	);
};

const HeaderMobile = ({ setPage, page }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<div className={`header-mobile__menu ${isOpen ? "--active" : ""}`}>
				<div className="mobile-menu">
					{headerData.map((item) => (
						<div
							onClick={() => {
								setPage(item.name);
							}}
							className="mobile-menu__element"
							key={item.id}
						>
							<span className="mobile-menu__number">{item.id}</span>.{" "}
							<span className="mobile-menu__text">{item.name}</span>
						</div>
					))}
				</div>
			</div>
			<div className="header-mobile__logo">
				<HeaderLogo />
			</div>
			<div
				onClick={() => setOpen(!isOpen)}
				className={`burger burger__container ${isOpen ? "--active" : ""}`}
			>
				<div className="burger__wrapper">
					<div className="burger_top"></div>
					<div className="burger_middle"></div>
					<div className="burger_bottom"></div>
				</div>
			</div>
		</>
	);
};

const Header = ({ setPage, page }) => {
	const windowWidth = useWindowWidth();
	return (
		<div className="header">
			<div className="header__wrapper">
				{windowWidth && windowWidth > 1100 ? (
					<HeaderDesktop setPage={setPage} page={page} />
				) : (
					<HeaderMobile setPage={setPage} page={page} />
				)}
			</div>
		</div>
	);
};

export { Header };
