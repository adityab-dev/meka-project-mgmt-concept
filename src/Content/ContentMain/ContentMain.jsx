import React from "react";

import styles from "./ContentMain.module.css";

import { todos, inProgressItems, doneItems } from "../../Assets/data";
import ContainerColumn from "../../Navbar/ContainerColumn/ContainerColumn";

const arr = [todos, inProgressItems, doneItems];

function ContentMain() {
  return (
    <main className={styles.main}>
      <ContainerColumn colHeaderTitle={"To Do"} dataArr={todos} />
      <ContainerColumn colHeaderTitle={"In progress"} dataArr={inProgressItems} />
      <ContainerColumn colHeaderTitle={"Done"} dataArr={doneItems} />
    </main>
  );
}
export default ContentMain;
