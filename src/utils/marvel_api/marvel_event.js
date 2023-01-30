import md5 from "crypto-js/md5";
import { getHashedUrl } from "../tools/utilities";

const fetchMarvelEvent = async () => {
  let url = getHashedUrl("v1/public/events");
  //   console.log(marvelPrivateKey, marvelPublicKey, hash);
  try {
    let response = await (await fetch(url)).json();
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchMarvelEvent };
