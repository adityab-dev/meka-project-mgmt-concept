import React from "react";

import styles from "./Navbar.module.css";

import NavbarFooter from "./NavbarFooter/NavbarFooter";
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import NavbarMain from "./NavbarMain/NavbarMain";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavbarHeader />
      <NavbarMain />
      <NavbarFooter />
    </div>
  );
}

export default Navbar;
