import { CalendarEvent } from "src/types";

export function isAvailabilityEvent(events: Array<CalendarEvent>, slotStart: Date, slotEnd: Date): boolean {
  return events.some((event) => {
    const eventStartWithBuffer = new Date(event.start.getTime() - (event.buffer?.before || 0) * 60000);
    const eventEndWithBuffer = new Date(event.end.getTime() + (event.buffer?.after || 0) * 60000);

    const isOverlapping = slotStart < eventEndWithBuffer && slotEnd > eventStartWithBuffer;

    return isOverlapping;
  });
}
