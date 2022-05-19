function operation(num1, num2, str) {
  let result = 0;
  switch (str) {
    case `+`:
      result = num1 + num2;
      break;
    case `-`:
      result = num1 - num2;
      break;
    case `/`:
      result = num1 / num2;
      break;
    case `*`:
      result = num1 * num2;
      break;
    case `%`:
      result = num1 % num2;
      break;
    case `**`:
      result = num1 ** num2;
      break;
    default:
      console.log(`error`);
  }
  console.log(result);
}

operation(5, 6, '+')
operation(3, 5.5, '*')