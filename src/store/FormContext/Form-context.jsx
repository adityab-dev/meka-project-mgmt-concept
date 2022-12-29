import React from "react";

const FormContext = React.createContext({
  formState: {},
  onSubmit: () => {},
});

export default FormContext;
