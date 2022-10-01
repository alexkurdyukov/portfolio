import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ value, name, errors, register }) => {
	return (
		<div className="input__container">
			<label className="label">
				<span className="label__text">{value}</span>
				<input
					{...register(name, { required: true, maxLength: 15 })}
					className="input"
				/>
			</label>
			{errors && errors[name] && (
				<div className="label__error">This field is required</div>
			)}
		</div>
	);
};
export { Input };
