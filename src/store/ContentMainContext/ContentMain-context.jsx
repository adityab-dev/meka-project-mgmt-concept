import React from "react";

const ContentMainContext = React.createContext({
  CardsState: {},
  cardSubmitHandler: () => {},
  cardRemoveHandler: () => {},
  dragEndHandler: () => {},
  columnFormSubmitHandler: () => {},
  columnRemoveHandler: () => {},
});

export default ContentMainContext;
