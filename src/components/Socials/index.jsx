import React from "react";
import { ReactComponent as TwitterIcon } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/icon-github.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/icon-telegram.svg";

const socialsData = [
	{ icon: <TwitterIcon />, href: "https://investor.twitterinc.com/" },
	{ icon: <InstagramIcon />, href: "#" },
	{ icon: <GithubIcon />, href: "https://github.com/alexkurdyukov" },
	{ icon: <TelegramIcon />, href: "https://t.me/wirtuoz2033/" },
];

const Socials = () => {
	return (
		<div className="socials">
			{socialsData.map((social, index) => (
				<a target={'_blank'} key={index} href={social.href} className="socials__element">
					{social.icon}
				</a>
			))}
		</div>
	);
};

export { Socials };
