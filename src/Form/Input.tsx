import { ChangeEvent } from "react";
import { Field } from "../Types/Field";

interface Props {
  field: Field;
  formValues: { [key: string]: string | number | boolean | undefined };
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

const InputCustom = ({ field, formValues, handleChange }: Props) => (
  <>
    {field.type === "text" && (
      <input
        type="text"
        name={field.type}
        value={`${formValues[field.type] || field.default_value || ""}`}
        onChange={(e) => handleChange(e)}
        pattern={field.validation}
        required
      />
    )}
    {field.type === "longtext" && (
      <textarea
        name={field.type}
        value={`${formValues[field.type] || field.default_value || ""}`}
        onChange={(e) => handleChange(e)}
        required
      />
    )}
    {field.type === "number" && (
      <input
        type="number"
        name={field.type}
        value={`${formValues[field.type] || field.default_value || ""}`}
        onChange={(e) => handleChange(e)}
        min={field.min_value}
        max={field.max_value}
        required
      />
    )}
    {field.type === "dropdown" && (
      <select
        name={field.type}
        value={`${formValues[field.type] || field.default_value || ""}`}
        onChange={(e) => handleChange(e)}
        required
      >
        {field.options?.map((option, optionIndex) => (
          <option key={optionIndex} value={option}>
            {option}
          </option>
        ))}
      </select>
    )}
  </>
);

export default InputCustom;
