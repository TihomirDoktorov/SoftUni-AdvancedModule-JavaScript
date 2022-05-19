function aggregate(array) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = ``;
  for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
  }
  console.log(sum1);

  for (let i = 0; i < array.length; i++) {
    sum2 += 1 / array[i];
  }
  console.log(sum2);

  for (let i = 0; i < array.length; i++) {
    sum3 += array[i];
  }
  console.log(sum3);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);