import React from "react";

import styles from "./ContentMain.module.css";

import { FiPlus } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function ContentMain() {
  return (
    <main className={styles.main}>
      <div className={styles.content_col}>
        <div className={styles.flex_container}>
          <div className={styles.main_header}>
            <div>Todo</div>
            <div className={styles.icons}>
              <FiPlus />
              <BiDotsHorizontalRounded />
            </div>
          </div>

          <div>
            <div>dot</div>
            <div>design system</div>
            <BiDotsHorizontalRounded />
            <div>Hero Section</div>
            <p>
              Create a design system for a hero section in 2 different variants. Create a simple
              presentation with these components.
            </p>
            <div>overlap-circle</div>
          </div>
        </div>
      </div>

      <div>col 2</div>
      <div>col 3</div>
    </main>
  );
}

export default ContentMain;
