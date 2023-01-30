import { getHashedUrl } from "../tools/utilities";

const fetchAllCharacter = async (limit, total) => {
  const offset = Math.floor(Math.random() * (total ? total : 100));
  console.log(offset);
  let url = getHashedUrl(
    `v1/public/characters?limit=${limit}&offset=${offset.toString()}`
  );

  try {
    let response = await (await fetch(url)).json();
    console.log(response);
    return response.data;
  } catch (error) {}
};

export { fetchAllCharacter };
