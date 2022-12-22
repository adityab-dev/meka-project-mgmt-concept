import React from "react";

import styles from "./Container.module.css";

import { BiDotsHorizontalRounded } from "react-icons/bi";
import Dot from "./Dot/Dot";
import Circles from "../../../Circles/Circles";

function Container({ dotColor, headerText, heading, mainText, circleNames, circleColors }) {
  const circlesList = circleNames.map((circleName, index) => {
    return <Circles circleName={circleName} circleColor={circleColors[index]} />;
  });
  return (
    <div className={styles.content_container_flex}>
      <div className={styles.content_container_center}>
        <div className={styles.content_container}>
          <div className={styles.content_header}>
            <div className={styles.content_header_left}>
              <div className={styles.dot_container}>
                <Dot color={dotColor} />
              </div>
              <div className={styles.header_text_container}>
                <div className={styles.header_text}>{headerText.toUpperCase()}</div>
              </div>
            </div>
            <div className={styles.content_header_right}>
              <BiDotsHorizontalRounded />
            </div>
          </div>

          <div className={styles.content_heading}>
            <h3>{heading}</h3>
          </div>

          <p>{mainText}</p>
          <div className={styles.circles}>{circlesList}</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
