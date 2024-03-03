export const host = "https://frontend-case-api.sbdev.nl/api";
export const token = "pj11daaQRz7zUIH56B9Z";

// Define the parameters
export const params = {
  page: "1",
  perPage: "4",
  // sortBy: "title",
  // sortDirection: "asc",
  // searchPhrase: "test ber",
  // categoryId: "1",
};

// Set up options with headers
export const options = {
  method: "GET",
  headers: {
    token: `${token}`,
    "Content-Type": "application/json",
  },
};

export const getPosts = async (page = 1) => {
  const response = await fetch(
    `${host}/posts?${new URLSearchParams({ ...params, page }).toString()}`,
    options
  );

  return response.json();
};

export const getCategories = async (page = 1) => {
  const response = await fetch(`${host}/categories`, options);

  return response.json();
};

export const createPost = async (data) => {
  // Prepare the data to send to the API
  const body = new FormData();
  Object.keys(data).forEach((key) => {
    body.append(key, data[key]);
  });

  const response = await fetch(`${host}/posts`, {
    ...options,
    method: "POST",
    body,
  });

  return response.json();
};
