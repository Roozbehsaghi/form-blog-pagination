import React from "react";
import styles from "./FormButton.module.scss";

const FormButton = ({ onSubmit }) => {
  return (
    <button className={styles.background} onClick={onSubmit}>
      Bericht aanmaken
    </button>
  );
};

export default FormButton;
