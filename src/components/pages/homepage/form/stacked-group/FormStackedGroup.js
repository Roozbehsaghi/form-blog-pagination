import React from "react";
import styles from "./FormStackedGroup.module.scss";

const FormStackedGroup = ({ children }) => {
  return <div className={styles["stacked-group"]}>{children}</div>;
};

export default FormStackedGroup;
