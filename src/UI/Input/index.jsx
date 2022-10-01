import React from "react";
import { useForm } from "react-hook-form";

/*validatio indicator*/
// const inputData = {
//   firstName: `([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})`,
//   secondName: `([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})`,
//   phoneNumber: `(^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$)`,
//   email: `^(.+)@(\ S+)$`,
// };

const Input = ({ value, name, errors, register, pattern }) => {
  return (
    <div className="input__container">
      <label className="label">
        <span className="label__text">{value}</span>
        <input
          {...register(name, {
            required: true,
            maxLength: 20,
            pattern: { 
				value: pattern, 
				message: "Please enter valid value" },
          })}
          className="input"
        />
        {errors && errors[name] && (
          <div className="errors">
            <div className="errors__icon"></div>
            <span className="errors__text">Error! This field is required</span>
          </div>
        )}
      </label>
    </div>
  );
};
export { Input };
