import React from "react";

import styles from "./NavbarHeader.module.css";

import navbar_header_logo from "../../Assets/NavbarHeader-logo.png";

function NavbarHeader() {
  return (
    <header>
      <section className={styles.headerSection}>
        <img alt="header-logo" src={navbar_header_logo} />
        <div>Pro Manage</div>
      </section>
    </header>
  );
}

export default NavbarHeader;
