/**
 * I know this component is not fully functional, I made it just to be able to show the pagination.
 * I have written another component below, unfortunately it does not work properly.
 */

import React, { useState, useEffect } from "react";
import styles from "./BlogHeadingSection.module.scss";
import IndividualBlogPageHeading from "../blogpage/IndividualBlogPageHeading";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { convertToDate } from "../../functions/functions";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getPosts } from "../../data/ApiConfig";

const BlogHeadingSection = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const { status, data, error, isInitialLoading, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["posts", page],
      queryFn: () => getPosts(page),
      keepPreviousData: true,
      staleTime: 5000,
    });

  useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ["projects", page + 1],
        queryFn: () => getPosts(page + 1),
      });
    }
  }, [data, isPreviousData, page, queryClient]);

  if (isInitialLoading) return <h1>Loading posts...</h1>;

  if (status === "error") {
    // Display error message on UI
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  const handleChange = (_event, value) => {
    setPage(value);
  };

  return (
    <div className={styles["stacked-group-copy"]}>
      {data?.data?.map((item, index) => {
        const categoryTitle = item.category.name;
        const created_at = convertToDate(item.created_at);
        const content = item.content;
        const img_url = item.img_url;

        return (
          <div key={index} className={styles.box}>
            <IndividualBlogPageHeading
              content={content}
              categoryTitle={categoryTitle}
              created_at={created_at}
              img_url={img_url}
            />
          </div>
        );
      })}

      <div className={styles.pagination}>
        <Stack spacing={2}>
          <Pagination
            count={data.last_page}
            onChange={handleChange}
            color="primary"
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#F27623",
                color: "#fff",
              },
              "& .MuiPaginationItem-page, & .MuiPaginationItem-ellipsis": {
                color: "#F27623",
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default BlogHeadingSection;

/**
 * The library I'm using is a nice one, but I couldn't figure it out completely!
 */

// import React from "react";
// import styles from "./BlogHeadingSection.module.scss";
// import IndividualBlogPageHeading from "../blogpage/IndividualBlogPageHeading";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { useInfiniteQuery } from "react-query";
// import { getPosts } from "../../data/ApiConfig";
// import { convertToDate, params } from "../../functions/functions";

// const BlogHeadingSection = () => {
//   const query = useInfiniteQuery({
//     queryKey: "posts",
//     queryFn: ({ pageParam = 1 }) => getPosts(pageParam),
//     getNextPageParam: ({ current_page, last_page }) =>
//       Math.min(current_page + 1, last_page),
//   });

//   const handleChange = (event, value) => {
//     // Manually fetch the next page based on the number of items per page
//     query.fetchNextPage({ pageParam: value });
//   };

//   return (
//     <div className={styles["stacked-group-copy"]}>
//       {query.data &&
//         query.data.pages.map((page) =>
//           page.data.map((item) => {
//             const categoryTitle = item.category.name;
//             const created_at = convertToDate(item.created_at);
//             const content = item.content;
//             const img_url = item.img_url;

//             return (
//               <div key={item.id} className={styles.box}>
//                 <IndividualBlogPageHeading
//                   content={content}
//                   categoryTitle={categoryTitle}
//                   created_at={created_at}
//                   img_url={img_url}
//                 />
//               </div>
//             );
//           })
//         )}

//       {query.hasNextPage && (
//         <div className={styles.pagination}>
//           <Stack spacing={2}>
//             <Pagination
//               count={Math.min(query.data ? query.data.pages.length + 1 : 1, 19)}
//               onChange={handleChange}
//               color="primary"
//               sx={{
//                 "& .MuiPaginationItem-root.Mui-selected": {
//                   backgroundColor: "#F27623",
//                   color: "#fff",
//                 },
//                 "& .MuiPaginationItem-page, & .MuiPaginationItem-ellipsis": {
//                   color: "#F27623",
//                 },
//               }}
//             />
//           </Stack>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogHeadingSection;
