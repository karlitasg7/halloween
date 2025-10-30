// https://www.halloween.dev/retos/2025/3

function myersCalendar(year) {
  if (isNaN(year) || year < 1900 || year > 9999) {
    return [];
  }

  const dates = new Set();
  const FRIDAY = 5;
  const DAY_13 = 13;

  for (let month = 1; month <= 12; month++) {
    const date = new Date(year, month - 1, DAY_13);
    if (date.getDay() === FRIDAY) {
      const monthStr = String(month).padStart(2, "0");
      dates.add(`${year}-${monthStr}-${DAY_13}`);
    }
  }

  dates.add(`${year}-10-31`);

  return Array.from(dates).sort();
}

console.log(myersCalendar(2025)); // → ['2025-06-13', '2025-09-13', '2025-10-31']

console.log(myersCalendar(2026)); // → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

console.log(myersCalendar(2024)); // → ['2024-09-13', '2024-10-31', '2024-12-13']
