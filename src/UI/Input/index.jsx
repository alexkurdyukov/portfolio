import React from "react";

const Input = ({ value }) => {
	return (
		<div className="input__container">
			<label className="label">
				<span className="label__text">{value}</span>
				<input className="input" />
			</label>
		</div>
	);
};
export { Input };
