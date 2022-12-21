import React from "react";

import styles from "./NavbarMain.module.css";

import { RxDashboard } from "react-icons/rx";
import { FiDatabase } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import { MdOutlineSpaceDashboard } from "react-icons/md";

function NavbarMain() {
  return (
    <main className={styles.main}>
      <div className={styles.navbarCategoryContainer}>
        <div className={styles.navbarCategory}>
          <div>
            <RxDashboard />
          </div>
          <div>Heading</div>
        </div>
      </div>

      <div className={styles.navbarCategoryContainer}>
        <div className={styles.navbarCategory}>
          <MdOutlineSpaceDashboard />
          <div>Heading</div>
        </div>
      </div>

      <div className={styles.navbarCategoryContainer}>
        <div className={styles.navbarCategory}>
          <FiDatabase />
          <div>Heading</div>
        </div>
      </div>

      <div className={styles.navbarCategoryContainer}>
        <div className={styles.navbarCategory}>
          <SlSettings />
          <div>Heading</div>
        </div>
      </div>
    </main>
  );
}

export default NavbarMain;
