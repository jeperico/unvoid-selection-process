import { CalendarAvailability, CalendarEvent, CalendarSlot, Weekday } from '../types';
import { getAvailabilityDay, getAvailableTime, getDaysBetweenDates } from '../utils';
import { isSlotAvailableWithBuffer } from '../3-is-slot-available-with-buffer/is-slot-available-with-buffer';

export const listAvailable30MinuteSlots = (
  availability: CalendarAvailability,
  events: Array<CalendarEvent>,
  range: [Date, Date],
): Array<CalendarSlot> => {
  
  const slots: Array<CalendarSlot> = [];
  const days = getDaysBetweenDates(range);

  const availabilityDay = getAvailabilityDay(availability, days[0]);
  if (!availabilityDay) return [];

  const [availStart, availEnd] = availabilityDay.range;

  let startTime = getAvailableTime(availStart, days[0]);
  const endTime = getAvailableTime(availEnd, days[0]);

  while (startTime < endTime && startTime <= new Date(endTime.getTime() - 30 * 60000)) {
    const slot: CalendarSlot = { start: new Date(startTime), durationM: 30 };

    if (isSlotAvailableWithBuffer(availability, events, slot)) {
      slots.push(slot);
    }

    startTime = new Date(startTime.getTime() + 30 * 60000);
  }

  return slots;
};
