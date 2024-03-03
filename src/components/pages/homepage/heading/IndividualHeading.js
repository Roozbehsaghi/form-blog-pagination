import React, { useState } from "react";
import styles from "./IndividualHeading.module.scss";
import MaskHeading from "../../../../assets/images/Mask-Heading.png";
import { convertToDate } from "../../../functions/functions";

const IndividualHeading = ({ content, created_at, category, img_url }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.newsitem}>
      <div className={styles.mask}>
        {!imageError && (
          <img
            src={img_url}
            alt="Mask-Heading"
            className={styles.bitmap}
            onError={handleImageError}
          />
        )}

        {imageError && (
          <img src={MaskHeading} alt="Mask-Heading" className={styles.bitmap} />
        )}
        <div className={styles.date}>{convertToDate(created_at)}</div>
        <div className={styles.tech}>{category?.name}</div>
      </div>

      <div className={styles["group-17"]}>
        <div className={styles.heading}>Heading</div>
        <div className={styles["lorem-ipsum-dolor-si"]}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualHeading;
