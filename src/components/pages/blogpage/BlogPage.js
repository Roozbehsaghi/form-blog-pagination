import React from "react";
import styles from "./BlogPage.module.scss";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import BlogHeadingSection from "./BlogHeadingSection";

const BlogPage = ({ pathToHomePage }) => {
  return (
    <div className={styles.container}>
      <div className={styles["header-section"]}>
        <Header pathToHomePage={pathToHomePage} />
        <div className={styles.blog}>Blog</div>
      </div>
      <div className={styles["body-section"]}>
        <div className={styles["form-position"]}>
          <BlogHeadingSection />
        </div>
      </div>
      <div className={styles["footer-section"]}>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
