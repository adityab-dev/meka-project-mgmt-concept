import React, { useState, useContext } from "react";
import ContentMainContext from "../../../store/ContentMain-context";
import { IoMdClose } from "react-icons/io";

import styles from "./Form.module.css";

function Form(props) {
  const { onClose, column } = props;

  const cardsCtx = useContext(ContentMainContext);

  const { cardSubmitHandler } = cardsCtx;

  const [tag, setTag] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [names, setNames] = useState("");

  const onTagChangeHandler = (event) => setTag(event.target.value);

  const onHeadingChangeHandler = (event) =>
    setHeading(event.target.value);

  const onDescriptionChangeHandler = (event) =>
    setDescription(event.target.value);

  const onNamesChangeHandler = (event) =>
    setNames(event.target.value);

  const onSubmit = (event) => {
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
    const circle_color = randomColorGenerator();

    const nameInitials = names;

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

    console.log(circle_name);

    const formData = {
      id,
      header_text: tag,
      heading,
      main_text: description,
      circle_names: circle_name,
      column_id: column.id,
      dot_color,
      circle_colors: [circle_color],
    };

    setTag("");
    setDescription("");
    setHeading("");
    setNames("");

    onClose();
    cardSubmitHandler(formData);
  };

  const Form = (
    <div className={styles.formContainer}>
      <div className={styles.formHeader} onClick={onClose}>
        <IoMdClose />
      </div>
      <div className={styles.formBody}>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              id="tag"
              onChange={onTagChangeHandler}
              value={tag}
            />
          </div>

          <div>
            <label htmlFor="heading">Heading</label>
            <input
              type="text"
              id="heading"
              onChange={onHeadingChangeHandler}
              value={heading}
            />
          </div>

          <div>
            <label htmlFor="description">Note</label>
            <input
              type="text"
              id="description"
              onChange={onDescriptionChangeHandler}
              value={description}
            />
          </div>

          <div>
            <label htmlFor="names">Names</label>
            <input
              type="text"
              id="names"
              onChange={onNamesChangeHandler}
              value={names}
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
  return Form;
}

export default Form;
