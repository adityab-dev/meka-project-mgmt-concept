import React from "react";

import styles from "./Content.module.css";

import ContentHeader from "./ContentHeader/ContentHeader";
import ContentMain from "./ContentMain/ContentMain";

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.content_header}>
        <ContentHeader />
      </div>
      <div className={styles.content_main}>
        <ContentMain />
      </div>
    </div>
  );
}

export default Content;
