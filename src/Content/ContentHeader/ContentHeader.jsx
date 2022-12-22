import React from "react";

import styles from "./ContentHeader.module.css";

import { IoIosArrowDown } from "react-icons/io";
import { BsBell, BsQuestionCircle, BsSearch } from "react-icons/bs";

import profile_pic from "../../Assets/ContentHeader-profilepic.png";

function ContentHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.searchbar}>
          <div className={styles.search_image_container}>
            <BsSearch />
          </div>
          <div className={styles.search_text}>Search</div>
        </div>

        <div className={styles.toggles_container}>
          <div className={styles.toggles}>
            <div className={styles.bell}>
              <BsBell />
            </div>
            <div className={styles.question}>
              <BsQuestionCircle />
            </div>
            <div className={styles.profile_pic}>
              <img alt="head-img" src={profile_pic} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.headerBottom}>
        <div className={styles.text_left}>
          <div>Board</div>
        </div>
        <div className={styles.text_right}>
          <div>This Week</div>
          <div className={styles.dropdown_container}>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ContentHeader;
