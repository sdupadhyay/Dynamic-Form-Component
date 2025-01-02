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
import { SelectBox } from "./selectBox";

export const DynamicForm: React.FC<{
  formRequirments: formRequirmentsProps[];
}> = ({ formRequirments }) => {
  const [formState, setFormState] = useState<{
    userEmail: string;
    userMobile: number | string;
    userName: string;
    userState: string;
  }>({
    userEmail: "",
    userMobile: "",
    userName: "",
    userState: "",
  });
  const [formError, setFormError] = useState<{
    [key: string]: { message: string; isError: boolean };
  }>({});
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors: any = {};
    formRequirments.forEach((item) => {
      if (item.isRequired && !formState[item.name]) {
        errors[item.name] = {
          message: `${item.name} is required`,
          isError: true,
        };
      }
    });
    setFormError(errors);
    //console.log(errors);
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await delay(3000);
    setFormState({
      userEmail: "",
      userMobile: "",
      userState: "",
      userName: "",
    });
    setLoading(false);
    console.log(formState);
  };
  //console.log(formError);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    inputValidationType?: string
  ) => {
    setFormState({ ...formState, [name]: e.target.value });
    setFormError({});
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
          {formRequirments?.map((item, index) => {
            switch (item.componentType) {
              case "input":
                return (
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
                );
              case "select":
                return (
                  <SelectBox
                    key={index}
                    label={item.placeholder}
                    id={item.id}
                    name={item.name}
                    value={formState[item.name]}
                    //@ts-ignore
                    handleChange={handleChange}
                    errorMessage={formError[item.name]}
                    data={item.data}
                  />
                );
              default:
                return null;
            }
          })}
          <Button loading={loading} title="Submit" />
        </form>
      </div>
    </>
  );
};
