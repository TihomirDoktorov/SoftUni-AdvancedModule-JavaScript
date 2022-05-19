function daysInAMonth(num1,num2) {
  const date = new Date(num2, num1, 0);
  console.log(date.getDate());
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
