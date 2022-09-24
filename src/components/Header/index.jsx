import React, { useRef } from "react";
import { useEffect } from "react";
import Button from "../Button";
import { ReactComponent as HeaderLogo } from "../../assets/images/header-logo.svg";
import { useState } from "react";

const headerData = [
	{ name: "intro", id: "01" },
	{ name: "about", id: "02" },
	{ name: "projects", id: "03" },
	{ name: "contacts", id: "04" },
];

const Header = ({ setPage, page }) => {
	const [isOpen, setIsOpen] = useState(false);
	// useEffect(() => {
	// 	console.log(`Состояние ${isOpen ? `виден` : `не виден`}`);
	// }, [isOpen]);
	return (
		<div className="header">
			<div className="header__wrapper">
				<div className="header__logo-container">
					<HeaderLogo />
				</div>
				<nav className={`header__nav nav`}>
					{headerData.map((item) => (
						<div
							className={`nav__item ${item.name == page ? "--active" : ""}`}
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
			</div>
		</div>
	);
};

const MobileMenu = (setPage, page) => {
	return (
		<div className="mobile-menu">
			{headerData.map((item) => (
				<div className="mobile-menu__element" key={item.id}>
					<span className="mobile-menu__number">{item.id}</span>.{" "}
					<span className="mobile-menu__text">{item.name}</span>
				</div>
			))}
		</div>
	);
};

const MobileBurger = () => {
	return (
		<div className="burger burger__container">
			<div className="burger_top"></div>
			<div className="burger_middle"></div>
			<div className="burger_bottom"></div>
		</div>
	);
};

const HeaderMobile = (setPage, page) => {
	return (
		<div className="header-mobile">
			<div className="header-mobile__logo">
				<HeaderLogo />
			</div>
			<MobileBurger/>
		</div>
	);
}

export { Header, HeaderMobile };


