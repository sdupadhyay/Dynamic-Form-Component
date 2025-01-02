import { selectProps } from "../../constants/typeProps/selectProps";

export const SelectBox: React.FC<selectProps> = ({
  label,
  id,
  name,
  handleChange,
  errorMessage,
  data,
  value,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => handleChange?.(e, name, "")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={""}>{label}</option>
        {data?.map((ele, ind) => (
          <option key={ind} value={ele?.value}>
            {ele?.name}
          </option>
        ))}
      </select>
      {errorMessage?.message && (
        <p
          className={`text-${
            errorMessage?.isError ? "red" : "green"
          }-500 text-xs`}
        >
          {errorMessage?.message}
        </p>
      )}
    </>
  );
};
