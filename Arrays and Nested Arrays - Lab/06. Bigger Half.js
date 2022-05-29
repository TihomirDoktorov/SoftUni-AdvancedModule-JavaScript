function bigger(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let size = Math.floor(arr.length / 2);
  let sliced = sorted.slice(size, sorted.length);
  return sliced;
}

bigger([4, 7, 2, 5]);
bigger([3, 19, 14, 7, 2, 19, 6]);
