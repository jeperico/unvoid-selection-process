import { formatDistanceToNow, formatDistance } from "date-fns";

/**
 * @name getTimeAgo
 * @summary Get the formated time difference between two dates.
 * 
 * @param date - The date to compare.
 * @param dateToCompare - The date to compare with (if void, uses now).
 * @typeParams Date - Date type.
 * 
 * @returns A formated string representing the time difference between the two dates.
 * @example
 * // Get the time difference between the following dates.
 * const date = new Date(2023, 0, 1); // January 1, 2023
 * const dateToCompare = new Date(2023, 0, 10); // January 10, 2023
 * 
 * const result = getTimeAgo(date); // Output should be "almost 2 years"
 * const result2 = getTimeAgo(date, dateToCompare); // Output should be "9 days"
 */

export const getTimeAgo = (date: Date, dateToCompare?: Date): string => {
  return dateToCompare ? formatDistance(date, dateToCompare) : formatDistanceToNow(date);
}
