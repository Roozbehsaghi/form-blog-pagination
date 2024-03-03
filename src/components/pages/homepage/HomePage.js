import React from "react";
import styles from "./HomePage.module.scss";
import Header from "../../header/Header";
import Form from "./form/Form";
import Heading from "./heading/Heading";
import Footer from "../../footer/Footer";

const HomePage = ({ pathToBlogPage }) => {
  return (
    <div className={styles["app-container"]}>
      <div className={styles["header-section"]}>
        <Header pathToBlogPage={pathToBlogPage} />
      </div>

      <div className={styles["body-section"]}>
        <div className={styles["form-position"]}>{/* <Form /> */}</div>
        <div className={styles["heading-position"]}>
          <Heading />
        </div>
      </div>
      <div className={styles["footer-section"]}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
