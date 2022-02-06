import axios from "axios";

export const getProducts = async (paramsString) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${paramsString}`
  );

  return data;
};
