import React, { useContext } from "react";
import styles from "./ContentMain.module.css";
import ContainerColumn from "../../Navbar/ContainerColumn/ContainerColumn";
import { DragDropContext } from "react-beautiful-dnd";
import ContentMainContext from "../../store/ContentMainContext/ContentMain-context";

function ContentMain() {
  const cardsCtx = useContext(ContentMainContext);

  const { dragEndHandler, CardsState } = cardsCtx;

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <main className={styles.main}>
        {CardsState.columns_order.map((column_id) => {
          const column = CardsState.columns[column_id];
          const cards = column.card_ids.map((card_id) => {
            return CardsState.cards[card_id];
          });

          return (
            <ContainerColumn
              key={column_id}
              column={column}
              cards={cards}
              // onCardSubmit={cardSubmitHandler}
            />
          );
        })}
      </main>
    </DragDropContext>
  );
}
export default ContentMain;
