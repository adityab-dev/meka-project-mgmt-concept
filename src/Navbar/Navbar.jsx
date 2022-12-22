import React from "react";

import styles from "./Navbar.module.css";

import NavbarFooter from "./NavbarFooter/NavbarFooter";
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import NavbarMain from "./NavbarMain/NavbarMain";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_upper}>
        <div className={styles.navbar_header}>
          <NavbarHeader />
        </div>
        <div className={styles.navbar_main}>
          <NavbarMain />
        </div>
      </div>
      <div className={styles.navbar_bottom}>
        <NavbarFooter />
      </div>
    </div>
  );
}

export default Navbar;
