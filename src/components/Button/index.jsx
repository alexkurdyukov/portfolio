import React from "react";

const Button = ({ className, children, linkType }) => {
	return (
		<>
			{linkType ? (
				<a className={`button ${className ? className : ""}`}>
					{children}
				</a>
			) : (
				<button className={`button ${className ? className : ""}`}>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
