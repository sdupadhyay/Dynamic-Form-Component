import { useMemo } from "react";
import { DynamicForm } from "./components/DynamicForm";
import { emailValidation, phonenumberValidation } from "./constants";

function App() {
  const formRequirments = useMemo(
    () => [
      {
        name: "userName",
        type: "text",
        placeholder: "Enter Name",
        isRequired: true,
      },
      {
        name: "userEmail",
        type: "email",
        placeholder: "Enter Email",
        isRequired: true,
        validationType: emailValidation,
      },
      {
        name: "userMobile",
        type: "number",
        placeholder: "Enter Mobile Number",
        maxLength: 10,
        isRequired: false,
        validationType: phonenumberValidation,
      },
      // {
      //   name: "userPassword",
      //   type: "password",
      //   placeholder: "Enter Password",
      // },
    ],
    []
  );
  return (
    <>
      <div>
        <DynamicForm formRequirments={formRequirments} />
      </div>
    </>
  );
}

export default App;
