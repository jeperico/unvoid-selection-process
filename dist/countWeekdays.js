import { eachDayOfInterval, isWeekend } from 'date-fns';
/**
 * @name countWeekdays
 * @summary Calculate the number of weekdays between two dates.
 *
 * @param start - The start date.
 * @param end - The end date.
 * @typeParams Date - Date type.
 *
 * @returns The number of weekdays between the two dates.
 * @example
 * // Calculate the number of weekdays between the following dates.
 * const startDate = new Date(2024, 0, 1); // January 1, 2024
 * const endDate = new Date(2024, 0, 10); // January 10, 2024
 * const result = countWeekdays(startDate, endDate);
 * //=> 8
 */
export const countWeekdays = (start, end) => {
    const days = eachDayOfInterval({ start, end });
    return days.filter(day => !isWeekend(day)).length;
};
// [Test Case]:
const startDate = new Date(2024, 0, 1); // January 1, 2024
const endDate = new Date(2024, 0, 10); // January 10, 2024
console.log(countWeekdays(startDate, endDate)); // Output should be 8 (excluding weekends)
