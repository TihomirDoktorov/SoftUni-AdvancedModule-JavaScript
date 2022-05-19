function sum(num1, num2) {
  let number1 = Number(num1);
  let number2 = Number(num2);
  let sum = 0;
  for (let i = number1; i <= number2; i++) {
    sum += i;
  }
  console.log(sum);
}

sum("1", "5");
sum("-8", "20");
