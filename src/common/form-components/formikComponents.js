import * as React from "react";
import { Dropdown } from "semantic-ui-react";

export const DropdownField = ({
  field: { name, value },
  form: { touched, errors, setFieldValue },
  options,
  defaultValue,
  children: _,
  ...props
}) => {
  const errorText = touched[name] && errors[name];
  return (
    <Dropdown
      selection
      options={options}
      onChange={(_, { value }) => setFieldValue(name, value)}
      error={errorText}
      {...props}
      defaultValue={defaultValue}
    />
  );
};
