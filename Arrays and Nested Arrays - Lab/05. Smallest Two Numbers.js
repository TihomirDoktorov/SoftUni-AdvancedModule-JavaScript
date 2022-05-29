function smalleest(arr) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted[0], ` `, sorted[1]);
}

smalleest([30, 15, 50, 5]);
smalleest([3, 0, 10, 4, 7, 3]);
