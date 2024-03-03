import styles from "./HeadingSection.module.scss";
import IndividualHeading from "./IndividualHeading";
import { useEffect, useRef } from "react";

const HeadingSection = ({ posts }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref) return;

    ref.current.scrollIntoView();
  }, [posts.length]);

  if (!posts) return null;

  return (
    <div className={styles["stacked-group"]}>
      {posts.map((post, index) => {
        return (
          <div key={index} className={styles.box}>
            <IndividualHeading {...post} />
            <div ref={ref} />
          </div>
        );
      })}
    </div>
  );
};

export default HeadingSection;
