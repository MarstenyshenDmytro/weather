import { DateTime } from "luxon";

export function convertDate(date) {
  return DateTime.fromSeconds(date).toFormat("dd LL");
}

export function getCurrentDate() {
  return DateTime.local().toFormat("dd LL");
}

export function changeDateView(date) {
  return `${date.slice(0, 2)}.${date.slice(3)}`;
}
