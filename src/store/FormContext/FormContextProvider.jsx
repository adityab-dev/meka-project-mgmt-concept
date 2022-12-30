import React, { useContext, useReducer } from "react";
import ContentMainContext from "../ContentMainContext/ContentMain-context";
import FormContext from "./Form-context";

const defaultFormState = {
  tag: "",
  heading: "",
  description: "",
  names: [],
};

function FormContextProvider(props) {
  const cardsCtx = useContext(ContentMainContext);
  const { cardSubmitHandler } = cardsCtx;

  const { column, onClose } = props;

  const reducerFunction = (state, action) => {
    if (action.type === "USER_INPUT") {
      const { id, value } = action.payload;

      if (id === "names") {
        const newNames = [...state.names, value];
        const newState = { ...state, names: newNames };
        return newState;
      }

      const newState = { ...state, [id]: value };
      return newState;
    }

    if (action.type === "SUBMIT") {
      const { tag, heading, description, names } = state;
      const event = action.payload;

      event.preventDefault();

      const id = Math.random() * 100;

      function randomColorGenerator() {
        const red = Math.round(Math.random() * 100);
        const blue = Math.round(Math.random() * 100);
        const green = Math.round(Math.random() * 100);

        const color = `rgb(${red}, ${blue}, ${green})`;
        return color;
      }
      const dot_color = randomColorGenerator();

      function getInitials(name) {
        if (!name.length) return;

        let firstLetter = "";
        let secondLetter = "";

        const indivisualElements = name.split(" ");
        const indivisualNameFilter = (element) => {
          if (element.length) {
            return true;
          }
        };

        const indivisualNames = indivisualElements.filter((el) => {
          return indivisualNameFilter(el);
        });

        const len = indivisualNames.length;

        const firstName = indivisualNames[0];
        firstLetter = [...firstName][0];

        if (len === 1) {
          return firstLetter;
        }

        if (len > 1) {
          const [secondName] = indivisualNames.splice(-1, 1);
          secondLetter = [...secondName][0];

          return firstLetter + secondLetter;
        }
      }

      const nameInitialsArr = names.map((name) => getInitials(name));

      const colors = names.map(() => randomColorGenerator());

      const formData = {
        id,
        header_text: tag,
        heading,
        main_text: description,
        circle_names: nameInitialsArr,
        column_id: column.id,
        dot_color,
        circle_colors: colors,
      };

      onClose();
      cardSubmitHandler(formData);

      return defaultFormState;
    }

    if (action.type === "ADD_NAMES") {
      const event = action.payload;

      event.preventDefault();

      const name = event.target.value;
      const newNames = [...state.names].push(name);
      return { ...state, names: newNames };
    }

    return defaultFormState;
  };

  const [formState, dispatchFormAction] = useReducer(
    reducerFunction,
    defaultFormState
  );

  const inputChangeHandler = (event) =>
    dispatchFormAction({
      type: "USER_INPUT",
      payload: { value: event.target.value, id: event.target.id },
    });

  const submitHandler = (event) =>
    dispatchFormAction({ type: "SUBMIT", payload: event });

  const addHandler = (event) =>
    dispatchFormAction({
      type: "ADD_NAMES",
      payload: event,
    });

  const formContextvalueProp = {
    formState,
    inputChangeHandler,
    column,
    onClose,
    submitHandler,
    addHandler,
  };

  return (
    <FormContext.Provider value={formContextvalueProp}>
      {props.children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
