import axios from "axios";
import CryptoJS from "crypto-js";
import { API_URL } from "../app.constans";

//OAUTH
let url = API_URL;
let method = "GET";
let app_id = "RJWrrR4i";
let consumer_key =
  "dj0yJmk9SmhpSDF5eWR3eEpMJmQ9WVdrOVVrcFhjbkpTTkdrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTc4";
let consumer_secret = "2fea493186132c0c6a51b1c9504d5713e561139d";
let concat = "&";
let query = { location: "sunnyvale,ca", format: "json" };
let oauth = {
  oauth_consumer_key: consumer_key,
  oauth_nonce: Math.random()
    .toString(36)
    .substring(2),
  oauth_signature_method: "HMAC-SHA1",
  oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
  oauth_version: "1.0"
};
let merged = {};
//$.extend(merged, query, oauth);
// Note the sorting here is required
let merged_arr = Object.keys(merged)
  .sort()
  .map(function(k) {
    return [k + "=" + encodeURIComponent(merged[k])];
  });
let signature_base_str =
  method +
  concat +
  encodeURIComponent(url) +
  concat +
  encodeURIComponent(merged_arr.join(concat));

let composite_key = encodeURIComponent(consumer_secret) + concat;
let hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
let signature = hash.toString(CryptoJS.enc.Base64);

oauth["oauth_signature"] = signature;
let auth_header =
  "OAuth " +
  Object.keys(oauth)
    .map(function(k) {
      return [k + '="' + oauth[k] + '"'];
    })
    .join(",");
//OAUTH END

const client = ({ headers, ...rest } = {}) => {
  // const res = axios.get(`${API_URL}${url}`)
  return axios({
    method: "get",
    url: `${url}`,
    headers: {
      Authorization: auth_header,
      "X-Yahoo-App-Id": app_id
    }
  }).then(r => r);
};

export default client;
