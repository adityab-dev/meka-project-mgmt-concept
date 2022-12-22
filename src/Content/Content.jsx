import React from "react";

import styles from "./Content.module.css";

import ContentHeader from "./ContentHeader/ContentHeader";
import ContentMain from "./ContentMain/ContentMain";

import { todo, inProgress, done } from "../Assets/data";

function Content() {
  return (
    <div className={styles.content}>
      <ContentHeader />
      <ContentMain />
    </div>
  );
}

export default Content;
