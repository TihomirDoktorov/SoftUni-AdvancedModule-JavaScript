function process(arr) {
  let odd = [];
  for (let i = 1; i < arr.length; i += 2) {
    odd.push(arr[i] * 2);
  }
  odd.reverse();
  console.log(odd);
}

process([10, 15, 20, 25]);
process([3, 0, 10, 4, 7, 3]);
