import ContentMainContext from "./ContentMain-context";

import React, { useReducer } from "react";

import init_data from "../../Assets/data";

const defaultCardsState = init_data;

const CardsReducer = (state, action) => {
  if (action.type === "ADD") {
    const column_id = action.payload.column_id;
    const newcardId = action.payload.id;

    // modifying obj. to add in state.
    delete action.payload.column_id;

    const newState = { ...state };

    newState.cards[action.payload.id] = {
      ...action.payload,
    };

    newState.columns[column_id].card_ids.splice(0, 0, newcardId);

    return newState;
  }

  if (action.type === "REMOVE") {
    const newState = { ...state };
    delete newState.cards[action.payload.card_id];

    const column = newState.columns[action.payload.column_id];

    const item_index = column.card_ids.findIndex((el) => {
      return el === action.payload.card_id;
    });

    newState.columns[action.payload.column_id].card_ids.splice(
      item_index,
      1
    );

    return newState;
  }

  if (action.type === "DRAGGING") {
    const { source, destination, draggableId, type } = action.payload;

    if (!destination) return state;

    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return state;

    if (type === "column") {
      const new_columns_order = Array.from(state.columns_order);
      new_columns_order.splice(source.index, 1);
      new_columns_order.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columns_order: new_columns_order,
      };

      return newState;
    }

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

      return new_state;
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

    return new_state;
  }

  if (action.type === "ADD_COLUMN") {
    const title = action.payload;

    const id = Math.random() * 100;

    const new_column = {
      [id]: {
        id,
        title,
        card_ids: [],
      },
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        ...new_column,
      },
      columns_order: [...state.columns_order, id],
    };
    console.log("newState", newState);
    return newState;
  }

  if (action.type === "REMOVE_COLUMN") {
    const id = action.payload;

    const column_index = [...state.columns_order].findIndex(
      (column_id) => {
        return column_id === id;
      }
    );

    const new_columns_order = [...state.columns_order];

    new_columns_order.splice(column_index, 1);

    const new_columns = {
      ...state.columns,
    };

    delete new_columns.id;

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        ...new_columns,
      },
      columns_order: new_columns_order,
    };

    return newState;
  }
  return defaultCardsState;
};

const ContentMainProvider = (props) => {
  const [CardsState, DispatchCardsAction] = useReducer(
    CardsReducer,
    defaultCardsState
  );

  const columnRemoveHandler = (data) =>
    DispatchCardsAction({ type: "REMOVE_COLUMN", payload: data });

  const columnFormSubmitHandler = (data) =>
    DispatchCardsAction({ type: "ADD_COLUMN", payload: data });

  const cardSubmitHandler = (data) =>
    DispatchCardsAction({ type: "ADD", payload: data });

  const cardRemoveHandler = (data) =>
    DispatchCardsAction({ type: "REMOVE", payload: data });

  const dragEndHandler = (eventObj) =>
    DispatchCardsAction({ type: "DRAGGING", payload: eventObj });

  const cardsContextValueProp = {
    CardsState,
    cardSubmitHandler,
    cardRemoveHandler,
    dragEndHandler,
    columnFormSubmitHandler,
    columnRemoveHandler,
  };

  return (
    <ContentMainContext.Provider value={cardsContextValueProp}>
      {props.children}
    </ContentMainContext.Provider>
  );
};

export default ContentMainProvider;
