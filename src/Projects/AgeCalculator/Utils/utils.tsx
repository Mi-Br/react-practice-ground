import {
	differenceInYears,
	differenceInMonths,
	differenceInDays,
} from "date-fns";

export function diffDaysMonthsYears(birthDate: Date) {
  const currentDate = new Date();

  let years = differenceInYears(currentDate, birthDate);

  // Adjust years if the birthday hasn't occurred yet this year
  if (currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
    years--;
  }

  const months = differenceInMonths(currentDate, new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()));
  const days = differenceInDays(currentDate, new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - months * 30));

  return [years, months, days];
}
