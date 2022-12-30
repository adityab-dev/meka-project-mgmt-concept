import React, { useContext } from "react";
import styles from "./ContentMain.module.css";
import ContainerColumn from "../../Navbar/ContainerColumn/ContainerColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ContentMainContext from "../../store/ContentMainContext/ContentMain-context";

function ContentMain() {
  const cardsCtx = useContext(ContentMainContext);

  const { dragEndHandler, CardsState } = cardsCtx;

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Droppable
        droppableId="all-columns"
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <main
            className={styles.main}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {CardsState.columns_order.map((column_id, index) => {
              const column = CardsState.columns[column_id];
              const cards = column.card_ids.map((card_id) => {
                return CardsState.cards[card_id];
              });

              return (
                <ContainerColumn
                  key={column_id}
                  column={column}
                  cards={cards}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
            <button>Add Column</button>
          </main>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default ContentMain;
