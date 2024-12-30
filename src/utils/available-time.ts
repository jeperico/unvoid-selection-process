import { Time } from '../types';

export const getAvailableTime = (time: Time, day: Date): Date => {
  const date = new Date(day);
  date.setHours(time.hours, time.minutes, 0, 0);
  return date;
};
