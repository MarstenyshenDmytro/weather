import axios from "axios";
import CryptoJS from "crypto-js";
import { API_URL, GEOLOCATION } from "../app.constans";

function convertToString(obj) {
  let string = "";
  for (let key in obj) {
    string += `${key}=${obj[key]}&`;
  }
  string = string.slice(0, string.length - 1);
  return string;
}

//OAUTH
let url = API_URL;
let method = "GET";
let app_id = "jwqlaF32";
let consumer_key =
  "dj0yJmk9dlZJRzl6Um9qU2E4JmQ9WVdrOWFuZHhiR0ZHTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWZm";
let consumer_secret = "f8060887a395162467f0b25aa56aec8bf8abd923";
let concat = "&";
let query = { location: GEOLOCATION, format: "json", u: "c" };
let oauth = {
  oauth_consumer_key: consumer_key,
  oauth_nonce: Math.random()
    .toString(36)
    .substring(2),
  oauth_signature_method: "HMAC-SHA1",
  oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
  oauth_version: "1.0"
};

let merged = Object.assign({}, query, oauth);
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
  console.log("QQ");
  // const res = axios.get(`${API_URL}${url}`)
  return axios({
    url: `${url}?${convertToString(query)}`,
    headers: {
      Authorization: auth_header,
      "X-Yahoo-App-Id": app_id
    },
    method: "get"
  }).then(r => r.data);
};

export default client;
