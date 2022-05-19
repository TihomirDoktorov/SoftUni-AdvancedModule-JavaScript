function stringLenght(stringOne, stringTwo, stringThree) {
  let sumOfAll = stringOne.length + stringTwo.length + stringThree.length;
  let average = Math.floor(sumOfAll / 3);
  console.log(sumOfAll, `\n`, average);
}

stringLenght("chocolate", "ice cream", "cake");
