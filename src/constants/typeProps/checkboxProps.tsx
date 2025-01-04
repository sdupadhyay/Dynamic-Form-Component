export type checkboxProps = {
  id: string;
  value: string;
  name: string;
  label: string;
  handleCheckboxChange?: (value: string) => void;
  selected: boolean;
};
