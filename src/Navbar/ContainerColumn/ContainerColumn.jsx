import React, { useState } from "react";
import styles from "./ContainerColumn.module.css";
import Container from "./Container/Container";
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Form from "./Form/Form";
// import FormContextProvider from "../../store/FormContext/FormContextProvider";

function ContainerColumn(props) {
  const { column, cards, index } = props;

  const [showForm, setShowForm] = useState(false);

  const closeHandler = () => setShowForm(false);

  const content = (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          className={styles.content_col_container}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className={styles.content_col}>
            <div className={styles.main_header}>
              <div
                className={styles.header_content_left}
                {...provided.dragHandleProps}
              >
                <div>
                  <em>{column.title}</em>
                </div>
              </div>
              <div className={styles.header_content_right}>
                <div
                  className={styles.pointerOnPlus}
                  onClick={() => setShowForm(true)}
                >
                  <FiPlus />
                </div>

                <MdClose />
              </div>
            </div>

            {showForm && (
              <Form column={column} onClose={closeHandler} />
            )}

            <Droppable droppableId={column.id} type="cards">
              {(provided) => (
                <div
                  className={styles.droppable_area}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards.map((card, index) => {
                    return (
                      <Container
                        column_id={column.id}
                        key={card.id.toString()}
                        index={index}
                        card={card}
                      />
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );

  return content;
}

export default ContainerColumn;
