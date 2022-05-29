function sequence(n, k) {
  let sum = 0;
  let arr = [1];
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (i - j >= 0) {
        sum += arr[i - j];
      }
    }
    arr[i] = sum;
    sum = 0;
  }
  return arr;
}

sequence(6, 3);
sequence(8, 2);
