import React from "react";

const Button = ({ className, children, linkType, onClick }) => {
	return (
		<>
			{linkType ? (
				<a className={`button ${className ? className : ""}`}>{children}</a>
			) : (
				<button
					onClick={onClick}
					className={`button ${className ? className : ""}`}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
