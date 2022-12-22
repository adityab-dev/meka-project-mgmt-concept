import React from "react";

import styles from "./NavbarHeader.module.css";

import navbar_header_logo from "../../Assets/NavbarHeader-logo.png";

function NavbarHeader() {
  return (
    <header>
      <section className={styles.section}>
        <div className={styles.image_container}>
          <img alt="header-logo" src={navbar_header_logo} />
        </div>
        <div className={styles.heading_container}>
          <div className={styles.header}>
            <div>Pro Manage</div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default NavbarHeader;
