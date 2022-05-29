function biggest(arr) {
  let first = arr[0];
  let max = first[0];
  for (let i = 0; i < arr.length; i++) {
    const arr2 = arr[i];
    for (let j = 0; j < arr2.length; j++) {
      if (Number(arr2[j]) > max) {
        max = arr2[j];
      }
    }
  }
  return max;
}

biggest([[20, 50, 10]]);
biggest([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
