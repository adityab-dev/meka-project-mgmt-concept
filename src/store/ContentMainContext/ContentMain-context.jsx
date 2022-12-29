import React from "react";

const ContentMainContext = React.createContext({
  CardsState: {},
  cardSubmitHandler: () => {},
  cardRemoveHandler: () => {},
  dragEndHandler: () => {},
});

export default ContentMainContext;
