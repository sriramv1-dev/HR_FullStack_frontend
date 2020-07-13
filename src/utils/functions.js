export function calculateFederalTax(salary) {
  // Federal Tax: 14.18%
  var uSalary = salary === undefined || salary === null ? 0 : salary;
  var retVal = uSalary * 0.1418;
  return roundUpTo2Decimals(retVal);
}

export function calculateSocialSecurityTax(salary) {
  // The tax rate is 6.2% on wages up to the taxable wage limit of $127,200.00.
  //   The maximum Social Security tax employees and employers will each pay in 2019 is $8,239.80
  var uSalary = salary === undefined || salary === null ? 0 : salary;
  var socialSecurityTax = uSalary * 0.062;
  var retVal = socialSecurityTax >= 8239.8 ? 8239.8 : socialSecurityTax;
  return roundUpTo2Decimals(retVal);
}

export function calculateMedicare(salary) {
  // Medicare tax rate of 1.45%,  1.45%, increases to 2.35% on wages earned over $200,000.00
  var uSalary = salary === undefined || salary === null ? 0 : salary;
  var retVal = uSalary > 200000.0 ? uSalary * 0.0145 : uSalary * 0.0235;
  return roundUpTo2Decimals(retVal);
}

export function calculateFICA(salary) {
  // The Federal Insurance Contributions Act (FICA) tax rate,
  // which is the combined Social Security tax rate of 6.2% and the Medicare tax rate of 1.45%,
  var uSalary = salary === undefined || salary === null ? 0 : salary;
  var retVal = calculateSocialSecurityTax(uSalary) + calculateMedicare(uSalary);
  return roundUpTo2Decimals(retVal);
}

export function calculateTakeHome(salary, deductions) {
  var retVal = salary - deductions.federalTax - deductions.ficaTax;
  return roundUpTo2Decimals(retVal);
}

function roundUpTo2Decimals(input) {
  return Math.round(input * 100) / 100;
}

export function formatDateTime(idate) {
  var date = new Date(idate);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
}

export function addDays(theDate, days) {
  if (days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  } else {
    return new Date();
  }
}
