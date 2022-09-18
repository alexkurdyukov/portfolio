import React, { useState } from "react";

const Cage = () => {
	const [color, setColor] = useState();
	return (
		<div
			className={`cage ${color ? "--active" : ""}`}
			onClick={() => {
				setColor(!color);
			}}
		></div>
	);
};

const Game = () => {
	return (
		<div className="grid">
			<Cage />
			<Cage />
			<Cage />
			<Cage />
			<Cage />
			<Cage />
			<Cage />
			<Cage />
			<Cage />
		</div>
	);
};

export default Game;
