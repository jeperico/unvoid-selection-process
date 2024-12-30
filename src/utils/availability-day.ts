import { CalendarAvailability } from "../types/calendar-availability";

export const getAvailabilityDay = (availability: CalendarAvailability, day: Date) => {
  const availabilityDay = availability.include.find(
    (item: any) => item.weekday === day.getDay()
  );

  return availabilityDay;
};
