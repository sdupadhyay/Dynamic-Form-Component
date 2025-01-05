export type radioProps = {
  id: string;
  value: string;
  name: string;
  label: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  checked?: boolean;
};
