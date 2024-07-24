export function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  date.setHours(0, 0, 0, 0);
  const days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
