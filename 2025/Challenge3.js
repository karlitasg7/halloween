// https://www.halloween.dev/retos/2025/3

function myersCalendar(year) {
  if (!year || isNaN(year) || year < 1900 || year > 2100) {
    return [];
  }

  const dates = [];

  for (let i = 0; i < 12; i++) {
    const date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      dates.push(date.toISOString().split("T")[0]);
    }
    if (i == 9) {
      dates.push(`${year}-10-31`);
    }
  }

  return dates;
}

console.log(myersCalendar(2025)); // → ['2025-06-13', '2025-09-13', '2025-10-31']

console.log(myersCalendar(2026)); // → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

console.log(myersCalendar(2024)); // → ['2024-09-13', '2024-10-31', '2024-12-13']
