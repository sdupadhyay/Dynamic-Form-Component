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
        data: [
          { value: "AN", name: "Andaman and Nicobar Islands" },
          { value: "AP", name: "Andhra Pradesh" },
          { value: "AR", name: "Arunachal Pradesh" },
          { value: "AS", name: "Assam" },
          { value: "BR", name: "Bihar" },
          { value: "CG", name: "Chandigarh" },
          { value: "CH", name: "Chhattisgarh" },
          { value: "DN", name: "Dadra and Nagar Haveli" },
          { value: "DD", name: "Daman and Diu" },
          { value: "DL", name: "Delhi" },
          { value: "GA", name: "Goa" },
          { value: "GJ", name: "Gujarat" },
          { value: "HR", name: "Haryana" },
          { value: "HP", name: "Himachal Pradesh" },
          { value: "JK", name: "Jammu and Kashmir" },
          { value: "JH", name: "Jharkhand" },
          { value: "KA", name: "Karnataka" },
          { value: "KL", name: "Kerala" },
          { value: "LA", name: "Ladakh" },
          { value: "LD", name: "Lakshadweep" },
          { value: "MP", name: "Madhya Pradesh" },
          { value: "MH", name: "Maharashtra" },
          { value: "MN", name: "Manipur" },
          { value: "ML", name: "Meghalaya" },
          { value: "MZ", name: "Mizoram" },
          { value: "NL", name: "Nagaland" },
          { value: "OR", name: "Odisha" },
          { value: "PY", name: "Puducherry" },
          { value: "PB", name: "Punjab" },
          { value: "RJ", name: "Rajasthan" },
          { value: "SK", name: "Sikkim" },
          { value: "TN", name: "Tamil Nadu" },
          { value: "TS", name: "Telangana" },
          { value: "TR", name: "Tripura" },
          { value: "UP", name: "Uttar Pradesh" },
          { value: "UK", name: "Uttarakhand" },
          { value: "WB", name: "West Bengal" },
        ],
      },
      {
        componentType: "genderRadio",
        isRequired: true,
        name: "userGender",
        radioProps: [
          { id: "male", value: "male", name: "userGender", label: "Male" },
          {
            id: "female",
            value: "female",
            name: "userGender",
            label: "Female",
          },
        ],
      },
      {
        componentType: "checkbox",
        isRequired: true,
        name: "userHobbies",
        checkboxProps: [
          {
            id: "cricket",
            value: "cricket",
            name: "userHobbies",
            label: "Cricket",
          },
          {
            id: "football",
            value: "football",
            name: "userHobbies",
            label: "Football",
          },
          {
            id: "badminton",
            value: "badminton",
            name: "userHobbies",
            label: "Badminton",
          },
        ],
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
