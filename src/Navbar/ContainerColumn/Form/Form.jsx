import React, { useContext, useState, useRef } from "react";
import ContentMainContext from "../../../store/ContentMainContext/ContentMain-context";
import { IoMdClose } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import styles from "./Form.module.css";

function Form(props) {
  const { onClose, column } = props;

  const cardsCtx = useContext(ContentMainContext);

  const { cardSubmitHandler } = cardsCtx;

  const [names, setNames] = useState([]);

  const nameInputRef = useRef();
  const tagInputRef = useRef();
  const descriptionInputRef = useRef();
  const headingInputRef = useRef();

  const onAddHandler = () => {
    setNames([...names, nameInputRef.current.value]);
    nameInputRef.current.value = "";
  };

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

    setNames((prevState) => {
      const newState = [...prevState].push(
        nameInputRef.current.value
      );
      return newState;
    });

    function getInitials(name) {
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

    const nameInitialsArr = [
      ...names,
      nameInputRef.current.value,
    ].map((name) => getInitials(name));

    const colors = [...names, nameInputRef.current.value].map(() =>
      randomColorGenerator()
    );

    const formData = {
      id,
      header_text: tagInputRef.current.value,
      heading: headingInputRef.current.value,
      main_text: descriptionInputRef.current.value,
      circle_names: nameInitialsArr,
      column_id: column.id,
      dot_color,
      circle_colors: colors,
    };

    tagInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    headingInputRef.current.value = "";

    nameInputRef.current.value = "";

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
            <input type="text" id="tag" ref={tagInputRef} />
          </div>

          <div>
            <label htmlFor="heading">Heading</label>
            <input type="text" id="heading" ref={headingInputRef} />
          </div>

          <div>
            <label htmlFor="description">Note</label>
            <input
              type="text"
              id="description"
              ref={descriptionInputRef}
            />
          </div>

          <div className={styles.namesInputContainer}>
            <div className={styles.namesLabelContainer}>
              <label htmlFor="names">Names</label>
            </div>
            <div className={styles.namesInputRightContentContainer}>
              <div className={styles.namesInputRightContent}>
                <input type="text" id="names" ref={nameInputRef} />
                <div
                  className={styles.bsPlusContainer}
                  onClick={onAddHandler}
                >
                  <BsPlus />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={() => console.log("names", names)}
            >
              name array
            </button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
  return Form;
}

export default Form;
