export function convertToString(obj) {
  let string = "";
  for (let key in obj) {
    string += `${key}=${obj[key]}&`;
  }
  string = string.slice(0, string.length - 1);
  return string;
}
