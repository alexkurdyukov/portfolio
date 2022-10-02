import React from "react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

const Input = ({ value, name, errors, register, regular }) => {
  const [isButtonRequired,setButtonRequired]=useState(false)
  return (
    <div className="input__container">
      <label className="label">
        <span className="label__text">{value}</span>
        <input
          {...register(name, {
            required: true,
            maxLength: { value: 25, message: "error message" },
            pattern: {
              value: regular,
              message: "Please enter valid value",
            },
          })}
          className="input"
        />
         {errors && errors[name] && (
          <div className="errors">
            <div className="errors__icon"></div>
            <span className="errors__text">
              {errors[name] && errors[name].type === "required" && (
                <span>This field is required</span>
              )}
              {errors[name] && errors[name].type === "maxLength" && (
                <span>Max length exceeded</span>
              )}
              {errors[name] && errors[name].type === "pattern" && (
                <span>Please enter valid value</span>
              )}
            </span>
          </div>
        )}
      </label>
    </div>
  );
};
export { Input };
