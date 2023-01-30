import { getHashedUrl } from "../tools/utilities";
const fetchComics = async (offset) => {
  let url = getHashedUrl(`v1/public/comics?limit=20&offset=${offset}`);
  //   console.log(marvelPrivateKey, marvelPublicKey, hash);
  try {
    let response = await (await fetch(url)).json();
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchComicsQuery = async (params) => {
  console.log(params);
};

export { fetchComics };
