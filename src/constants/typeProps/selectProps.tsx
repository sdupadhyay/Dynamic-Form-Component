export type selectProps = {
  name: string;
  label: string;
  id?: string;
  handleChange?: (
    e: React.ChangeEvent<HTMLSelectElement>,
    name: string,
    inputValidationType?: string
  ) => void;
  errorMessage?: { message: string; isError: boolean };
};
