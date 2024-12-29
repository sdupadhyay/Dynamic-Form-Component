import { useMemo } from "react";
import { DynamicForm } from "./components/DynamicForm";

function App() {
  const formRequirments = useMemo(
    () => [
      {
        name: "userName",
        type: "text",
        placeholder: "Enter Name",
      },
      {
        name: "userEmail",
        type: "email",
        placeholder: "Enter Email",
      },
      {
        name: "userMobile",
        type: "number",
        placeholder: "Enter Mobile Number",
        maxLength: 10,
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
