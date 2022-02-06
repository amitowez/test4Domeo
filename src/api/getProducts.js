import axios from "axios";

export const getProducts = async (paramsString) => {
  console.log(paramsString);
  const queryString = paramsString ? `?${paramsString}` : "";
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts${queryString}`
  );

  return data;
};
