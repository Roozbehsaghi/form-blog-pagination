import React from "react";
import styles from "./LoadButton.module.scss";

const LoadButton = ({ onClick }) => {
  return (
    <div className={styles["adding-group-2"]}>
      <button className={styles.background} onClick={onClick}>
        Laad meer
      </button>
    </div>
  );
};

export default LoadButton;
