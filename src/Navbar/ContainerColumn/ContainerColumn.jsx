import React, { useState } from "react";
import styles from "./ContainerColumn.module.css";
import Container from "./Container/Container";
import { FiPlus } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Droppable } from "react-beautiful-dnd";
import Form from "./Form/Form";

function ContainerColumn(props) {
  const { column, cards } = props;

  const [showForm, setShowForm] = useState(false);

  const onCloseHandler = () => setShowForm(false);

  const content = (
    <div className={styles.content_col_container}>
      <div className={styles.content_col}>
        <div className={styles.main_header}>
          <div className={styles.header_content_left}>
            <div>
              <em>{column.title}</em>
            </div>
          </div>
          <div className={styles.header_content_right}>
            <div onClick={() => setShowForm(true)}>
              <FiPlus />
            </div>

            <BiDotsHorizontalRounded />
          </div>
        </div>

        {showForm && (
          <Form column={column} onClose={onCloseHandler} />
        )}

        <Droppable droppableId={column.id}>
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
  );

  return content;
}

export default ContainerColumn;
