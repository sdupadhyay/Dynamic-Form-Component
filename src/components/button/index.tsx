import React from "react";
import { buttonProps } from "../../constants/typeProps/buttonProps";

export const Button: React.FC<buttonProps> = ({
  title = "Submit",
  classes,
  loading,
}) => {
  return (
    <button
      disabled={loading}
      className={`inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ${classes}`}
    >
      {loading ? "Loading..." : title}
    </button>
  );
};
