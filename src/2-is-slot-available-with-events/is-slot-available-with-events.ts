import { CalendarAvailability, CalendarEvent, CalendarSlot, Time } from '../types';
import { isAvailabilityEvent, getAvailabilityDay, getAvailableTime } from '../utils';

export const isSlotAvailableWithEvents = (
  availability: CalendarAvailability,
  events: Array<Omit<CalendarEvent, 'buffer'>>,
  slot: CalendarSlot,
): boolean => {
  const availabilityDay = getAvailabilityDay(availability, slot.start);
  if (!availabilityDay) return false;

  const slotStart = slot.start;
  const slotEnd = new Date(slot.start.getTime() + slot.durationM * 60000);
  
  const availabilityEvent = isAvailabilityEvent(events, slotStart, slotEnd);
  if (availabilityEvent) return false;
  
  const [availStart, availEnd] = availabilityDay.range;
  const availableStart = getAvailableTime(availStart, slotStart);
  const availableEnd = getAvailableTime(availEnd, slotEnd);
  
  return slotStart >= availableStart && slotEnd <= availableEnd;
};
