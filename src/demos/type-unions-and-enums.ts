/* eslint-disable @typescript-eslint/no-unused-vars */
type Values = 1 | 'two' | 3 | 'four' | 5;

type Days = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Friday';

// eslint-disable-next-line @typescript-eslint/comma-dangle
enum Direction {
  North,
  South,
  East,
  West,
}

interface CustomDate {
  day: Days;
}

// This works
let heading = Direction.North;

// This won't
// let today = Days.Friday;

export {};
