import React from "react";
import Button from "../Button";
import { ReactComponent as HeaderLogo } from "../../assets/images/header-logo.svg";
import { useState } from "react";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { scrollAvailable, scrollNotAvailable } from "../../utils/scrollBlock";

const headerData = [
	{ name: "intro", id: "01" },
	{ name: "about", id: "02" },
	{ name: "projects", id: "03" },
	{ name: "contacts", id: "04" },
];

const HeaderDesktop = ({ page, setPage, setIsLoading }) => {
	const screenLoad = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	};
	return (
		<>
			<div
				onClick={() => {
					screenLoad();
				}}
				className="header__logo-container"
			>
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
			
		</>
	);
};

const HeaderMobile = ({ setPage, setIsLoading }) => {
	const screenLoad = () => {
		screenLoad()
	};
	const [isOpen, setOpen] = useState(false);
	const [overlayIsOpen, setOverlayOpen] = useState(false);
	return (
		<>
			<div
				className={`overlay ${overlayIsOpen ? "--active" : ""}`}
				onClick={() => {
					setOverlayOpen(false);
					setOpen(false);
					scrollAvailable();
				}}
			></div>
			<div className={`header-mobile__menu ${isOpen ? "--active" : ""}`}>
				<div className="mobile-menu">
					{headerData.map((item) => (
						<div
							onClick={() => { 
								setPage(item.name);
								setOpen(!isOpen);
								setOverlayOpen(!overlayIsOpen);
								scrollAvailable();
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
			<div
				className="header-mobile__logo"
				onClick={() => {
					setIsLoading(true);
					setTimeout(() => {
						setIsLoading(false);
					}, 3000);
				}}
			>
				<HeaderLogo />
			</div>
			<div
				onClick={() => {
					setOpen(!isOpen);
					setOverlayOpen(!overlayIsOpen);
					scrollNotAvailable();
				}}
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

const Header = ({ setPage, page, setIsLoading }) => {
	const windowWidth = useWindowWidth();
	return (
		<div className="header">
			<div className="header__wrapper">
				{windowWidth && windowWidth > 1100 ? (
					<HeaderDesktop
						setPage={setPage}
						page={page}
						setIsLoading={setIsLoading}
					/>
				) : (
					<HeaderMobile
						setPage={setPage}
						page={page}
						setIsLoading={setIsLoading}
					/>
				)}
			</div>
		</div>
	);
};

export { Header };
