import React from "react";

import styles from "./Content.module.css";

import ContentHeader from "./ContentHeader/ContentHeader";
import ContentMain from "./ContentMain/ContentMain";

function Content() {
  return (
    <div className={styles.content}>
      <ContentHeader />
      <ContentMain />
    </div>
  );
}

export default Content;
