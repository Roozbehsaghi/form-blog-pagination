import React from "react";
import styles from "./FormTextarea.module.scss";

const FormTextarea = ({ onChange, value }) => {
  return (
    <div className={styles["text-area-box "]}>
      <div className={styles.bericht}>Bericht</div>
      <textarea
        name=""
        cols="10"
        rows="8"
        id="message"
        required
        className={styles["rectangle-copy-2"]}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormTextarea;
