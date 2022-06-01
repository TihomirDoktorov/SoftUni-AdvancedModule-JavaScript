function extract(arr) {
  let max = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      newArr.push(arr[i]);
      max = arr[i];
    }
  }
  return newArr;
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20, 3, 2, 15, 6, 1]);
