import React from "react";

import styles from "./NavbarFooter.module.css";

import { FiLogOut } from "react-icons/fi";

function NavbarFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoutContainer}>
        <div className={styles.logoutContent}>
          <div className={styles.logoContainer}>
            <FiLogOut />
          </div>
          <div className={styles.textContainer}>
            <div>Log Out</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NavbarFooter;
