import React from "react";

const Button = ({ className, children, linkType, onClick, type, href }) => {
	return (
		<>
			{linkType ? (
				<a href={href} className={`button ${className ? className : ""}`} target='_blank'>{children}</a>
			) : (
				<button 
					type={`${type? type:'button'}`}
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
