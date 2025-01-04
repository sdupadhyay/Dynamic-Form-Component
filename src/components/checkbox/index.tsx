import { checkboxProps } from "../../constants/typeProps/checkboxProps";

export const Checkbox: React.FC<checkboxProps> = ({
  id = "",
  label,
  value,
  name,
  handleCheckboxChange,
  selected,
}) => {
  return (
    <>
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          //selected={selected}
          checked={selected}
          value={value}
          name={name}
          onChange={() => handleCheckboxChange?.(value)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor={id}
          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    </>
  );
};
