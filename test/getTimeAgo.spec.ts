import { getTimeAgo } from './../src/getTimeAgo';
import { formatDistanceToNow, formatDistance } from 'date-fns';

jest.mock('date-fns', () => ({
  formatDistanceToNow: jest.fn(),
  formatDistance: jest.fn(),
}));

describe('getTimeAgo', () => {
  it('should return a formatted string for the time difference from now', () => {
    const mockNow = 'almost 2 years';
    (formatDistanceToNow as jest.Mock).mockReturnValue(mockNow);

    const date = new Date(2023, 0, 1);

    const result = getTimeAgo(date);
    expect(result).toBe(mockNow);
    expect(formatDistanceToNow).toHaveBeenCalledWith(date);
  });

  it('should return a formatted string for the time difference between two dates', () => {
    const mockDistance = '9 days';
    (formatDistance as jest.Mock).mockReturnValue(mockDistance);

    const date = new Date(2023, 0, 1);
    const dateToCompare = new Date(2023, 0, 10);

    const result = getTimeAgo(date, dateToCompare);
    expect(result).toBe(mockDistance);
    expect(formatDistance).toHaveBeenCalledWith(date, dateToCompare);
  });
});
