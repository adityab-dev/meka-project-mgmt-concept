import React, { useState } from "react";
import styles from "./ContentMain.module.css";
import ContainerColumn from "../../Navbar/ContainerColumn/ContainerColumn";
import { DragDropContext } from "react-beautiful-dnd";
import init_data from "../../Assets/data";

function ContentMain() {
  const [state, setState] = useState(init_data);

  const dragEndHandler = (eventObj) => {
    const { source, destination, draggableId } = eventObj;

    if (!destination) return;

    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const new_card_ids = Array.from(start.card_ids);

      new_card_ids.splice(source.index, 1);
      new_card_ids.splice(destination.index, 0, draggableId);

      const new_column = {
        ...start,
        card_ids: new_card_ids,
      };

      const new_state = {
        ...state,
        columns: {
          ...state.columns,
          [new_column.id]: new_column,
        },
      };

      setState(new_state);
      return;
    }

    // managing re-ordering between columns
    const start_card_ids = Array.from(start.card_ids);
    start_card_ids.splice(source.index, 1);
    const new_start = {
      ...start,
      card_ids: start_card_ids,
    };

    const finish_card_ids = Array.from(finish.card_ids);
    finish_card_ids.splice(destination.index, 0, draggableId);
    const new_finish = {
      ...finish,
      card_ids: finish_card_ids,
    };

    const new_state = {
      ...state,
      columns: {
        ...state.columns,
        [new_start.id]: new_start,
        [new_finish.id]: new_finish,
      },
    };

    setState(new_state);
    return;
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <main className={styles.main}>
        {state.columns_order.map((column_id) => {
          const column = state.columns[column_id];
          const cards = column.card_ids.map((card_id) => {
            return state.cards[card_id];
          });

          return (
            <ContainerColumn key={column_id} column={column} cards={cards} />
          );
        })}
      </main>
    </DragDropContext>
  );
}
export default ContentMain;
