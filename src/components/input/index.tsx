import { inputProps } from "../../constants/typeProps/inputProps";

export const Input: React.FC<inputProps> = ({
  type = "text",
  placeholder,
  isRequired = true,
  name = "",
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type={type}
          className="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder={placeholder}
          name={name}
          required={isRequired}
        />
        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {placeholder}
        </span>
      </label>
    </>
  );
};
