import React from "react";
import styles from "./FormCategory.module.scss";
// import { useQuery } from "react-query";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../../data/ApiConfig";

const FormCategory = ({ onChange }) => {
  const query = useQuery("categories", getCategories);

  if (!query.data) return null;

  return (
    <div className={styles.box}>
      <div className={styles["categorie-text"]}>Categorie</div>
      <div className={styles["rectangle-copy"]}>
        <select
          className={styles["geen-categorie"]}
          id="category"
          required
          onChange={onChange}
        >
          <option value="">Geen categorie</option>
          {query.data.map((option) => (
            <option
              key={option.id}
              className={styles["angle-down"]}
              value={option.id}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormCategory;
