import React from "react";
import styles from "./Container.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Dot from "./Dot/Dot";
import Circles from "../../../Circles/Circles";
import { Draggable } from "react-beautiful-dnd";

const Container = (props) => {
  const { card, index } = props;

  const circlesList = card.circle_names.map((circle_name, index) => {
    return (
      <div className={styles.circles_component_container} key={index}>
        <Circles
          circle_name={circle_name}
          circle_color={card.circle_colors[index]}
        />
      </div>
    );
  });

  const content = (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className={styles.content_container_flex}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className={styles.content_container_center}>
            <div className={styles.content_container}>
              <div className={styles.content_header}>
                <div className={styles.content_header_left}>
                  <div className={styles.dot_container}>
                    <Dot color={card.dot_color} />
                  </div>
                  <div className={styles.header_text_container}>
                    <div className={styles.header_text}>
                      {card.header_text.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className={styles.content_header_right}>
                  <IoMdClose />
                  <BiDotsHorizontalRounded />
                </div>
              </div>

              <div className={styles.content_heading}>
                <h3>{card.heading}</h3>
              </div>

              <p>{card.main_text}</p>
              <div className={styles.circles}>{circlesList}</div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );

  return content;
};

export default Container;
