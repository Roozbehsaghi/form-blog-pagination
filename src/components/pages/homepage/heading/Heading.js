import React from "react";
import styles from "./Heading.module.scss";
import HeadingSection from "./HeadingSection";
import LoadButton from "../../../button/LoadButton";
// import { useInfiniteQuery } from "react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "../../../data/ApiConfig";

const Heading = () => {
  const query = useInfiniteQuery({
    queryKey: "posts",
    queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
    getNextPageParam: ({ current_page, last_page }) =>
      Math.min(current_page + 1, last_page),
  });

  const handleLoadMore = () => {
    // Increase the number of displayed items
    query?.fetchNextPage();
  };

  return (
    <div className={styles.container}>
      <div className={styles["stacked-group"]}>
        {query.data && (
          <HeadingSection posts={query.data?.pages.flatMap((p) => p.data)} />
        )}
      </div>
      <div>
        <LoadButton onClick={handleLoadMore} />
      </div>
    </div>
  );
};

export default Heading;
