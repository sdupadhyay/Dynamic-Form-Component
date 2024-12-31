import { useState } from "react";
import { inputProps } from "../../constants/typeProps/inputProps";
import {
  emailValidation,
  phonenumberValidation,
  validateEmail,
  validatePhoneNumber,
} from "../../constants";

export const Input: React.FC<inputProps> = ({
  type = "text",
  placeholder,
  isRequired = true,
  name = "",
  maxLength,
  errorMessage = "",
  value = "",
  handleChange,
  inputValidationType,
}) => {
  const [inputError, setInputError] = useState<{
    message: string;
    isError: boolean;
  }>({ message: "", isError: false });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange?.(e, name);
    switch (inputValidationType) {
      case emailValidation:
        if (!validateEmail(e.target.value)) {
          //setInputError("Not an Valid Email");
          setInputError({ message: "Not an Valid Email", isError: true });
        } else setInputError({ message: "Valide Email", isError: false });
        break;
      case phonenumberValidation:
        if (!validatePhoneNumber(e.target.value)) {
          // setInputError("Not an Valid Mobile Number");
          setInputError({
            message: "Not an Valid Mobile Number",
            isError: true,
          });
        } else
          setInputError({ message: "Valide Mobile Number", isError: false });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <label
        htmlFor={name}
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          id={name}
          type={type}
          className="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-full"
          placeholder={placeholder}
          name={name}
          required={isRequired}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {placeholder}
        </span>
      </label>
      {(errorMessage || inputError?.message) && (
        <p
          className={`text-${
            inputError?.isError ? "red" : "green"
          }-500 text-xs`}
        >
          {errorMessage || inputError?.message}
        </p>
      )}
    </>
  );
};
