import React, { useState } from "react";
import { scrollAvailable } from "../../scripts/scrollBlock";

const Popup = ({children,setProjectOpen,projectState}) => {
	return (
		<div className="popup">
			<div className="project-popup wrapper">
				{children}
			</div>
			<div
				onClick={() => {
					setProjectOpen(false);
					scrollAvailable();
				}}
				className="popup__overlay"
			></div>
		</div>
	);
};

export {Popup} 