import { countWeekdays } from './countWeekdays';

describe('countWeekdays', () => {
  it('should return the number of weekdays between following dates', () => {
    const startDate = new Date(2024, 0, 1);
    const endDate = new Date(2024, 0, 10);

    const result = countWeekdays(startDate, endDate);

    expect(result).toBe(8);
  });

  it('should return 0 for both dates are on the same weekend', () => {
    const startDate = new Date(2024, 0, 6);
    const endDate = new Date(2024, 0, 7);

    const result = countWeekdays(startDate, endDate);

    expect(result).toBe(0);
  });

  it('should return 1 for a single weekday', () => {
    const startDate = new Date(2024, 0, 1);
    const endDate = new Date(2024, 0, 1);

    const result = countWeekdays(startDate, endDate);
    expect(result).toBe(1); 
  });
});
