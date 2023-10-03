import { useEffect, useState } from "react";
import formData from "./constants/data.json";
import classes from "./App.module.css";
import InputCustom from "./Form/Input";
import { Field } from "./Types/Field";

const formDataTyped = formData as Field[];

const App = () => {
  const [formValues, setFormValues] = useState<{
    [key: string]: string | number | boolean | undefined;
  }>({});
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const resultObject: {
      [key: string]: string | number | boolean | undefined;
    } = {};

    for (const item of formDataTyped) {
      resultObject[item.type] = item.default_value;
    }

    setFormValues(resultObject);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.container}>
        {formDataTyped.map((field) => (
          <InputCustom
            field={field}
            formValues={formValues}
            handleChange={handleChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      {showData && (
        <div>
          {Object.entries(formValues).map(([key, value]) => (
            <div className={classes.wrapper}>
              <p>{key}:</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
