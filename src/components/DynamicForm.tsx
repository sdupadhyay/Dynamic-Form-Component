import React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { formRequirmentsProps } from "../constants/typeProps/formRequirmentsProps";
import { SelectBox } from "./selectBox";
import { RadioButtons } from "./radioButtons";

export const DynamicForm: React.FC<{
  formRequirments: formRequirmentsProps[];
}> = ({ formRequirments }) => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-4 max-w-2xl">
          <div>
            <h2 className="text-lg font-semibold text-center text-gray-800">
              Dynamic Form
            </h2>
          </div>
          {formRequirments?.map((item, index) => (
            <Input key={index} {...item} />
          ))}
          <SelectBox />
          <RadioButtons />
          <Button title="Submit" />
        </form>
      </div>
    </>
  );
};
