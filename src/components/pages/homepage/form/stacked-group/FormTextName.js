import React from "react";
import styles from "./FormTextName.module.scss";

const FormTextName = ({ value, onChange }) => {
  return (
    <div className={styles.box}>
      <div className={styles.berichtnaam}>Berichtnaam</div>
      <div className={styles.rectangle}>
        <input
          className={styles["geen-titel"]}
          id="name"
          type="text"
          placeholder="Geen titel"
          autoComplete="name"
          required
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormTextName;
