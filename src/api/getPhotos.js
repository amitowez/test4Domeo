import axios from "axios";

export const getPhotos = async (paramsString) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?${paramsString}`
  );

  return new Map(
    data.map(({ id, title, url, thumbnailUrl }) => [
      id,
      {
        alt: title,
        image: url,
        thumbnailUrl,
      },
    ])
  );
};
