import React, { useState } from "react";
import styles from "./Form.module.scss";
import FormStackedGroup from "./stacked-group/FormStackedGroup";
import { createPost } from "../../../data/ApiConfig";
import FormBlogTextTitle from "./stacked-group/FormBlogTextTitle";
import FormTextName from "./stacked-group/FormTextName";
import FormCategory from "./stacked-group/FormCategory";
import FormAfbeelding from "./stacked-group/FormAfbeelding";
import FormTextarea from "./stacked-group/FormTextarea";
import FormButton from "../../../button/FormButton";
// import { useMutation, useQueryClient } from "react-query";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const queryClient = useQueryClient();
  const mutation = useMutation(createPost, {
    onSuccess: () => queryClient.invalidateQueries("posts"),
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryChange = (selectedCategory) => {
    console.log("Selected category:", selectedCategory);
    setSelectedCategory(selectedCategory);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if file is selected
    if (!selectedFile) {
      alert("Please select an image before submitting the form");
      return;
    }

    // Perform validation
    if (!selectedFile || !title || !content || !selectedCategory) {
      console.error("All fields must be filled.");
      return;
    }

    // call the API
    mutation.mutate({
      title,
      content,
      category_id: selectedCategory,
      image: selectedFile,
    });
  };

  return (
    <div className={styles.background}>
      <FormStackedGroup>
        <form onSubmit={handleSubmit}>
          <div className={styles["blog-text-title-box"]}>
            <FormBlogTextTitle />
          </div>
          <div className={styles["text-name-box"]}>
            <FormTextName
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles["category-box"]}>
            <FormCategory onChange={handleCategoryChange} />
          </div>
          <div className={styles["afbeelding-box"]}>
            <FormAfbeelding onChange={handleFileChange} />
          </div>
          <div className={styles["textarea-box"]}>
            <FormTextarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className={styles["form-button-box"]}>
            <FormButton />
          </div>
        </form>
      </FormStackedGroup>
    </div>
  );
};

export default Form;
