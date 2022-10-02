import React, { useState } from "react";
import Button from "../Button";

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
		<div className="game">
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
			<div className="buttons">
				<Button>New game</Button>
				<Button>Restart</Button>
			</div>
		</div>	
	);
};

export default Game;
