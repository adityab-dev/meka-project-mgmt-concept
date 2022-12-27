import styles from "./ContainerColumn.module.css";

import Container from "./Container/Container";

import { FiPlus } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { Droppable } from "react-beautiful-dnd";

function ContainerColumn(props) {
  const { column, cards } = props;

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
            <FiPlus />
            <BiDotsHorizontalRounded />
          </div>
        </div>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <div
              className={styles.droppable_area}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map((card, index) => {
                return <Container key={card.id} index={index} card={card} />;
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
