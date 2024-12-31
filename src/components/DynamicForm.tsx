import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { formRequirmentsProps } from "../constants/typeProps/formRequirmentsProps";
import { validatePhoneNumber } from "../constants";
import {
  emailValidation,
  phonenumberValidation,
  validateEmail,
} from "../constants";

export const DynamicForm: React.FC<{
  formRequirments: formRequirmentsProps[];
}> = ({ formRequirments }) => {
  const [formState, setFormState] = useState<{
    userEmail: string;
    userMobile: number | string;
    userName: string;
  }>({
    userEmail: "",
    userMobile: "",
    userName: "",
  });
  const [formError, setFormError] = useState<{
    [key: string]: { message: string; isError: boolean };
  }>({});
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors: any = {};
    formRequirments.forEach((item) => {
      if (item.isRequired && !formState[item.name]) {
        errors[item.name] = `${item.name} is required`;
      }
    });
    setFormError(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setFormState({});
    console.log(formState);
  };
  //console.log(formError);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    inputValidationType?: string
  ) => {
    //console.log(e.target.value, name);
    // setFormError({ ...formError, [name]: "" });
    setFormState({ ...formState, [name]: e.target.value });
    switch (inputValidationType) {
      case emailValidation:
        if (!validateEmail(e.target.value)) {
          //setInputError("Not an Valid Email");
          setFormError({
            ...formError,
            [name]: { message: "Not an Valid Email", isError: true },
          });
        } else
          setFormError({
            ...formError,
            [name]: { message: "Valide Email", isError: false },
          });
        break;
      case phonenumberValidation:
        if (!validatePhoneNumber(e.target.value)) {
          // setInputError("Not an Valid Mobile Number");
          setFormError({
            ...formError,
            [name]: {
              message: "Not an Valid Mobile Number",
              isError: true,
            },
          });
        } else
          setFormError({
            ...formError,
            [name]: { message: "Valide Mobile Number", isError: false },
          });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="fle justify-center items-center h-screen mt-10">
        <form
          className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-4 max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <h2 className="text-lg font-semibold text-center text-gray-800">
              Dynamic Form
            </h2>
          </div>
          {formRequirments?.map((item, index) => (
            <Input
              key={index}
              {...item}
              handleChange={handleChange}
              //@ts-ignore
              value={formState[item.name]}
              //@ts-ignore
              errorMessage={formError[item.name]}
              inputValidationType={item?.validationType}
            />
          ))}
          <Button title="Submit" />
        </form>
      </div>
    </>
  );
};
