

export function diffDaysMonthsYears(startDate: Date) {
  // Validate input
  if (!(startDate instanceof Date)) {
    throw new Error('Invalid date format');
  }

  // Get the current date and time
  const currentDate = new Date();
  console.log(`current date: ${currentDate}`);
  // Calculate the time difference in minutes
  const timeDifferenceInMinutes = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60));
console.log(`time difference in minutes: ${timeDifferenceInMinutes}`);
  // Convert minutes to years, months, and days
  const years = Math.floor(timeDifferenceInMinutes / (60 * 24 * 365));
  const months = Math.floor((timeDifferenceInMinutes % (60 * 24 * 365)) / (60 * 24 * 30));
  const days = Math.floor((timeDifferenceInMinutes % (60 * 24 * 30)) / (60 * 24));

  return [days, months, years];
}
