import React from "react";
import styles from "./Header.module.scss";
import Mask from "../../assets/images/Mask.png";
import Logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";

const Header = ({ pathToBlogPage, pathToHomePage }) => {
  return (
    <header className={styles["header-container"]}>
      <div className={styles.mask}>
        <img src={Mask} alt="Mask" />
        <div className={styles["logo-box"]}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles["stacked-group"]}>
          <NavLink
            to={pathToHomePage}
            className={({ isActive }) =>
              isActive ? `${styles.home} ${styles.active}` : styles.home
            }
          >
            Home
          </NavLink>
          <NavLink
            to={pathToBlogPage}
            className={({ isActive }) =>
              isActive ? `${styles.blog} ${styles.active}` : styles.blog
            }
          >
            Blog
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
