export const getDaysBetweenDates = (range: Array<Date>): Array<Date> => {
  const [rangeStart, rangeEnd] = range;

  if(rangeStart.toDateString() === rangeEnd.toDateString()) return range;

  const dates: Array<Date> = [];
  let currentDate = new Date(rangeStart);

  while (currentDate <= rangeEnd) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  dates[0].setHours(rangeStart.getHours());
  dates[dates.length - 1].setHours(rangeEnd.getHours());

  return dates;
};
