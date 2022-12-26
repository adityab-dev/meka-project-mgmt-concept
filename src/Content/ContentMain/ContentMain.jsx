import React from "react";

import styles from "./ContentMain.module.css";

import { cardsData } from "../../Assets/data";
import ContainerColumn from "../../Navbar/ContainerColumn/ContainerColumn";

function ContentMain() {
  return (
    <main className={styles.main}>
      {cardsData.map((cardData, index) => {
        return <ContainerColumn dataArr={cardData} key={index} />;
      })}
    </main>
  );
}
export default ContentMain;
