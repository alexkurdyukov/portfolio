import React, { useState } from "react";

const Popup = (children,setProjectOpen) => {
	return (
		<div className="popup__wrapper">
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