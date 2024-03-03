import React, { useState } from "react";
import MaskHeading from "../../../assets/images/Mask-Heading.png";
import styles from "./IndividualBlogPageHeading.module.scss";

const IndividualBlogPageHeading = ({
  content,
  categoryTitle,
  created_at,
  img_url,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.newsitem}>
      <div className={styles.mask}>
        {!imageError && (
          <img
            src={MaskHeading}
            alt="Mask-Heading"
            className={styles.bitmap}
            onError={handleImageError}
          />
        )}
        {imageError && (
          <img src={MaskHeading} alt="Mask-Heading" className={styles.bitmap} />
        )}

        <div className={styles.date}>{created_at}</div>
        <div className={styles.tech}>{categoryTitle}</div>
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

export default IndividualBlogPageHeading;
