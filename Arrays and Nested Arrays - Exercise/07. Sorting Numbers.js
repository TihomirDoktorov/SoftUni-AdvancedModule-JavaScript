function sorting(arr) {
  let lowCount = 0;
  let highCount = 0;
  let newArr = [];
  let ascending = arr.slice().sort((a, b) => a - b);
  let decreasing = arr.slice().sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      newArr.push(ascending[highCount]);
      highCount++;
    } else {
      newArr.push(decreasing[lowCount]);
      lowCount++;
    }
  }
  return newArr;
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
