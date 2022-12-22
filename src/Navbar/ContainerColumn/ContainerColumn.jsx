import React from "react";

import styles from "./ContainerColumn.module.css";

import Container from "./Container/Container";

import { FiPlus } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function ContainerColumn({ colHeaderTitle, dataArr }) {
  const CardList = dataArr.map((data) => {
    return <Container {...data} />;
  });

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
        {CardList}
      </div>
    </div>
  );

  return content;
}

export default ContainerColumn;
