export type formRequirmentsProps = {
  name: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  isRequired: boolean;
  validationType?: string;
  componentType?: string;
  id?: string;
  data?: Array<{ value: string; name: string }>;
  radioProps?: Array<{
    id: string;
    value: string;
    name: string;
    label: string;
  }>;
  checkboxProps?: Array<{
    id: string;
    value: string;
    name: string;
    label: string;
  }>;
};
