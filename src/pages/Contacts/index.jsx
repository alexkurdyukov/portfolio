import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { Input } from "../../UI/Input";
import { Textarea } from "../../UI/Textarea";

const Contacts = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
      watch,
    } = useForm({ mode: "onChange" });
    const onSubmit = (data) => console.log("Отправлено", data);
    return (
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <h2 className="form__header">Get in touch</h2>
          <p className="form__description">
          Although I’m not currently looking for any new opportunities, my inbox
            is always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
            
          </p>
          <div className="form__container">
            <Input 
              value="First name"
              name={`firstName`}
              errors={errors}
              register={register}
              regular={/^[a-z ,.'-]+$/}
            />
            <Input
              value="Second name"
              name={`secondName`}
              errors={errors}
              register={register}
              regular={/^[a-z ,.'-]+$/}
            />
            <Input
              value="Phone number"
              name={`phoneNumber`}
              errors={errors}
              register={register}
              regular={/^[0-9]{9,12}$/}
            />
            <Input
              value="Email"
              name={`email`}
              errors={errors}
              register={register}
              regular={/[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/}
            />
          </div>
          <Textarea areaName={`Message :`} />
          <div className="form__buttons">
            <Button type={`submit`} disabled={!isValid}>
              Sumbit
            </Button>
  
            <Button
              onClick={(el) => {
                setButtonDisabled(!isButtonDisabled);
                reset();
              }}
              type={"reset"}
            >
              Reset
            </Button>
          </div>
        </div>
      </form>
    );
  };
  export {Contacts}