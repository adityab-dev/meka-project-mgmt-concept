import React from "react";

import styles from "./Circles.module.css";

function Circles(props) {
  const { circle_name, circle_color } = props;
  const content = (
    <div className={styles.circle_container}>
      <div className={styles.circle} style={{ background: `${circle_color}` }}>
        <div className={styles.text_container}>
          <div>{circle_name}</div>
        </div>
      </div>
    </div>
  );

  return content;
}

export default Circles;
