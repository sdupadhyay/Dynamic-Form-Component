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
        componentType: "input",
      },
      {
        name: "userEmail",
        type: "email",
        placeholder: "Enter Email",
        isRequired: true,
        validationType: emailValidation,
        componentType: "input",
      },
      {
        name: "userMobile",
        type: "number",
        placeholder: "Enter Mobile Number",
        maxLength: 10,
        isRequired: true,
        validationType: phonenumberValidation,
        componentType: "input",
      },
      {
        name: "userState",
        placeholder: "Select State",
        componentType: "select",
        isRequired: true,
        validationType: "",
      },
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
