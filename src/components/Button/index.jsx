import React from "react";

const Button = ({ className, children }) => {
	return (
		<span className={`button ${className == false ? '' : className}`}>
			{children}
		</span>
	);
};

export default Button;
