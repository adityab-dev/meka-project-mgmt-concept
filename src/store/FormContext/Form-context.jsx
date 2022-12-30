import React from "react";

const FormContext = React.createContext({
  formState: {},
  submitHandler: () => {},
  inputChangeHandler: () => {},
  column: "",
  onClose: () => {},
  addHandler: () => {},
});

export default FormContext;
