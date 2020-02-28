import axios from "axios";
import CryptoJS from "crypto-js";
import {
  API_URL,
  APP_ID,
  CONSUMER_KEY,
  CONSUMER_SECRET,
  CONCAT
} from "../app.constans";
import { convertToString } from "../utils/converToString";

const client = (method, params) => {
  const oauth = {
    oauth_consumer_key: CONSUMER_KEY,
    oauth_nonce: Math.random()
      .toString(36)
      .substring(2),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
    oauth_version: "1.0"
  };
  const merged = Object.assign({}, params, oauth);
  const merged_arr = Object.keys(merged)
    .sort()
    .map(function(k) {
      return [k + "=" + encodeURIComponent(merged[k])];
    });
  const signature_base_str =
    method +
    CONCAT +
    encodeURIComponent(API_URL) +
    CONCAT +
    encodeURIComponent(merged_arr.join(CONCAT));

  const composite_key = encodeURIComponent(CONSUMER_SECRET) + CONCAT;
  const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  const signature = hash.toString(CryptoJS.enc.Base64);

  oauth["oauth_signature"] = signature;
  const auth_header =
    "OAuth " +
    Object.keys(oauth)
      .map(function(k) {
        return [k + '="' + oauth[k] + '"'];
      })
      .join(",");

  return axios.create({
    baseURL: `${API_URL}?${convertToString(params)}`,
    headers: {
      Authorization: auth_header,
      "X-Yahoo-App-Id": APP_ID
    }
  });
};

export default client;
