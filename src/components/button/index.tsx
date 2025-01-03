import React from "react";
import { buttonProps } from "../../constants/typeProps/buttonProps";

export const Button: React.FC<buttonProps> = ({
  title = "Submit",
  classes = "",
  loading,
}) => {
  return (
    <button
      disabled={loading}
      className={`text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-gray-600 mx-auto"></div>
      ) : (
        title
      )}
    </button>
  );
};
