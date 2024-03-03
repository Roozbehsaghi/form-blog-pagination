import React from "react";
import styles from "./FormAfbeelding.module.scss";
import FormCameraComponent from "./FormCameraComponent";
import FormAttachComponent from "./FormAttachComponent";

const FormAfbeelding = () => {
  return (
    <div className={styles.box}>
      <div className={styles["header-afbeelding-box"]}>
        <p className={styles["header-afbeelding"]}>Header afbeelding</p>
      </div>

      <div className={styles["rectangle-copy"]}>
        <div className={styles["camera-position"]}>
          {/* <FormCameraComponent /> */}
        </div>
        <div className={styles["padding-group-2"]}>
          <FormAttachComponent />
        </div>
      </div>
    </div>
  );
};

export default FormAfbeelding;
