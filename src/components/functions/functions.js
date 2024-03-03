export const convertToDate = (timestamp) => {
  const dtObject = new Date(timestamp);
  const year = dtObject.getFullYear();
  let month = (dtObject.getMonth() + 1).toString().padStart(2, "0");
  let day = dtObject.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Define the parameters
export const params = new URLSearchParams({
  page: "1",
  perPage: "160",
  sortBy: "title",
  sortDirection: "asc",
  searchPhrase: "test ber",
  categoryId: "1",
});
