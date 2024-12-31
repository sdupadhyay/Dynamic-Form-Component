export type inputProps = {
  type?: string;
  id?: string;
  classes?: string;
  placeholder: string;
  isRequired?: boolean;
  name: string;
  maxLength?: number;
  errorMessage?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  inputValidationType?: string;
};
