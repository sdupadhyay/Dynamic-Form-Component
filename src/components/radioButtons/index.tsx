import { radioProps } from "../../constants/typeProps/radioProps";

export const RadioButtons: React.FC<radioProps> = ({
  id,
  value,
  name,
  label,
  handleChange,
}) => {
  return (
    <>
      <div className="flex items-center me-4">
        <input
          id={id}
          type="radio"
          value={value}
          name={name}
          onChange={(e) => handleChange?.(e, name)}
          className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={id}
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    </>
  );
};
