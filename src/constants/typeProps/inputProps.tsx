export type inputProps = {
  type?: string;
  id?: string;
  classes?: string;
  placeholder: string;
  isRequired?: boolean;
  name: string;
  maxLength?: number;
  errorMessage?: { message: string; isError: boolean };
  value?: string;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    inputValidationType?: string
  ) => void;
  inputValidationType?: string;
};
