import { CalendarAvailability, CalendarSlot, Time } from '../types';
import { getAvailabilityDay, getAvailableTime } from '../utils';

export const isSlotAvailable = (availability: CalendarAvailability, slot: CalendarSlot): boolean => {

  const availabilityDay = getAvailabilityDay(availability, slot.start);
  if (!availabilityDay) return false;
  
  const slotStart = slot.start;
  const slotEnd = new Date(slot.start.getTime() + slot.durationM * 60000);
  
  const [availStart, availEnd] = availabilityDay.range;
  const availableStart = getAvailableTime(availStart, slotStart);
  const availableEnd = getAvailableTime(availEnd, slotEnd);
  
  return slotStart >= availableStart && slotEnd <= availableEnd;
};
