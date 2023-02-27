const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months

  // Converting to Date type
  let finalMessage = "Time elapsed: ";
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  // Return error on invalid data
  if (isNaN(d1) || isNaN(d2)) {
    return "Error: Invalid input provided.";
  }

  const year1 = d1.getFullYear();
  const year2 = d2.getFullYear();

  // If duration is negative, multiply with -1 to make it positive
  let millisecondsElapsed = d1.getTime() - d2.getTime();
  if (millisecondsElapsed < 0) {
    millisecondsElapsed *= -1;
  }

  const daysElapsed = Math.floor(millisecondsElapsed / 1000 / 60 / 60 / 24);
  const yearsElapsed = Math.floor(daysElapsed / 365);
  const daysRemaining = Math.floor(daysElapsed - yearsElapsed * 365);
  const monthsElapsed = Math.floor(daysRemaining / 31);

  let yearString = "";
  let monthString = "";

  if (yearsElapsed == 1) {
    yearString = Math.floor(yearsElapsed).toString() + " year, ";
  } else if (yearsElapsed > 1) {
    yearString = Math.floor(yearsElapsed).toString() + " years, ";
  }

  if (monthsElapsed == 1) {
    monthString = Math.floor(monthsElapsed).toString() + " month";
  } else if (monthsElapsed > 1) {
    monthString = Math.floor(monthsElapsed).toString() + " months";
  }

  finalMessage += yearString + monthString;
  return finalMessage;
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, "May 1, 1995"));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, "1975-8-11"));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, "birthdate"));
// Error: Invalid input provided.
