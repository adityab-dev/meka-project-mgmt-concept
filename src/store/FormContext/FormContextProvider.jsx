import React, { useContext, useReducer } from "react";
import ContentMainContext from "../ContentMainContext/ContentMain-context";
import FormContext from "./Form-context";

const defaultFormState = {
  tag: "",
  heading: "",
  description: "",
  names: "",
};

function FormContextProvider(props) {
  const cardsCtx = useContext(ContentMainContext);
  const { cardSubmitHandler } = cardsCtx;

  const { column, onClose } = props;

  const inputChangeHandler = (event) => {
    console.log("value:-", event.target.value);
    console.log("id:-", event.target.id);
    dispatchFormAction({
      type: "USER_INPUT",
      payload: { value: event.taget.value, id: event.taget.id },
    });
  };

  const clearFormHandler = () =>
    dispatchFormAction({ type: "CLEAR_FORM" });

  const onSubmit = (event) =>
    dispatchFormAction({ type: "SUBMIT", payload: event });

  const reducerFunction = (state, action) => {
    if (action.type === "USER_INPUT") {
      const { value, id } = action.payload;

      // since id === formState obj. key
      const newInput = {
        [id]: value,
      };

      const newState = {
        ...state,
        ...newInput,
      };

      return newState;
    }

    if (action.type === "SUBMIT") {
      action.payload.preventDefault();

      const id = Math.random() * 100;

      function randomColorGenerator() {
        const red = Math.round(Math.random() * 100);
        const blue = Math.round(Math.random() * 100);
        const green = Math.round(Math.random() * 100);

        const color = `rgb(${red}, ${blue}, ${green})`;
        return color;
      }

      const dot_color = randomColorGenerator();
      const circle_color = randomColorGenerator();

      const nameInitials = state.names;

      function getInitiials(name) {
        const nameArr = [...name];
        const len = nameArr.length;
        const itemsToRemove = len - 1;
        nameArr.splice(0, itemsToRemove);
        const capital = nameArr[0].toUpperCase();
        nameArr[0] = capital;
        return nameArr;
      }

      const circle_name = getInitiials(nameInitials);

      const formData = {
        id,
        header_text: state.tag,
        heading: state.heading,
        main_text: state.description,
        circle_names: circle_name,
        column_id: column.id,
        dot_color,
        circle_colors: [circle_color],
      };

      clearFormHandler();

      onClose();
      cardSubmitHandler(formData);
    }

    if (action.type === "CLEAR_FORM") return defaultFormState;

    return defaultFormState;
  };

  const [formState, dispatchFormAction] = useReducer(
    reducerFunction,
    defaultFormState
  );

  const formContextvalueProp = {
    formState,
    inputChangeHandler,
    clearFormHandler,
    column,
    onClose,
    onSubmit,
  };

  return (
    <FormContext.Provider value={formContextvalueProp}>
      {props.children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
