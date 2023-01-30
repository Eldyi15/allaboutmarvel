import md5 from "crypto-js/md5";
const marvelPublicKey = process.env.REACT_APP_marvelPublicKey;
const marvelPrivateKey = process.env.REACT_APP_marvelPrivateKey;
const API_URL = process.env.REACT_APP_marvelAPI;

const getHashedUrl = (endpoint) => {
  let baseUrl = `${API_URL}/${endpoint}`;
  let ts = Date.now().toString();
  let hash = md5(ts + marvelPrivateKey + marvelPublicKey).toString();
  let url = `${baseUrl}?ts=${ts}&apikey=${marvelPublicKey}&hash=${hash}`;
  return url;
};

export { getHashedUrl };
