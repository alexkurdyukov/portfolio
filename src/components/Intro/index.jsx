import React from "react";
import Game from '../Game/index'

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
					development in general. I'm a very positive and ego-free in approach to
					all aspect of my life, and I carry a strong work ethics with me every
					place I go. I'm the happiest when I am creating, learning, exploring and
					thinking on how to make things better.
				</p>
				<a className="intro__button">Say Hello!</a>
			</div>
			<Game/>
		</div>	
	);
};

const Intro = () => {
	return (
		<div className="intro">
			<IntroContent/>
		</div>
	);
};

export default Intro
