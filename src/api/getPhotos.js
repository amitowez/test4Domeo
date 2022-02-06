import axios from "axios";

export const getPhotos = async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_limit=100`
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
