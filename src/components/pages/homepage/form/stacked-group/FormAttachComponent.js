import React, { useRef } from "react";
import styles from "./FormAttachComponent.module.scss";

const FormAttachComponent = () => {
  const fileInputRef = useRef();

  const handleChange = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        aria-label="Upload afbeelding"
        className={styles.hiddenInput}
      />

      <div className={styles["padding-group-2"]}>
        <button onClick={handleChange} className={styles.customButton}>
          Kies bestad
        </button>
      </div>
    </div>
  );
};

export default FormAttachComponent;
