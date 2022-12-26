import React, { useState } from "react";

import styles from "./ContainerColumn.module.css";

import Container from "./Container/Container";

import { FiPlus } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function ContainerColumn({ colHeaderTitle, dataArr }) {
  const [dataObjsArr, setdataObjsArr] = useState(dataArr);

  function onDragEndHandler(eventObj) {
    // rearranging arr to register change on dummy data arr and save it.

    if (!eventObj.destination) {
      console.log("eventObj(b/w) cols", eventObj);
      return;
    }

    const initPos = eventObj.source.index;
    const finalPos = eventObj.destination.index;

    const newDataObjArr = Array.from(dataObjsArr);

    const itemToMove = newDataObjArr.splice(initPos, 1);
    newDataObjArr.splice(finalPos, 0, ...itemToMove);

    setdataObjsArr(newDataObjArr);
  }

  const content = (
    <div className={styles.content_col_container}>
      <div className={styles.content_col}>
        <div className={styles.main_header}>
          <div className={styles.header_content_left}>
            <div>
              <em>{colHeaderTitle}</em>
            </div>
          </div>
          <div className={styles.header_content_right}>
            <FiPlus />
            <BiDotsHorizontalRounded />
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEndHandler}>
          <Droppable droppableId="dropable-item">
            {(provided) => (
              <div className={styles.droppable_area} {...provided.droppableProps} ref={provided.innerRef}>
                {dataObjsArr.map((data, index) => (
                  <Draggable key={data.id} draggableId={data.id} index={index}>
                    {(provided) => (
                      <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <Container {...data} />
                        {provided.placeHolder}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );

  return content;
}

export default ContainerColumn;
