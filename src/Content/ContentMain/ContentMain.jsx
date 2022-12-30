import React, { useContext, useRef } from "react";
import styles from "./ContentMain.module.css";
import ContainerColumn from "../../Navbar/ContainerColumn/ContainerColumn";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ContentMainContext from "../../store/ContentMainContext/ContentMain-context";

function ContentMain() {
  const cardsCtx = useContext(ContentMainContext);

  const { dragEndHandler, CardsState, columnFormSubmitHandler } =
    cardsCtx;

  const nameInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    columnFormSubmitHandler(nameInputRef.current.value);

    nameInputRef.current.value = "";
  };

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
            <div>
              <form
                onSubmit={submitHandler}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="">Add-col</label>
                <input type="text" ref={nameInputRef} />
                <button type="submit">add</button>
              </form>
            </div>
          </main>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default ContentMain;
