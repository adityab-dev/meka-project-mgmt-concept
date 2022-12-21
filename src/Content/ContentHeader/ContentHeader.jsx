import React from "react";

import styles from "./ContentHeader.module.css";

import { IoIosArrowDown } from "react-icons/io";
import { BsBell, BsQuestionCircle, BsSearch } from "react-icons/bs";

import profile_pic from "../../Assets/ContentHeader-profilepic.png";

function ContentHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div>
          <div>
            <BsSearch />
            Search
          </div>
        </div>
        <div>
          <BsBell />
          <BsQuestionCircle />
          <img alt="head-img" src={profile_pic} />
        </div>
      </div>

      <div className={styles.headerBottom}>
        <div>Board</div>
        <div>
          This Week <IoIosArrowDown />
        </div>
      </div>
    </header>
  );
}

export default ContentHeader;
