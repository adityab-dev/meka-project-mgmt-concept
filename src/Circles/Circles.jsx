import React from "react";

import styles from "./Circles.module.css";

function Circles({ circleName, circleColor }) {
  const content = (
    <div className={styles.circle_container}>
      <div className={styles.circle} style={{ background: `${circleColor}` }}>
        <div className={styles.text_container}>
          <div>{circleName}</div>
        </div>
      </div>
    </div>
  );

  return content;
}

export default Circles;
