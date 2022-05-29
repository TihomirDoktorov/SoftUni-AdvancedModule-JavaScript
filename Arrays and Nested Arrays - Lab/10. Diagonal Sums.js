function diagonal(arr) {
  let sumLeft = 0;
  let sumRight = 0;
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    sumRight += Number(first[first.length - 1 - i]);
    sumLeft += Number(first[i]);
  }
  console.log(sumLeft,sumRight);
}

diagonal([
  [20, 40],
  [10, 60],
]);
diagonal([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
