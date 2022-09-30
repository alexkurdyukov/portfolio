import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ value, name }) => {
	return (
		<div className="input__container">
			<label className="label">
				<span className="label__text">{value}</span>
				<input className="input" />
			</label>
			<div className="label__error"></div>
		</div>
	);
};
export { Input };
