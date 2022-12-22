import React from "react";

import styles from "./NavbarMain.module.css";

import { RxDashboard } from "react-icons/rx";
import { FiDatabase } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import { MdOutlineSpaceDashboard } from "react-icons/md";

function NavbarMain() {
  return (
    <main className={styles.main}>
      <div className={styles.main_content_container}>
        <div className={styles.navbarCategoryContainer}>
          <div className={styles.navbarCategory}>
            <div className={styles.navbar_main_icon}>
              <RxDashboard />
            </div>
            <div>Dashboard</div>
          </div>
        </div>

        <div className={styles.navbarCategoryContainer}>
          <div className={styles.navbarCategory}>
            <div className={styles.navbar_main_icon}>
              <MdOutlineSpaceDashboard />
            </div>
            <div>Board</div>
          </div>
        </div>

        <div className={styles.navbarCategoryContainer}>
          <div className={styles.navbarCategory}>
            <div className={styles.navbar_main_icon}>
              <FiDatabase />
            </div>
            <div>Analytics</div>
          </div>
        </div>
        <div className={styles.navbarCategoryContainer}>
          <div className={styles.navbarCategory}>
            <div className={styles.navbar_main_icon}>
              <SlSettings />
            </div>
            <div>Settings</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NavbarMain;
