import React from "react";

import styles from "./Dot.module.css";

function Dot({ color }) {
  return <div className={styles.dot_container} style={{ background: `${color}` }}></div>;
}

export default Dot;
