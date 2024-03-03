import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["group-12"]}>
        &copy; Copyright Social Brothers - 2023
      </div>
    </footer>
  );
};

export default Footer;
